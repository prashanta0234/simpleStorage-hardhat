const { ethers } = require("hardhat")

async function main(){
  const storage=await ethers.getContractFactory("SimpleStorage");
  console.log("Contract is deploying......");
  const Storage=await storage.deploy();
  await Storage.deployed();
  console.log(`Your contact adress is: ${Storage.address}`);
  // interecr with the conract
  const value=await Storage.retrieve()
  console.log(`number is ${value}`);
  await Storage.store(5);
 const vv=await Storage.retrieve()
  console.log(vv.toString())

  // console.log(a)
}


main()
.then(()=>process.exit(0))
.catch(err=>{
  console.error(err);
  process.exit(1);
})