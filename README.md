# Creating our own NFT's and transfer it to different network 
This project demonstrates how to use the fxPortal contracts to transfer ERC721(batch mint) tokens from one network to different network.

## Tools used:-
1)ERC721A tokens standard

2) hardhat environment

3) goerli testnetwork
   
4) Pinata cloud for storing the nfts
   
5) env files for storing private keys and urls.

## Contract Details
1) Contract Name:-friends
2) Symbol:-UNQ
3) Link for metadata of tokens:-"https://gateway.pinata.cloud/ipfs/QmVtkeNDibtE4Qr5xrGPzAUh7wngyRgNX9H8FF8JpKLncc/?_gl=1*we7gb4*_ga*NzA0MDI2MDE2LjE2OTA2NTU4NDU.*_ga_5RMPXG14TE*MTY5MTUwMzQ3Mi45LjEuMTY5MTUwMzQ4Ny40NS4wLjA."
4) prompt:-unique things which are not found on earth and are related to heaven.

## Token contains:-
1)  Batch Mint function :- mints the  specified amount of token to the desired address.
2) Ownership:- only owner can mint the NFT.
3) Base URI :- this function is overridden for setting the uri of the NFTS.

## Steps to run the files or contract
1) clone the files into your system
2) compile the contract using the following syntax:-
   
   ```bash
     npx hardhat compile
   ```
3) deploy the contract using the following syntax:-
   ```bash
   npx hardhat run scripts/deploy.js --network <NETWORK_NAME>
   ```
4) paste the address generated into the mint token/contract address section and then run the following command to mint the token
   ```bash
   npx hardhat run scripts/mint.js --network <NETWORK_NAME>
   ```
5) now you can check the output it will be showing you a particular address .You can copy and check this on etherscan (goerli) and you will get the details of the transaction there.
6) approve and deposit the contract syntax:-
   ```bash
   npx hardhat run scripts/approveDeposit.js --network <NETWORK_NAME>
   ```
7) now deploy your getbalance file using the syntax:-
   ```bash
   npx hardhat run scripts/getBalance.js --network <NETWORK_NAME>
   ```
   This will show the amount of NFT's minted to your account.
   

