require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: {
    version: "0.8.17",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
  networks: {
    hardhat: {},
    goerli: {
      url: process.env.GOERLIs,
      accounts: [process.env.PRIVATE_KEY],
    },
    mumbai: {
      url: process.env.P_RPC_URL,
      accounts: [process.env.PRIVATE_KEY],
    },
  },
};
