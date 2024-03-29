const hre = require("hardhat");

async function main() {

  const factoryContract = await ethers.getContractFactory("NarfexFiatFactory");

  const factory = await factoryContract.deploy();
  await factory.deployed();

  console.log("NarfexFiatFactory deployed to:", factory.address);
  
  const fiatContract = await ethers.getContractFactory("NarfexFiat");

  const fiat = await fiatContract.deploy(
    "Russian Ruble Initial",
    "NRUB",
    factory.address
  );
  await fiat.deployed();
  
  console.log("NarfexFiat deployed to:", fiat.address);
}

main() 
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });