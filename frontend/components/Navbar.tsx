'use client'

import WalletConnect from './WalletConnect'
import { useAccount } from 'wagmi'

export default function Navbar() {
  const { isConnected } = useAccount()

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm border-b border-green-100 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <h1 className="text-2xl font-bold bg-gradient-to-r from-green-600 to-green-500 bg-clip-text text-transparent">
              🟢 RemitAbeg
            </h1>
          </div>
          
          <div className="flex items-center gap-4">
            {isConnected && (
              <span className="text-sm text-gray-600 hidden sm:block">
                Send am, abeg
              </span>
            )}
            <WalletConnect />
          </div>
        </div>
      </div>
    </nav>
  )
}

