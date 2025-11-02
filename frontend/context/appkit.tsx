// context/appkit.tsx
"use client";
import { createAppKit } from "@reown/appkit/react";
import { EthersAdapter } from "@reown/appkit-adapter-ethers";
import { sepolia, liskSepolia, arbitrumSepolia, bscTestnet, lisk, arbitrum, base, bsc, mainnet, baseSepolia, polygon, polygonAmoy } from "@reown/appkit/networks";
import type { AppKitNetwork } from "@reown/appkit/networks";
import { ReactNode } from "react";

// Environment detection
const isMainnet = process.env.NEXT_PUBLIC_ENVIRONMENT === 'mainnet'

// Dynamic network configuration based on environment
const mainnetNetworks: [AppKitNetwork, ...AppKitNetwork[]] = [mainnet, lisk, arbitrum, base, bsc, polygon]
const testnetNetworks: [AppKitNetwork, ...AppKitNetwork[]] = [sepolia, liskSepolia, arbitrumSepolia, bscTestnet, baseSepolia, polygonAmoy]

// Use appropriate networks based on environment
const supportedNetworks = isMainnet ? mainnetNetworks : testnetNetworks

// 1. Get projectId at https://cloud.reown.com
const projectId = "a9fbadc760baa309220363ec867b732e";

// 2. Create a metadata object
const metadata = {
  name: "RemitAbeg",
  description: `RemitAbeg - Borderless Remittance for Nigerians - ${isMainnet ? 'Mainnet' : 'Testnet'} Mode`,
  url: "https://www.remitabeg.com",
  icons: ["https://www.remitabeg.com/logo.png"],
};

// Log environment info for debugging
console.log(`🌍 AppKit Environment: ${isMainnet ? 'Mainnet' : 'Testnet'}`);
console.log(`📡 Supported Networks:`, supportedNetworks.map(n => n.name));

// 3. Create the AppKit instance
createAppKit({
  adapters: [new EthersAdapter()],
  metadata,
  networks: supportedNetworks,
  projectId,
  features: {
    analytics: true,
    email: true,
    socials: ["google", "x", "github", "discord", "apple", "facebook", "farcaster"],
    emailShowWallets: false,
  },
  allWallets: 'SHOW',
  ...(isMainnet ? {
    enableExplorer: true,
  } : {
    enableExplorer: true,
    enableOnramp: false,
  })
});

interface AppKitProps {
  children: ReactNode;
}

export function AppKit({ children }: AppKitProps) {
  return <>{children}</>;
}

