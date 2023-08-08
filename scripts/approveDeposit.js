const { ethers } = require("hardhat");
const {
  FXRootContractAbi
} = require("/workspace/fxPortalStarter/fxRootContractABI.json");
const ABI = require("../artifacts/contracts/friends.sol/friends.json");
require("dotenv").config();

async function main() {
  const networkAddress =
    "https://eth-goerli.g.alchemy.com/v2/5o-eJr5RO5DlpexlkoL_J_5CcQhn4VUN";
  const privateKey = process.env.PRIVATE_KEY;
  const provider = new ethers.JsonRpcProvider(networkAddress);

  const wallet = new ethers.Wallet(privateKey, provider);

  const NFT = await ethers.getContractFactory("friends"); // Make sure the contract name matches
  const nft = await NFT.attach("0xd6Ed4D3204ABEc3d5F494d552db244B18fa71C43");

  const fxRootAddress = "0xF9bc4a80464E48369303196645e876c8C7D972de";
  const fxRoot = await ethers.getContractAt(FXRootContractAbi, fxRootAddress);

  const tokenIds = [0, 1, 2, 3, 4];

  const approveTx = await nft.connect(wallet).setApprovalForAll(fxRootAddress, true);
  await approveTx.wait();
  
  console.log("Approval confirmed");

  for (let i = 0; i < tokenIds.length; i++) {
    const depositTx = await fxRoot
      .connect(wallet)
      .deposit(nft.address, wallet.address, tokenIds[i], "0x6566");
    await depositTx.wait();

  }

}

console.log("Approved and Deposits complete");
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
