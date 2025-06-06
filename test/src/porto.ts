import { Value } from 'ox'
import { Chains, Mode, Porto, Storage } from 'porto'
import { custom, http, type Transport } from 'viem'
import * as Porto_internal from '../../src/core/internal/porto.js'
import * as Contracts from './_generated/contracts.js'
import * as Anvil from './anvil.js'
import * as Relay from './relay.js'

export const chain = Anvil.enabled ? Chains.anvil : Chains.odysseyDevnet

export const exp1Address = Contracts.exp1Address[chain.id]
export const exp1Abi = Contracts.exp1Abi
export const exp1Config = {
  abi: exp1Abi,
  address: exp1Address,
} as const

export const exp2Address = Contracts.exp2Address[chain.id]
export const exp2Abi = Contracts.exp2Abi
export const exp2Config = {
  abi: exp2Abi,
  address: exp2Address,
} as const

const relayUrl = Anvil.enabled
  ? Relay.instances.odyssey.rpcUrl
  : 'https://relay-staging.ithaca.xyz'

export function getPorto(
  parameters: {
    mode?: (parameters: {
      feeToken?: Mode.relay.Parameters['feeToken'] | undefined
      permissionFeeSpendLimit?:
        | Mode.relay.Parameters['permissionFeeSpendLimit']
        | undefined
      mock: boolean
    }) => Mode.Mode | undefined
    transports?:
      | {
          default?: Transport | undefined
          relay?: false | Transport | undefined
        }
      | undefined
  } = {},
) {
  const { mode = Mode.contract, transports = {} } = parameters
  const porto = Porto.create({
    chains: [chain],
    mode: mode({
      feeToken: 'EXP1',
      mock: true,
      permissionFeeSpendLimit: {
        EXP1: {
          limit: Value.fromEther('100'),
          period: 'day',
        },
      },
    }),
    storage: Storage.memory(),
    transports: {
      [chain.id]: {
        default:
          transports.default ??
          (Anvil.enabled ? custom(Anvil.instances.odyssey) : http()),
        relay:
          transports.relay === false
            ? undefined
            : (transports.relay ??
              http(relayUrl, {
                async onFetchRequest(_, init) {
                  if (process.env.VITE_RELAY_LOGS !== 'true') return
                  console.log(`curl \\
  ${relayUrl} \\
  -X POST \\
  -H "Content-Type: application/json" \\
  -d '${JSON.stringify(JSON.parse(init.body as string))}'`)
                },
                async onFetchResponse(response) {
                  if (process.env.VITE_RELAY_LOGS !== 'true') return
                  console.log(
                    '> ' + JSON.stringify(await response.clone().json()),
                  )
                },
              })),
      },
    } as Porto.Config['transports'],
  })

  const client = Porto_internal.getClient(porto).extend(() => ({
    mode: 'anvil',
  }))

  const delegation = client.chain.contracts.delegation.address

  return { client, delegation, porto }
}
