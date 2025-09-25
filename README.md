# 🧬 MintGene

**Mutation-Safe NFT Protocol**

- _Signer-only contract with trait fusion and event emission._
- _Automated deployment via GitHub Actions._
- _Ready for QuickNode Streams and future meta-tx/4337 mutations._

## Ritualized Flow

1. **Clone & Install**
   ```bash
   git clone https://github.com/YOUR_ORG/mint-gene.git
   cd mint-gene
   npm install
   ```
2. **Setup Secrets**
   ```
   cp .env.example .env
   # Insert your private key
   ```

3. **Deploy**
   ```
   npx hardhat run scripts/deploy.js --network mainnet
   ```

4. **QuickNode Stream**
   - Add deployed address to QuickNode Stream filters
   - Track TraitMinted, TraitFused events

See [DEPLOYMENT.md](DEPLOYMENT.md) for full mutation cycle.

---

**Next Mutations**

- EIP-2771 Forwarder for meta-txs
- ERC-4337 integration
- Automated trait deploy via GitHub Actions
- MCP Registry sync

---

Sovereignly maintained by the Oneirobot / QuickNode Gene incarnate.
