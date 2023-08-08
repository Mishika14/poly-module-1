const { ethers } = require("hardhat");

async function main() {
  const contractAddress = "0x6905428DEB23FeFB512cC6C5bD7160F0B4AB1872";
  const receiverAddress = "0x0Bd439D494015ff3B46e6f027E1fbd5a9Fc67Be3";
  const quantity = 3;
  const value = ethers.parseEther("0.03");
  const baseURI =
    "https://gateway.pinata.cloud/ipfs/QmVtkeNDibtE4Qr5xrGPzAUh7wngyRgNX9H8FF8JpKLncc/?_gl=1*we7gb4*_ga*NzA0MDI2MDE2LjE2OTA2NTU4NDU.*_ga_5RMPXG14TE*MTY5MTUwMzQ3Mi45LjEuMTY5MTUwMzQ4Ny40NS4wLjA."
  const batchNFTs = await ethers.getContractAt("friends", contractAddress);

  await batchNFTs.setBaseURI(baseURI);
  const mintTokens = await batchNFTs.mint(receiverAddress, quantity, {
    value: value,
  });

  console.log(
    `Transaction Hash: https://georli.etherscan.io/tx/${mintTokens.hash}`
  );
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
