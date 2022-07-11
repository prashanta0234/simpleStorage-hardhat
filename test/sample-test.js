const { assert } = require("chai");
const { ethers } = require("hardhat");



describe("SimpleStorage", async function(){
  let simpleStorageFactory;
  let simpleStorage;
  // simpleStorageFactory=await ethers.getContractFactory("SimpleStorage");
  // simpleStorage=await simpleStorageFactory.deploy();
  beforeEach(async function (){
  simpleStorageFactory=await ethers.getContractFactory("SimpleStorage");
  simpleStorage=await simpleStorageFactory.deploy();

  })

  it("Return should number 0", async function(){
    const value=await simpleStorage.retrieve();
    const zero=0
    assert.equal(value.toString(),zero);
  })
  it("value is seted 5",async function (){
    const five="5"
    const setV=await simpleStorage.store(five)
    await setV.wait(1)
   
    const value=await simpleStorage.retrieve();
    // console.log()
   const v=value.toString();
    assert.equal(v,five)
  })
})
