// config/index.tsx

import { cookieStorage, createStorage } from '@wagmi/core'
import { WagmiAdapter } from '@reown/appkit-adapter-wagmi'
import { arbitrum, lisk, liskSepolia, arbitrumSepolia, bsc, bscTestnet, mainnet, sepolia, base, baseSepolia, polygon, polygonAmoy } from '@reown/appkit/networks'

// Get projectId from environment variable
export const projectId = process.env.NEXT_PUBLIC_PROJECT_ID || 'a9fbadc760baa309220363ec867b732e'

if (!projectId) {
  throw new Error('Project ID is not defined')
}

export const networks = [mainnet, sepolia, arbitrum, lisk, liskSepolia, arbitrumSepolia, bsc, bscTestnet, base, baseSepolia, polygon, polygonAmoy]

//Set up the Wagmi Adapter (Config)
export const wagmiAdapter = new WagmiAdapter({
  storage: createStorage({
    storage: cookieStorage
  }),
  ssr: true,
  projectId,
  networks
})

export const wagmiConfig = wagmiAdapter.wagmiConfig

