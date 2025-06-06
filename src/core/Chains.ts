import type { Chain as Chain_viem, ChainContract } from 'viem'
import * as chains from 'viem/chains'

export type Chain = Chain_viem & {
  contracts: Chain_viem['contracts'] & {
    accountRegistry?: ChainContract | undefined
    delegation?: ChainContract | undefined
    entryPoint?: ChainContract | undefined
  }
}

export function define<const chain extends Chain>(chain: chain): chain {
  return chain
}

export const anvil = /*#__PURE__*/ define({
  ...chains.anvil,
  contracts: {
    ...chains.anvil.contracts,
    accountRegistry: {
      address: '0x700b6a60ce7eaaea56f065753d8dcb9653dbad35',
    },
    delegation: {
      address: '0x8ce361602b935680e8dec218b820ff5056beb7af',
    },
    entryPoint: {
      address: '0xa15bb66138824a1c7167f5e85b957d04dd34e468',
    },
  },
})

export const baseSepolia = /*#__PURE__*/ define({
  ...chains.baseSepolia,
  contracts: {
    ...chains.baseSepolia.contracts,
    accountRegistry: {
      address: '0xf742e7cfc857611be27859bf910bc1ea59f52b24',
    },
    delegation: {
      address: '0x79d7f2ab558ac7a4601f65d02f0fc695a644698a',
    },
    entryPoint: {
      address: '0xf2595965b86e647d9b666087d785d54094b0a0c1',
    },
  },
  rpcUrls: {
    default: {
      http: ['https://base-sepolia.ithaca.xyz'],
    },
  },
})

export const odysseyDevnet = /*#__PURE__*/ define({
  blockExplorers: {
    default: {
      apiUrl: '',
      name: '',
      url: '',
    },
  },
  contracts: {
    accountRegistry: {
      address: '0x5fd869cae748223bf81c9e00de60b7713f6a218f',
    },
    delegation: {
      address: '0x616dfc0fabbf4b377a7ef5d39f680ee0f6376f8d',
    },
    entryPoint: {
      address: '0xff975ecd6f690fdc091553606ecacdb5c503a54f',
    },
  },
  id: 28_403,
  name: 'Odyssey Devnet',
  nativeCurrency: { decimals: 18, name: 'Ether', symbol: 'ETH' },
  rpcUrls: {
    default: { http: ['https://odyssey-devnet.ithaca.xyz'] },
  },
  testnet: true,
})

export const odysseyTestnet = /*#__PURE__*/ define({
  ...chains.odysseyTestnet,
  contracts: {
    ...chains.odysseyTestnet.contracts,
    accountRegistry: {
      address: '0x5fd869cae748223bf81c9e00de60b7713f6a218f',
    },
    delegation: {
      address: '0x6faf9eb2742350c772a5c811e1b0e2f330650a25',
    },
    entryPoint: {
      address: '0x7cf6287013ef3d4558a98fcc2bc286e53341513f',
    },
  },
})
