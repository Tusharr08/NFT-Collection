const {ethers}= require("hardhat");
require("dotenv").config({path:"env"});
const {WHITELIST_CONTRACT_ADDRESS, METADATA_URL}= require("../constants");

async function main(){
  const whitelistContract = WHITELIST_CONTRACT_ADDRESS;
  const metadataURL= METADATA_URL;

  const cryptoDevsContract = await ethers.getContractFactory("CryptoDevs");

  const deployedCryptoDevsContract = await cryptoDevsContract.deploy(
    metadataURL,
    whitelistContract
  );

  // Wait for it to finish deploying
  await deployedCryptoDevsContract.deployed();

  // print the address of the deployed contract
  console.log(
    "Crypto Devs Contract deployed at Address:",
    deployedCryptoDevsContract.address
  );
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });