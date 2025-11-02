# 🟢 RemitAbeg

**RemitAbeg** is a decentralized remittance platform that makes it easy for Nigerians and the diaspora to send and receive money — fast, cheap, and borderless.  
No middlemen. No delays. Just send am, abeg. 💸

---

## 🚀 What It Does

RemitAbeg leverages blockchain technology to:

- Enable **cross-border transfers** with stablecoins or digital assets  
- Allow recipients to **receive in local currency (NGN)** through on/off-ramp partners  
- Provide **transparent fees** and **instant confirmations**  
- Support **mobile-friendly wallets** for easy access on the go  

---

## 💡 Why RemitAbeg?

Sending money home shouldn’t be hard. Traditional remittance services are slow and expensive — RemitAbeg cuts out the middleman, giving you:

- 🔹 **Speed** — transactions settle in minutes  
- 🔹 **Low fees** — powered by DeFi rails  
- 🔹 **Trustless transfers** — no bank drama  
- 🔹 **Community-first** — built for the Naija and African diaspora  

---

## 🧱 Tech Stack

- **Smart Contracts:** Solidity / EVM  
- **Frontend:** Next.js + AppKit + Wagmi + Viem  
- **Blockchain:** Base / Polygon / Lisk  
- **Off-Ramp Integration:** Onramp.money / Bitnob API  
- **Storage:** IPFS / Pinata  

---

## 📦 Project Structure

```
RemitAbeg/
├── frontend/                    # Next.js frontend app
│   ├── app/                     # Next.js app router
│   ├── components/              # React components
│   ├── config/                  # AppKit & Wagmi config
│   └── context/                 # React context providers
└── README.md                    # This file
```

## 🚀 Getting Started

```bash
# Install dependencies
cd frontend
npm install

# Create .env.local file
echo "NEXT_PUBLIC_PROJECT_ID=a9fbadc760baa309220363ec867b732e" > .env.local
echo "NEXT_PUBLIC_ENVIRONMENT=testnet" >> .env.local

# Run development server
npm run dev

# Build for production
npm run build
```

## ✅ Completed Features

### Landing Page
- ✅ Beautiful Nigerian-inspired design (Green & White theme)
- ✅ Hero section with animated gradients
- ✅ About section explaining the platform
- ✅ 4 feature cards (Speed ⚡, Low Fees 💸, Transparency 🔍, Community 🤝)
- ✅ "How It Works" section with 3 steps
- ✅ CTA section when wallet disconnected
- ✅ Footer with social links
- ✅ Fully responsive (mobile-first)

### WalletConnect Integration
- ✅ AppKit integration (same as billoq-frontend)
- ✅ Multi-wallet support (MetaMask, Trust Wallet, Coinbase, etc.)
- ✅ Wallet connection modal
- ✅ Real-time wallet status display (address, network, balance)
- ✅ Disconnect functionality
- ✅ Toast notifications for connection events
- ✅ Auto-reconnect on page reload
- ✅ Support for testnet/mainnet networks (Sepolia, Base, Polygon, etc.)

## 🧭 Roadmap

- 🔜 Smart contract development  
- 🔜 NGN off-ramp integration  
- 🔜 Peer-to-peer swap market  
- 🔜 USDT / USDC support  
- 🔜 Launch RemitAbeg mobile app  

---

## 🌍 Vision

To empower Africans everywhere to move value freely, with dignity — one *“abeg, send am”* at a time.  

---

## 🤝 Contributing

We’re open-source and community-driven!  
Fork, star, and send your PRs — or join the RemitAbeg movement.  

---

## 🧾 License

MIT © 2025 RemitAbeg
