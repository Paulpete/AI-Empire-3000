const { ethers } = require("hardhat");
require("dotenv").config();

async function main() {
  if (!process.env.SIGNERPRIVATEKEY) {
    throw new Error("SIGNERPRIVATEKEY not set in .env!");
  }
  const signer = new ethers.Wallet(process.env.SIGNERPRIVATEKEY, ethers.provider);
  const MintGene = await ethers.getContractFactory("MintGene", signer);
  const contract = await MintGene.deploy();
  await contract.deployed();
  console.log("MintGene deployed to:", contract.address);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
