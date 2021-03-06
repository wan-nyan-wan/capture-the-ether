import { ethers } from "hardhat";
import { Contract, Signer } from "ethers";
import { expect } from "chai";

let accounts: Signer[];
let eoa: Signer;
let contract: Contract;

before(async () => {
  accounts = await ethers.getSigners();
  eoa = accounts[0];
  const factory = await ethers.getContractFactory("CallMeChallenge");
  contract = factory.attach(`0x7e53cBe1AE1D8BCc1e4273ED31eb61bC4513C509`);
});

it("solves the challenge", async function () {
  const tx = await contract.callme();
  const txHash = tx.hash;
  expect(txHash).to.not.be.undefined;
});
