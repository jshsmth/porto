import { Env, PortoConfig } from '@porto/apps'
import { Chains, Mode, Porto } from 'porto'
import { createConfig, createStorage, http } from 'wagmi'

const env = Env.get()

if (typeof window !== 'undefined') {
  const host = PortoConfig.dialogHosts[env]
  Porto.create({
    // TODO: remove env check
    chains: env === 'stg' ? [Chains.odysseyDevnet] : [Chains.odysseyTestnet],
    mode: Mode.dialog({
      host,
    }),
    transports: {
      [Chains.odysseyTestnet.id]: http(),
      [Chains.odysseyDevnet.id]: http(),
    },
  })
}

export const config = createConfig({
  // TODO: remove env check
  chains: env === 'stg' ? [Chains.odysseyDevnet] : [Chains.odysseyTestnet],
  storage: createStorage({
    storage: typeof window !== 'undefined' ? localStorage : undefined,
  }),
  transports: {
    [Chains.odysseyTestnet.id]: http(),
    [Chains.odysseyDevnet.id]: http(),
  },
})

declare module 'wagmi' {
  interface Register {
    config: typeof config
  }
}
