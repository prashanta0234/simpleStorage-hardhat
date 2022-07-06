const { ethers } = require("hardhat")

async function main(){
  const storage=await ethers.getContractFactory("SimpleStorage");
  console.log("Contract is deploying......");
  const Storage=await storage.deploy();
  await Storage.deployed();
  console.log(`Your contact adress is: ${Storage.address}`);
}


main()
.then(()=>process.exit(0))
.catch(err=>{
  console.error(err);
  process.exit(1);
})