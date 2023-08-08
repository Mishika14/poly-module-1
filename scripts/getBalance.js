
const hre = require("hardhat");
const tokenContractJSON = require("../artifacts/contracts/friends.sol/friends.json");

const tokenAddress = "0x6905428DEB23FeFB512cC6C5bD7160F0B4AB1872"; // place your erc721A contract address here
const tokenABI = tokenContractJSON.abi;
const walletAddress = "0x0Bd439D494015ff3B46e6f027E1fbd5a9Fc67Be3"; // place your public address for your wallet here

async function main() { 

    const token = await hre.ethers.getContractAt(tokenABI, tokenAddress);

    console.log("You now have: " + await token.balanceOf(walletAddress) + " tokens");
  }
  
  
  main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
  });
