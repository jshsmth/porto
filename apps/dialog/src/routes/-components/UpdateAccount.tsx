import { Button } from '@porto/apps/components'
import { useMutation, useQuery } from '@tanstack/react-query'
import { Address } from 'ox'
import { Account, Call, Key, Relay as Relay_porto } from 'porto/internal'
import { Hooks } from 'porto/remote'
import * as React from 'react'
import { waitForCallsStatus } from 'viem/actions'
import { useAccount } from 'wagmi'

import { CheckBalance } from '~/components/CheckBalance'
import { porto } from '~/lib/Porto'
import * as Relay from '~/lib/Relay'
import { ActionRequest } from './ActionRequest'
import { Layout } from './Layout'

export function UpdateAccount(props: UpdateAccount.Props) {
  const { feeToken, onCancel, onSuccess } = props

  const version = UpdateAccount.useAccountVersion()
  const { current, latest } = version.data ?? {}

  const client = Hooks.useClient(porto)
  const healthQuery = useQuery({
    enabled: !!client,
    queryFn: () => Relay_porto.health(client),
    queryKey: ['health', client.uid],
  })
  const { delegationImplementation: delegation } = healthQuery.data ?? {}

  const account = Hooks.useAccount(porto)
  const prepareCallsQuery = Relay.usePrepareCalls({
    calls:
      account?.address && delegation
        ? [
            Call.upgradeProxyDelegation({
              delegation,
              to: account.address,
            }),
          ]
        : [],
    enabled: !!account?.address && !!delegation,
    feeToken,
  })
  const context = prepareCallsQuery.data?.context
  const digest = prepareCallsQuery.data?.digest
  const quote = prepareCallsQuery.data?.capabilities.quote

  // TODO: consider using EIP-1193 Provider + `wallet_sendPreparedCalls` in
  // the future (for case where the account wants to self-relay).
  const sendCallsMutation = useMutation({
    async mutationFn() {
      if (!account) throw new Error('account is required.')
      if (!context) throw new Error('context is required.')
      if (!digest) throw new Error('digest is required.')

      const key = Account.getKey(account, {
        role: 'admin',
      })
      if (!key) throw new Error('admin key not found.')

      const signature = await Key.sign(key, {
        payload: digest,
        wrap: false,
      })
      const { id } = await Relay_porto.sendCalls(client, {
        context,
        signature,
      })
      return await waitForCallsStatus(client, {
        id,
        timeout: 20_000,
      })
    },
    onSuccess(data) {
      onSuccess(data)
    },
  })

  return (
    <CheckBalance
      address={account?.address}
      feeToken={feeToken}
      onReject={onCancel}
      query={prepareCallsQuery}
    >
      <Layout
        loading={sendCallsMutation.isPending}
        loadingTitle="Updating account..."
      >
        <Layout.Header>
          <Layout.Header.Default
            content={
              <>
                New features are available for Porto. Upgrade your account to
                continue.
              </>
            }
            title="Upgrade version"
            variant="warning"
          />
        </Layout.Header>

        <Layout.Content>
          <ActionRequest.PaneWithDetails
            loading={version.isPending}
            quote={quote}
            variant={version.isError ? 'warning' : 'default'}
          >
            <div className="flex items-center justify-center gap-2">
              <div className="font-mono text-secondary tabular-nums">
                {current}
              </div>
              <div className="text-success">→</div>
              <div className="font-mono tabular-nums">{latest}</div>
            </div>
          </ActionRequest.PaneWithDetails>
        </Layout.Content>

        <Layout.Footer>
          <Layout.Footer.Actions>
            <Button onClick={onCancel} type="button">
              Cancel
            </Button>

            <Button
              className="flex-grow"
              onClick={() => sendCallsMutation.mutate()}
              type="button"
              variant="accent"
            >
              Update now
            </Button>
          </Layout.Footer.Actions>
        </Layout.Footer>
      </Layout>
    </CheckBalance>
  )
}

export namespace UpdateAccount {
  export type Props = {
    feeToken?: Address.Address | undefined
    onCancel: () => void
    onSuccess: (data: { id: string }) => void
  }

  export function CheckUpdate({ children }: CheckUpdate.Props) {
    const version = useAccountVersion()
    const needsUpdate =
      version.isSuccess && version.data?.current !== version.data?.latest

    const [skipUpdate, setSkipUpdate] = React.useState(false)

    if (version.fetchStatus === 'idle' && version.status === 'pending')
      return children
    if (version.isPending)
      return (
        <Layout loading loadingTitle="Loading...">
          <div />
        </Layout>
      )
    if (needsUpdate && !skipUpdate)
      return (
        <UpdateAccount
          onCancel={() => setSkipUpdate(true)}
          onSuccess={() => setSkipUpdate(true)}
        />
      )
    return children
  }

  export declare namespace CheckUpdate {
    export type Props = {
      children: React.ReactNode
    }
  }

  export function useAccountVersion() {
    const account = useAccount()
    const providerClient = Hooks.useProviderClient(porto)

    return useQuery({
      enabled: !!account.isConnected,
      async queryFn() {
        const version = await providerClient.request({
          method: 'experimental_getAccountVersion',
          params: [{}],
        })
        return version
      },
      queryKey: ['version', providerClient.uid],
    })
  }
}
