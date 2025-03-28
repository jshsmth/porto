import { Hex, P256, PublicKey, Signature, TypedData, Value } from 'ox'
import { Implementation } from 'porto'
import { getBalance, verifyMessage, verifyTypedData } from 'viem/actions'
import { describe, expect, test } from 'vitest'

import { setBalance } from '../../../test/src/actions.js'
import { getPorto as getPorto_ } from '../../../test/src/porto.js'
import { tmp } from './implementations/relay.js'
import * as Porto_internal from './porto.js'

describe.each([
  ['local', Implementation.local],
  ['relay', Implementation.relay],
] as const)('%s', (mode, implementation) => {
  const getPorto = () =>
    getPorto_({
      implementation,
      transports: {
        relay: mode === 'relay',
      },
    })

  // TODO: remove this
  tmp.setBalance = async (address) => {
    await setBalance(getPorto().client, {
      address,
      value: 10000000000000000000000n,
    })
  }

  describe('eth_accounts', () => {
    test('default', async () => {
      const { porto } = getPorto()
      await porto.provider.request({
        method: 'wallet_connect',
        params: [
          {
            capabilities: {
              createAccount: true,
            },
          },
        ],
      })

      const accounts = await porto.provider.request({
        method: 'eth_accounts',
      })
      expect(accounts.length).toBe(1)
    })

    test('behavior: disconnected', async () => {
      const { porto } = getPorto()
      await expect(
        porto.provider.request({
          method: 'eth_accounts',
        }),
      ).rejects.matchSnapshot()
    })
  })

  describe('eth_requestAccounts', () => {
    test('default', async () => {
      const { porto } = getPorto()
      await porto.provider.request({
        method: 'experimental_createAccount',
      })
      await porto.provider.request({
        method: 'wallet_disconnect',
      })
      const accounts = await porto.provider.request({
        method: 'eth_requestAccounts',
      })
      expect(accounts.length).toBeGreaterThan(0)
    })
  })

  describe('eth_sendTransaction', () => {
    test('default', async () => {
      const { porto } = getPorto()
      const client = Porto_internal.getClient(porto).extend(() => ({
        mode: 'anvil',
      }))

      const { address } = await porto.provider.request({
        method: 'experimental_createAccount',
      })
      await setBalance(client, {
        address,
        value: Value.fromEther('10000'),
      })

      const alice = Hex.random(20)

      const hash = await porto.provider.request({
        method: 'eth_sendTransaction',
        params: [
          {
            from: address,
            to: alice,
            value: Hex.fromNumber(69420),
          },
        ],
      })

      expect(hash).toBeDefined()
      expect(await getBalance(client, { address: alice })).toBe(69420n)
    })
  })

  describe('eth_signTypedData_v4', () => {
    test('default', async () => {
      const { porto } = getPorto()
      const client = Porto_internal.getClient(porto)
      const { address } = await porto.provider.request({
        method: 'experimental_createAccount',
      })
      const signature = await porto.provider.request({
        method: 'eth_signTypedData_v4',
        params: [address, TypedData.serialize(typedData)],
      })
      expect(signature).toBeDefined()

      const valid = await verifyTypedData(client, {
        ...typedData,
        address,
        signature,
      })
      expect(valid).toBe(true)
    })
  })

  describe('experimental_grantPermissions', () => {
    test('default', async () => {
      const messages: any[] = []

      const { porto } = getPorto()
      porto.provider.on('message', (message) => messages.push(message))

      await porto.provider.request({
        method: 'experimental_createAccount',
      })
      await porto.provider.request({
        method: 'experimental_grantPermissions',
        params: [
          {
            expiry: 9999999999,
            permissions: {
              calls: [{ signature: 'mint()' }],
            },
          },
        ],
      })

      const accounts = porto._internal.store.getState().accounts
      expect(accounts.length).toBe(1)
      expect(accounts![0]!.keys?.length).toBe(2)
      expect(
        accounts![0]!.keys?.map((x) => ({
          ...x,
          expiry: null,
          publicKey: null,
          hash: null,
        })),
      ).matchSnapshot()

      expect(messages[0].type).toBe('permissionsChanged')
      expect(messages[0].data.length).toBe(1)
    })

    test('behavior: provided key', async () => {
      const messages: any[] = []

      const { porto } = getPorto()
      porto.provider.on('message', (message) => messages.push(message))

      await porto.provider.request({
        method: 'experimental_createAccount',
      })

      const permissions = await porto.provider.request({
        method: 'experimental_grantPermissions',
        params: [
          {
            expiry: 9999999999,
            key: {
              publicKey:
                '0x86a0d77beccf47a0a78cccfc19fdfe7317816740c9f9e6d7f696a02b0c66e0e21744d93c5699e9ce658a64ce60df2f32a17954cd577c713922bf62a1153cf68e',
              type: 'p256',
            },
            permissions: {
              calls: [{ signature: 'mint()' }],
            },
          },
        ],
      })

      expect(permissions.address).toBeDefined()
      expect({ ...permissions, address: null }).matchSnapshot()

      {
        const permissions = await porto.provider.request({
          method: 'experimental_grantPermissions',
          params: [
            {
              expiry: 9999999999,
              key: {
                publicKey: '0x0000000000000000000000000000000000000000',
                type: 'address',
              },
              permissions: {
                calls: [{ signature: 'mint()' }],
                spend: [
                  {
                    limit: Hex.fromNumber(Value.fromEther('1.5')),
                    period: 'day',
                  },
                ],
              },
            },
          ],
        })

        expect(permissions.address).toBeDefined()
        expect({ ...permissions, address: null }).matchSnapshot()
      }

      const accounts = porto._internal.store.getState().accounts
      expect(accounts.length).toBe(1)
      expect(accounts![0]!.keys?.length).toBe(3)
      expect(
        accounts![0]!.keys?.map((x) => ({
          ...x,
          expiry: null,
          publicKey: null,
          hash: null,
        })),
      ).matchSnapshot()

      expect(messages[0].type).toBe('permissionsChanged')
      expect(messages[0].data.length).toBe(1)
    })

    test('behavior: no permissions', async () => {
      const { porto } = getPorto()
      await porto.provider.request({
        method: 'experimental_createAccount',
      })
      await expect(
        porto.provider.request({
          method: 'experimental_grantPermissions',
          params: [
            {
              expiry: 9999999999,
              key: {
                publicKey:
                  '0x86a0d77beccf47a0a78cccfc19fdfe7317816740c9f9e6d7f696a02b0c66e0e21744d93c5699e9ce658a64ce60df2f32a17954cd577c713922bf62a1153cf68e',
                type: 'p256',
              },
              permissions: {
                calls: [],
              },
            },
          ],
        }),
      ).rejects.matchSnapshot()
    })

    test('behavior: unlimited expiry', async () => {
      const { porto } = getPorto()
      await porto.provider.request({
        method: 'experimental_createAccount',
      })
      await expect(
        porto.provider.request({
          method: 'experimental_grantPermissions',
          params: [
            {
              expiry: 0,
              key: {
                publicKey:
                  '0x86a0d77beccf47a0a78cccfc19fdfe7317816740c9f9e6d7f696a02b0c66e0e21744d93c5699e9ce658a64ce60df2f32a17954cd577c713922bf62a1153cf68e',
                type: 'p256',
              },
              permissions: {
                calls: [{ signature: 'mint()' }],
              },
            },
          ],
        }),
      ).rejects.matchSnapshot()
    })
  })

  describe('experimental_createAccount', () => {
    test('default', async () => {
      const { porto } = getPorto()
      const account = await porto.provider.request({
        method: 'experimental_createAccount',
      })
      expect(account).toBeDefined()
    })
  })

  describe('experimental_permissions', () => {
    test('default', async () => {
      const { porto } = getPorto()
      await porto.provider.request({
        method: 'experimental_createAccount',
      })
      await porto.provider.request({
        method: 'experimental_grantPermissions',
        params: [
          {
            expiry: 9999999999,
            permissions: {
              calls: [{ signature: 'mint()' }],
            },
          },
        ],
      })
      await porto.provider.request({
        method: 'experimental_grantPermissions',
        params: [
          {
            expiry: 9999999999,
            permissions: {
              calls: [{ signature: 'mint()' }],
              spend: [
                {
                  limit: Hex.fromNumber(Value.fromEther('1.5')),
                  period: 'day',
                },
              ],
            },
          },
        ],
      })
      const permissions = await porto.provider.request({
        method: 'experimental_permissions',
      })
      expect(permissions.length).toBe(2)
    })
  })

  describe('experimental_revokePermissions', () => {
    test('default', async () => {
      const { porto } = getPorto()

      const messages: any[] = []
      porto.provider.on('message', (message) => messages.push(message))

      await porto.provider.request({
        method: 'experimental_createAccount',
      })
      const { id } = await porto.provider.request({
        method: 'experimental_grantPermissions',
        params: [
          {
            expiry: 9999999999,
            permissions: {
              calls: [{ signature: 'mint()' }],
            },
          },
        ],
      })
      let accounts = porto._internal.store.getState().accounts
      expect(accounts.length).toBe(1)
      expect(accounts![0]!.keys?.length).toBe(2)
      expect(
        accounts![0]!.keys?.map((x) => ({
          ...x,
          expiry: null,
          publicKey: null,
          hash: null,
        })),
      ).matchSnapshot()

      expect(messages[0].type).toBe('permissionsChanged')
      expect(messages[0].data.length).toBe(1)

      await porto.provider.request({
        method: 'experimental_revokePermissions',
        params: [{ id }],
      })

      accounts = porto._internal.store.getState().accounts
      expect(accounts![0]!.keys?.length).toBe(1)
      expect(
        accounts![0]!.keys?.map((x) => ({
          ...x,
          expiry: null,
          publicKey: null,
          hash: null,
        })),
      ).matchSnapshot()

      expect(messages[1].type).toBe('permissionsChanged')
      expect(messages[1].data.length).toBe(0)
    })

    test('behavior: revoke last admin key', async () => {
      const { porto } = getPorto()

      const messages: any[] = []
      porto.provider.on('message', (message) => messages.push(message))

      await porto.provider.request({
        method: 'experimental_createAccount',
      })

      const accounts = porto._internal.store.getState().accounts
      const id = accounts![0]!.keys![0]!.publicKey

      await expect(() =>
        porto.provider.request({
          method: 'experimental_revokePermissions',
          params: [{ id }],
        }),
      ).rejects.matchSnapshot()
    })
  })

  describe('personal_sign', () => {
    test('default', async () => {
      const { porto } = getPorto()
      const client = Porto_internal.getClient(porto)
      const { address } = await porto.provider.request({
        method: 'experimental_createAccount',
      })
      const signature = await porto.provider.request({
        method: 'personal_sign',
        params: [Hex.fromString('hello'), address],
      })
      expect(signature).toBeDefined()

      const valid = await verifyMessage(client, {
        address,
        message: 'hello',
        signature,
      })
      expect(valid).toBe(true)
    })
  })

  describe('wallet_connect', () => {
    test('default', async () => {
      const messages: any[] = []

      const { client, porto } = getPorto()
      porto.provider.on('connect', (message) => messages.push(message))

      await porto.provider.request({
        method: 'experimental_createAccount',
      })
      await porto.provider.request({
        method: 'wallet_disconnect',
      })
      await porto.provider.request({
        method: 'wallet_connect',
      })
      const accounts = porto._internal.store.getState().accounts
      expect(accounts.length).toBe(1)
      expect(accounts![0]!.keys?.length).toBe(1)
      expect(
        accounts![0]!.keys?.map((x) => ({
          ...x,
          credential: null,
          expiry: null,
          publicKey: null,
          hash: null,
        })),
      ).matchSnapshot()

      expect(messages[0].chainId).toBe(Hex.fromNumber(client.chain.id))
    })

    test('behavior: `createAccount` capability', async () => {
      const messages: any[] = []

      const { client, porto } = getPorto()
      porto.provider.on('connect', (message) => messages.push(message))

      await porto.provider.request({
        method: 'wallet_connect',
        params: [
          {
            capabilities: {
              createAccount: true,
            },
          },
        ],
      })
      const accounts = porto._internal.store.getState().accounts
      expect(accounts.length).toBe(1)
      expect(accounts![0]!.keys?.length).toBe(1)
      expect(
        accounts![0]!.keys?.map((x) => ({
          ...x,
          expiry: null,
          publicKey: null,
          hash: null,
        })),
      ).matchSnapshot(`
        [
          {
            "canSign": true,
            "expiry": null,
            "hash": null,
            "initialized": true,
            "permissions": undefined,
            "privateKey": [Function],
            "publicKey": null,
            "role": "admin",
            "type": "p256",
          },
        ]
      `)

      expect(messages[0].chainId).toBe(Hex.fromNumber(client.chain.id))
    })

    test('behavior: `createAccount` + `grantPermissions` capability', async () => {
      const messages: any[] = []

      const { client, porto } = getPorto()
      porto.provider.on('connect', (message) => messages.push(message))

      await porto.provider.request({
        method: 'wallet_connect',
        params: [
          {
            capabilities: {
              createAccount: true,
              grantPermissions: {
                expiry: 9999999999,
                permissions: {
                  calls: [{ signature: 'mint()' }],
                },
              },
            },
          },
        ],
      })
      const accounts = porto._internal.store.getState().accounts
      expect(accounts.length).toBe(1)
      expect(accounts![0]!.keys?.length).toBe(2)
      expect(
        accounts![0]!.keys?.map((x) => ({
          ...x,
          expiry: null,
          publicKey: null,
          hash: null,
        })),
      ).matchSnapshot()

      expect(messages[0].chainId).toBe(Hex.fromNumber(client.chain.id))
    })

    test('behavior: `createAccount` + `grantPermissions` capability (provided key)', async () => {
      const messages: any[] = []

      const { client, porto } = getPorto()
      porto.provider.on('connect', (message) => messages.push(message))

      const privateKey =
        '0x1e8dd87f21bc6bbfc86e726ca9c21a285c13984461cf2e3adb265019fb78203d'
      const publicKey = PublicKey.toHex(P256.getPublicKey({ privateKey }), {
        includePrefix: false,
      })

      await porto.provider.request({
        method: 'wallet_connect',
        params: [
          {
            capabilities: {
              createAccount: true,
              grantPermissions: {
                expiry: 9999999999,
                key: {
                  publicKey,
                  type: 'p256',
                },
                permissions: {
                  calls: [{ signature: 'mint()' }],
                },
              },
            },
          },
        ],
      })
      const accounts = porto._internal.store.getState().accounts
      expect(accounts.length).toBe(1)
      expect(accounts![0]!.keys?.length).toBe(2)
      expect(
        accounts![0]!.keys?.map((x, i) => ({
          ...x,
          expiry: i === 0 ? null : x.expiry,
          publicKey: i === 0 ? null : x.publicKey,
          hash: i === 0 ? null : x.hash,
        })),
      ).matchSnapshot()

      expect(messages[0].chainId).toBe(Hex.fromNumber(client.chain.id))
    })

    test('behavior: `grantPermissions` capability (unlimited expiry)', async () => {
      const { porto } = getPorto()
      await expect(() =>
        porto.provider.request({
          method: 'wallet_connect',
          params: [
            {
              capabilities: {
                createAccount: true,
                grantPermissions: {
                  expiry: 0,
                  permissions: {
                    calls: [{ signature: 'mint()' }],
                  },
                },
              },
            },
          ],
        }),
      ).rejects.matchSnapshot()
    })

    test('behavior: `grantPermissions` capability (no permissions)', async () => {
      const { porto } = getPorto()
      await expect(() =>
        porto.provider.request({
          method: 'wallet_connect',
          params: [
            {
              capabilities: {
                createAccount: true,
                grantPermissions: {
                  expiry: 9999999,
                  permissions: {
                    calls: [],
                  },
                },
              },
            },
          ],
        }),
      ).rejects.matchSnapshot()
    })
  })

  describe('wallet_disconnect', () => {
    test('default', async () => {
      const messages: any[] = []

      const { porto } = getPorto()
      porto.provider.on('disconnect', (message) => messages.push(message))

      await porto.provider.request({
        method: 'experimental_createAccount',
      })
      await porto.provider.request({
        method: 'wallet_disconnect',
      })

      const accounts = porto._internal.store.getState().accounts
      expect(accounts.length).toBe(0)
      expect(messages).matchSnapshot()
    })
  })

  describe('wallet_sendCalls', () => {
    test('default', async () => {
      const { porto } = getPorto()
      const client = Porto_internal.getClient(porto).extend(() => ({
        mode: 'anvil',
      }))

      const { address } = await porto.provider.request({
        method: 'experimental_createAccount',
      })
      await setBalance(client, {
        address,
        value: Value.fromEther('10000'),
      })

      const alice = Hex.random(20)

      const hash = await porto.provider.request({
        method: 'wallet_sendCalls',
        params: [
          {
            from: address,
            calls: [
              {
                to: alice,
                value: Hex.fromNumber(69420),
              },
            ],
            version: '1',
          },
        ],
      })

      expect(hash).toBeDefined()
      expect(await getBalance(client, { address: alice })).toBe(69420n)
    })

    test('behavior: use inferred permissions', async () => {
      const { porto } = getPorto()
      const client = Porto_internal.getClient(porto).extend(() => ({
        mode: 'anvil',
      }))

      const { address } = await porto.provider.request({
        method: 'experimental_createAccount',
      })
      await setBalance(client, {
        address,
        value: Value.fromEther('10000'),
      })

      const alice = Hex.random(20)

      await porto.provider.request({
        method: 'experimental_grantPermissions',
        params: [
          {
            expiry: 9999999999,
            permissions: {
              calls: [{ to: alice }],
              spend: [{ limit: Hex.fromNumber(69420), period: 'day' }],
            },
          },
        ],
      })

      const hash = await porto.provider.request({
        method: 'wallet_sendCalls',
        params: [
          {
            from: address,
            calls: [
              {
                to: alice,
                value: Hex.fromNumber(69420),
              },
            ],
            version: '1',
          },
        ],
      })

      expect(hash).toBeDefined()
      expect(await getBalance(client, { address: alice })).toBe(69420n)
    })

    test('behavior: `permissions` capability', async () => {
      const { porto } = getPorto()
      const client = Porto_internal.getClient(porto).extend(() => ({
        mode: 'anvil',
      }))

      const { address } = await porto.provider.request({
        method: 'experimental_createAccount',
      })
      await setBalance(client, {
        address,
        value: Value.fromEther('10000'),
      })

      const alice = Hex.random(20)

      const permissions = await porto.provider.request({
        method: 'experimental_grantPermissions',
        params: [
          {
            expiry: 9999999999,
            permissions: {
              calls: [{ to: alice }],
              spend: [{ limit: Hex.fromNumber(69420), period: 'day' }],
            },
          },
        ],
      })
      const hash = await porto.provider.request({
        method: 'wallet_sendCalls',
        params: [
          {
            capabilities: {
              permissions,
            },
            from: address,
            calls: [
              {
                to: alice,
                value: Hex.fromNumber(69420),
              },
            ],
            version: '1',
          },
        ],
      })

      expect(hash).toBeDefined()
      expect(await getBalance(client, { address: alice })).toBe(69420n)
    })

    test('behavior: `permissions.calls` unauthorized', async () => {
      const { porto } = getPorto()
      const client = Porto_internal.getClient(porto).extend(() => ({
        mode: 'anvil',
      }))

      const { address } = await porto.provider.request({
        method: 'experimental_createAccount',
      })
      await setBalance(client, {
        address,
        value: Value.fromEther('10000'),
      })

      const alice = '0x0000000000000000000000000000000000069422'

      const permissions = await porto.provider.request({
        method: 'experimental_grantPermissions',
        params: [
          {
            expiry: 9999999999,
            permissions: {
              calls: [{ to: '0x0000000000000000000000000000000000000000' }],
              spend: [{ limit: Hex.fromNumber(69420), period: 'day' }],
            },
          },
        ],
      })
      await expect(() =>
        porto.provider.request({
          method: 'wallet_sendCalls',
          params: [
            {
              capabilities: {
                permissions,
              },
              from: address,
              calls: [
                {
                  to: alice,
                  value: Hex.fromNumber(69420),
                },
              ],
              version: '1',
            },
          ],
        }),
      ).rejects.toThrowError('Unauthorized')
    })

    test('behavior: `permissions.spend` exceeded', async () => {
      const { porto } = getPorto()
      const client = Porto_internal.getClient(porto).extend(() => ({
        mode: 'anvil',
      }))

      const { address } = await porto.provider.request({
        method: 'experimental_createAccount',
      })
      await setBalance(client, {
        address,
        value: Value.fromEther('10000'),
      })

      const alice = Hex.random(20)

      const permissions = await porto.provider.request({
        method: 'experimental_grantPermissions',
        params: [
          {
            expiry: 9999999999,
            permissions: {
              calls: [{ to: alice }],
              spend: [
                {
                  limit: Hex.fromNumber(69420),
                  period: 'day',
                },
              ],
            },
          },
        ],
      })

      await porto.provider.request({
        method: 'wallet_sendCalls',
        params: [
          {
            capabilities: {
              permissions,
            },
            from: address,
            calls: [
              {
                to: alice,
                value: Hex.fromNumber(69420),
              },
            ],
            version: '1',
          },
        ],
      })

      await expect(() =>
        porto.provider.request({
          method: 'wallet_sendCalls',
          params: [
            {
              capabilities: {
                permissions,
              },
              from: address,
              calls: [
                {
                  to: alice,
                  value: Hex.fromNumber(1),
                },
              ],
              version: '1',
            },
          ],
        }),
      ).rejects.toThrowError('ExceededSpendLimit')
    })

    test('behavior: revoked permission', async () => {
      const { porto } = getPorto()
      const client = Porto_internal.getClient(porto).extend(() => ({
        mode: 'anvil',
      }))

      const { address } = await porto.provider.request({
        method: 'experimental_createAccount',
      })
      await setBalance(client, {
        address,
        value: Value.fromEther('10000'),
      })

      const alice = Hex.random(20)

      const permissions = await porto.provider.request({
        method: 'experimental_grantPermissions',
        params: [
          {
            expiry: 9999999999,
            permissions: {
              calls: [{ to: alice }],
              spend: [{ limit: Hex.fromNumber(69420 * 3), period: 'day' }],
            },
          },
        ],
      })
      const hash = await porto.provider.request({
        method: 'wallet_sendCalls',
        params: [
          {
            capabilities: {
              permissions,
            },
            from: address,
            calls: [
              {
                to: alice,
                value: Hex.fromNumber(69420),
              },
            ],
            version: '1',
          },
        ],
      })

      expect(hash).toBeDefined()
      expect(await getBalance(client, { address: alice })).toBe(69420n)

      await porto.provider.request({
        method: 'experimental_revokePermissions',
        params: [{ id: permissions.id }],
      })
      await expect(() =>
        porto.provider.request({
          method: 'wallet_sendCalls',
          params: [
            {
              capabilities: {
                permissions,
              },
              from: address,
              calls: [
                {
                  to: alice,
                  value: Hex.fromNumber(69420),
                },
              ],
              version: '1',
            },
          ],
        }),
      ).rejects.toThrowError()
    })

    test('behavior: not provider-managed permission', async () => {
      const { porto } = getPorto()
      const client = Porto_internal.getClient(porto).extend(() => ({
        mode: 'anvil',
      }))

      const { address } = await porto.provider.request({
        method: 'experimental_createAccount',
      })
      await setBalance(client, {
        address,
        value: Value.fromEther('10000'),
      })

      const alice = Hex.random(20)

      const { id } = await porto.provider.request({
        method: 'experimental_grantPermissions',
        params: [
          {
            expiry: 9999999999,
            key: {
              publicKey:
                '0x86a0d77beccf47a0a78cccfc19fdfe7317816740c9f9e6d7f696a02b0c66e0e21744d93c5699e9ce658a64ce60df2f32a17954cd577c713922bf62a1153cf68e',
              type: 'p256',
            },
            permissions: {
              calls: [{ to: alice }],
            },
          },
        ],
      })
      await expect(() =>
        porto.provider.request({
          method: 'wallet_sendCalls',
          params: [
            {
              capabilities: {
                permissions: {
                  id,
                },
              },
              from: address,
              calls: [
                {
                  to: alice,
                  value: Hex.fromNumber(69420),
                },
              ],
              version: '1',
            },
          ],
        }),
      ).rejects.matchSnapshot()
    })

    test('behavior: permission does not exist', async () => {
      const { porto } = getPorto()
      const client = Porto_internal.getClient(porto).extend(() => ({
        mode: 'anvil',
      }))

      const { address } = await porto.provider.request({
        method: 'experimental_createAccount',
      })
      await setBalance(client, {
        address,
        value: Value.fromEther('10000'),
      })

      const alice = Hex.random(20)

      await expect(() =>
        porto.provider.request({
          method: 'wallet_sendCalls',
          params: [
            {
              capabilities: {
                permissions: {
                  id: '0x86a0d77beccf47a0a78cccfc19fdfe7317816740c9f9e6d7f696a02b0c66e0e21744d93c5699e9ce658a64ce60df2f32a17954cd577c713922bf62a1153cf68e',
                },
              },
              from: address,
              calls: [
                {
                  to: alice,
                  value: Hex.fromNumber(69420),
                },
              ],
              version: '1',
            },
          ],
        }),
      ).rejects.matchSnapshot()
    })

    test('behavior: no calls.to', async () => {
      const { porto } = getPorto()

      const { address } = await porto.provider.request({
        method: 'experimental_createAccount',
      })

      await expect(() =>
        porto.provider.request({
          method: 'wallet_sendCalls',
          params: [
            {
              from: address,
              calls: [
                // @ts-ignore
                {
                  data: '0xdeadbeef',
                },
              ],
              version: '1',
            },
          ],
        }),
      ).rejects.matchSnapshot()
    })
  })

  describe('wallet_prepareCalls → wallet_sendPreparedCalls', () => {
    test('default', async () => {
      const { porto } = getPorto()
      const client = Porto_internal.getClient(porto).extend(() => ({
        mode: 'anvil',
      }))

      const alice = Hex.random(20)

      const privateKey = P256.randomPrivateKey()
      const publicKey = PublicKey.toHex(P256.getPublicKey({ privateKey }), {
        includePrefix: false,
      })

      const { accounts } = await porto.provider.request({
        method: 'wallet_connect',
        params: [
          {
            capabilities: {
              createAccount: true,
              grantPermissions: {
                expiry: 9999999999,
                key: {
                  publicKey: publicKey,
                  type: 'p256',
                },
                permissions: {
                  calls: [{ to: alice }],
                  spend: [
                    {
                      limit: Hex.fromNumber(42069n),
                      period: 'day',
                    },
                  ],
                },
              },
            },
          },
        ],
      })

      await setBalance(client, {
        address: accounts[0]?.address!,
        value: Value.fromEther('10000'),
      })

      const key = {
        publicKey,
        type: 'p256',
      } as const

      const { digest, ...request } = await porto.provider.request({
        method: 'wallet_prepareCalls',
        params: [
          {
            calls: [
              {
                to: alice,
                value: Hex.fromNumber(42069n),
              },
            ],
            key,
          },
        ],
      })

      const signature = P256.sign({ payload: digest, privateKey })

      await porto.provider.request({
        method: 'wallet_sendPreparedCalls',
        params: [
          {
            ...request,
            key,
            signature: Signature.toHex(signature),
          },
        ],
      })

      expect(await getBalance(client, { address: alice })).toBe(42069n)
    })
  })

  test('behavior: fall through', async () => {
    const { porto } = getPorto()
    expect(
      await porto.provider.request({
        method: 'eth_blockNumber',
      }),
    ).toBeDefined()
  })

  test('behavior: unsupported wallet_ method', async () => {
    const { porto } = getPorto()
    await expect(() =>
      porto.provider.request({
        method: 'wallet_lol',
      }),
    ).rejects.toThrowError(
      'The provider does not support the requested method.',
    )
  })
})

const typedData = {
  domain: {
    name: 'Ether Mail 🥵',
    version: '1.1.1',
    chainId: 1,
    verifyingContract: '0x0000000000000000000000000000000000000000',
  },
  types: {
    Name: [
      { name: 'first', type: 'string' },
      { name: 'last', type: 'string' },
    ],
    Person: [
      { name: 'name', type: 'Name' },
      { name: 'wallet', type: 'address' },
      { name: 'favoriteColors', type: 'string[3]' },
      { name: 'foo', type: 'uint256' },
      { name: 'age', type: 'uint8' },
      { name: 'isCool', type: 'bool' },
    ],
    Mail: [
      { name: 'timestamp', type: 'uint256' },
      { name: 'from', type: 'Person' },
      { name: 'to', type: 'Person' },
      { name: 'contents', type: 'string' },
      { name: 'hash', type: 'bytes' },
    ],
  },
  primaryType: 'Mail',
  message: {
    timestamp: 1234567890n,
    contents: 'Hello, Bob! 🖤',
    hash: '0x1234567890abcdef1234567890abcdef1234567890abcdef1234567890abcdef',
    from: {
      name: {
        first: 'Cow',
        last: 'Burns',
      },
      wallet: '0xCD2a3d9F938E13CD947Ec05AbC7FE734Df8DD826',
      age: 69,
      foo: 123123123123123123n,
      favoriteColors: ['red', 'green', 'blue'],
      isCool: false,
    },
    to: {
      name: { first: 'Bob', last: 'Builder' },
      wallet: '0xbBbBBBBbbBBBbbbBbbBbbbbBBbBbbbbBbBbbBBbB',
      age: 70,
      foo: 123123123123123123n,
      favoriteColors: ['orange', 'yellow', 'green'],
      isCool: true,
    },
  },
} as const
