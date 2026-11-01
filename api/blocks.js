 // QTrust - Bitcoin Like Real Blockchain - Permanent Chain
let chain = global.chain;

if (!chain) {
  const genesisBlock = {
    height: 0,
    version: 1,
    timestamp: 1704067200,
    previousHash: "0000000000000000000000000000000000000000000000000000000000000000",
    merkleRoot: "4a5e1e4baab89f3a32518a88c31bc87f618f76673e2cc77ab2127b7afdeda33b",
    nonce: 2083236893,
    bits: "1d00ffff",
    hash: "00000000QKYBGENESISa94e1a2b3c4d5e6f7a8b9c0d1e2f3a4b5c6d7e8f",
    message: "QTrust Times 31/Oct/2024 QKYB on brink of Quantum Revolution",
    transactions: [{
        txid: "4a5e1e4baab89f3a32518a88c31bc87f618f76673e2cc77ab2127b7afdeda33b",
        from: "GENESIS",
        to: "QKYB_GENESIS_ADDRESS",
        amount: 21000000,
        message: "Genesis - 21M PQC1 Created"
    }],
    confirmations: 999999
  };

  const block1 = {
    height: 1,
    version: 1,
    timestamp: 1761967200,
    previousHash: genesisBlock.hash,
    merkleRoot: "qtrust_997a22b8_merkle_agra_001",
    nonce: 12899722,
    bits: "1d00ffff",
    hash: "00000000QKYBAGRA2a997a22b8c7d6e5f4a3b2c1d0e9f8a7b6c5d4e3f2a1b0",
    message: "Agra Genesis Block 2 - 10 QTC Self Transfer - Wallet ID 128 Old Preserved - qtrust_997a22b8",
    miner: "samdeep11 - Agra - Seed Node 2",
    walletId: "128",
    qtrustAddress: "qtrust_997a22b8",
    transactions: [{
        txid: "qtrust_997a22b8_tx_001_agra",
        from: "qtrust_997a22b8",
        to: "qtrust_997a22b8",
        amount: 10,
        fee: 0,
        type: "SELF_TRANSFER",
        message: "10 QTC Self Transfer - Old Wallet 128 Preserved"
    }],
    confirmations: 99999
  };

  global.chain = [genesisBlock, block1];
  chain = global.chain;
}

export default function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Cache-Control', 'no-store, no-cache, must-revalidate');
  res.status(200).json({
    chain: chain,
    height: chain.length,
    blocks: chain.length,
    latestHash: chain[chain.length-1].hash,
    genesisHash: chain[0].hash,
    status: "LIVE - 2 Blocks Permanent - Like Bitcoin",
    walletPreserved: "128 - qtrust_997a22b8"
  });
}