import { expect } from "chai";
import { Counter, Counter__factory } from "../typechain-types";
import { ethers } from "hardhat";

describe("hardhat-counter", () => {
  let counter: Counter;
  let counterFactory: Counter__factory;

  beforeEach(async () => {
    counterFactory = await ethers.getContractFactory("Counter");
    counter = await counterFactory.deploy();
  });

  it("Is initialized", async () => {
    const currentCount = Number(await counter.count());
    const expectedCount: number = 0;
    expect(currentCount).to.equal(expectedCount);
  });
});
