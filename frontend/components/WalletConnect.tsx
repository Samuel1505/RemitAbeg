'use client'

import { useAccount, useDisconnect as useWagmiDisconnect } from 'wagmi'
import { useAppKitAccount, useAppKit, useDisconnect, useWalletInfo } from '@reown/appkit/react'
import { toast } from 'react-toastify'

export default function WalletConnect() {
  // AppKit hooks
  const { address: appkitAddress, isConnected: appkitIsConnected } = useAppKitAccount()
  const { open } = useAppKit()
  const { walletInfo } = useWalletInfo()
  const { disconnect: appkitDisconnect } = useDisconnect()
  
  // Wagmi hooks
  const { address: wagmiAddress, isConnected: wagmiIsConnected, connector } = useAccount()
  const { disconnect: wagmiDisconnect } = useWagmiDisconnect()
  
  const address = wagmiAddress || appkitAddress
  const isConnected = appkitIsConnected || wagmiIsConnected

  const handleConnect = async () => {
    try {
      await open()
    } catch (error) {
      console.error("Connection error:", error)
    }
  }

  const handleDisconnect = () => {
    try {
      if (appkitIsConnected) {
        appkitDisconnect()
      }
      if (wagmiIsConnected) {
        wagmiDisconnect()
      }
      toast.success('Wallet disconnected successfully')
    } catch (error) {
      console.error("Disconnect error:", error)
    }
  }

  const formatAddress = (addr: string | undefined) => {
    if (!addr) return ''
    return `${addr.slice(0, 6)}...${addr.slice(-4)}`
  }

  if (!isConnected) {
    return (
      <button
        onClick={handleConnect}
        className="px-6 py-3 bg-gradient-to-r from-green-600 to-green-500 hover:from-green-700 hover:to-green-600 text-white rounded-lg transition-all duration-200 font-semibold shadow-lg shadow-green-500/50"
      >
        Connect Wallet
      </button>
    )
  }

  return (
    <div className="flex items-center gap-3">
      <div className="flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg">
        <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
        <span className="text-sm font-mono text-white">
          {formatAddress(address)}
        </span>
      </div>
      <button
        onClick={handleDisconnect}
        className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg transition-colors text-sm font-medium"
      >
        Disconnect
      </button>
    </div>
  )
}

