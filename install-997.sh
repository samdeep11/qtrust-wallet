#!/bin/bash
# QTrust Chain 997 - Auto Installer - FINAL
set -e
echo "🛡️ QTrust Chain 997 - LIVE Installer"
echo "-----------------------------------"
echo "Chain ID: 997 | Nodes: 2 ACTIVE | PoQ Quantum Safe"
if ! command -v node &> /dev/null; then
  curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
  sudo apt-get install -y nodejs git
fi
if ! command -v pm2 &> /dev/null; then
  sudo npm install -g pm2
fi
read -p "Enter Your Node Moniker (e.g. MyValidator): " MONIKER
if [ -z "$MONIKER" ]; then MONIKER="Validator-$(date +%s)"; fi
echo "Cloning QTrust..."
git clone https://github.com/samdeep11/qtrust-wallet.git || cd qtrust-wallet && git pull && cd ..
cd qtrust-wallet
npm install
echo "Joining Chain 997 as $MONIKER..."
pm2 delete qtrust-997 || true
pm2 start npm --name "qtrust-997" -- run node:997 -- --moniker="$MONIKER" --chain-id=997 --keep-alive
pm2 save
pm2 startup || true
echo ""
echo "✅ QTrust Node LIVE! - $MONIKER"
echo "Check: pm2 list | pm2 logs qtrust-997"
echo "Explorer: https://samdeep11.github.io/qtrust-wallet/explorer.html"
echo "Join Page: https://samdeep11.github.io/qtrust-wallet/join.html"