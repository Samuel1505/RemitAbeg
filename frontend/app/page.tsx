'use client'

import { useEffect } from 'react'
import Navbar from "@/components/Navbar";
import { useAccount, useBalance } from 'wagmi'
import { useAppKitAccount, useAppKit } from '@reown/appkit/react'
import { toast } from 'react-toastify'

export default function Home() {
  // AppKit hooks
  const { address: appkitAddress, isConnected: appkitIsConnected } = useAppKitAccount()
  const { open } = useAppKit()
  
  // Wagmi hooks
  const { address: wagmiAddress, isConnected: wagmiIsConnected, chain } = useAccount()
  
  const address = wagmiAddress || appkitAddress
  const isConnected = appkitIsConnected || wagmiIsConnected
  
  const { data: balance } = useBalance({
    address: wagmiAddress
  })

  const handleConnect = async () => {
    try {
      await open()
    } catch (error) {
      console.error("Connection error:", error)
    }
  }

  useEffect(() => {
    if (isConnected) {
      toast.success(`Connected to ${chain?.name || 'Wallet'}!`, {
        autoClose: 3000,
      })
    }
  }, [isConnected])

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-green-100 to-white font-sans">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        {/* Animated gradient background */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-br from-green-500/20 to-green-600/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-tr from-yellow-400/20 to-green-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="max-w-6xl mx-auto relative">
          <div className="text-center mb-16">
            {/* Main Heading */}
            <h1 className="text-6xl sm:text-7xl font-extrabold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-green-600 via-green-500 to-green-600 bg-clip-text text-transparent">
                Send am, abeg
              </span>
              <br />
              <span className="text-gray-900">
                Borderless Remittance
              </span>
              <br />
              <span className="text-4xl sm:text-5xl text-green-600">
                for Nigerians 🇳🇬
              </span>
            </h1>
            
            <p className="text-2xl text-gray-700 mb-4 max-w-2xl mx-auto">
              Fast, cheap, borderless money transfers
            </p>
            <p className="text-lg text-gray-600 max-w-xl mx-auto">
              No middlemen. No delays. Just send am, abeg.
              <br />
              Powered by Web3. Built for Naija. 💸
            </p>
          </div>

          {/* Call to Action */}
          {!isConnected && (
            <div className="text-center mb-20">
              <button
                onClick={handleConnect}
                className="px-12 py-5 bg-gradient-to-r from-green-600 to-green-500 hover:from-green-700 hover:to-green-600 text-white rounded-xl transition-all duration-200 font-bold text-xl shadow-2xl shadow-green-500/50 hover:shadow-green-600/50 hover:scale-105"
              >
                Connect Wallet to Start
              </button>
              <p className="text-sm text-gray-600 mt-4">
                Connect MetaMask, Trust Wallet, or 100+ other wallets
              </p>
            </div>
          )}

          {/* Wallet Status Dashboard */}
          {isConnected && (
            <div className="bg-white/60 backdrop-blur-sm border border-green-200 rounded-2xl p-8 mb-16 shadow-xl">
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-3xl font-bold text-gray-900">
                  Wallet Connected
                </h2>
                <div className="flex items-center gap-2 px-4 py-2 bg-green-500/20 border border-green-500/50 rounded-full">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-sm font-medium text-green-700">Ready to Send</span>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white/80 backdrop-blur-sm border border-green-200 rounded-xl p-6">
                  <p className="text-sm text-gray-600 mb-2">Wallet Address</p>
                  <p className="text-base font-mono text-gray-900 break-all">
                    {address?.slice(0, 8)}...{address?.slice(-6)}
                  </p>
                </div>

                <div className="bg-white/80 backdrop-blur-sm border border-green-200 rounded-xl p-6">
                  <p className="text-sm text-gray-600 mb-2">Network</p>
                  <p className="text-xl font-semibold text-gray-900">
                    {chain?.name || 'Unknown'}
                  </p>
                </div>

                {balance && (
                  <div className="bg-white/80 backdrop-blur-sm border border-green-200 rounded-xl p-6">
                    <p className="text-sm text-gray-600 mb-2">Balance</p>
                    <p className="text-xl font-bold text-gray-900">
                      {parseFloat(balance.formatted).toFixed(4)}
                    </p>
                    <p className="text-sm text-gray-500">{balance.symbol}</p>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-green-50 to-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Why RemitAbeg?
          </h2>
          <p className="text-xl text-gray-700 leading-relaxed">
            Sending money home shouldn't be hard. Traditional remittance services are slow and expensive. 
            <br /><br />
            RemitAbeg cuts out the middleman, giving you <strong className="text-green-600">speed</strong>, 
            low fees powered by DeFi rails, trustless transfers, and a community-first approach — built for the 
            <strong className="text-green-600"> Naija and African diaspora</strong>.
          </p>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Everything You Need
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Fast, cheap, and transparent remittances
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Feature 1 */}
            <div className="bg-white border border-green-200 hover:border-green-400 rounded-2xl p-8 transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center mb-6 text-4xl">
                ⚡
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Speed
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Transactions settle in minutes, not days. No more waiting around.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-white border border-green-200 hover:border-green-400 rounded-2xl p-8 transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-xl flex items-center justify-center mb-6 text-4xl">
                💸
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Low Fees
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Powered by DeFi rails. Keep more of your money where it belongs.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-white border border-green-200 hover:border-green-400 rounded-2xl p-8 transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mb-6 text-4xl">
                🔍
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Transparency
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Real-time confirmations. See exactly where your money is going.
              </p>
            </div>

            {/* Feature 4 */}
            <div className="bg-white border border-green-200 hover:border-green-400 rounded-2xl p-8 transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-br from-green-600 to-green-700 rounded-xl flex items-center justify-center mb-6 text-4xl">
                🤝
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Community First
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Built for Naija and the African diaspora. By us, for us.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-green-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              How It Works
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Three simple steps to send money home
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-6 text-4xl font-bold text-white shadow-lg shadow-green-500/50">
                1
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Connect Your Wallet
              </h3>
              <p className="text-gray-600">
                Link your Web3 wallet (MetaMask, Trust Wallet, etc.)
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-full flex items-center justify-center mx-auto mb-6 text-4xl font-bold text-white shadow-lg shadow-yellow-500/50">
                2
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Send Instantly
              </h3>
              <p className="text-gray-600">
                Transfer stablecoins or digital assets across borders
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6 text-4xl font-bold text-white shadow-lg shadow-blue-500/50">
                3
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Receive in NGN
              </h3>
              <p className="text-gray-600">
                Recipients get money in local currency via off-ramp partners
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      {!isConnected && (
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-3xl p-12 shadow-2xl">
              <h2 className="text-4xl font-bold text-white mb-4">
                Ready to Send?
              </h2>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Connect your wallet now and experience borderless remittances
              </p>
              <button
                onClick={handleConnect}
                className="px-12 py-5 bg-white hover:bg-green-50 text-green-600 rounded-xl transition-all duration-200 font-bold text-xl shadow-xl hover:scale-105"
              >
                Get Started Now
              </button>
            </div>
          </div>
        </section>
      )}

      {/* Footer */}
      <footer className="py-12 px-4 sm:px-6 lg:px-8 border-t border-green-200 bg-green-50">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <h3 className="text-2xl font-bold text-green-600 mb-2">
                🟢 RemitAbeg
              </h3>
              <p className="text-gray-600 text-sm">
                Send am, abeg — borderless remittances powered by Web3
              </p>
            </div>
            <div className="flex gap-6 text-gray-600">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-green-600 transition-colors">
                GitHub
              </a>
              <a href="https://docs.remitabeg.com" target="_blank" rel="noopener noreferrer" className="hover:text-green-600 transition-colors">
                Docs
              </a>
              <a href="https://twitter.com/remitabeg" target="_blank" rel="noopener noreferrer" className="hover:text-green-600 transition-colors">
                Twitter
              </a>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-green-200 text-center">
            <p className="text-gray-600 text-sm">
              MIT © 2025 RemitAbeg - Empowering Africans everywhere
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
