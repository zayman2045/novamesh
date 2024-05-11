import { expect } from "chai";
import { loadFixture } from "@nomicfoundation/hardhat-network-helpers";
import { ethers } from "hardhat";

describe("counter", () => {
  const setup = async () => {
    const counter = await ethers.deployContract("Counter");
    return { counter };
  };

  it("counter initialized to 0", async () => {
    const { counter } = await loadFixture(setup);
    expect(await counter.s_counter()).to.equal(0);
  });

  it("counter incremented", async () => {
    const { counter } = await loadFixture(setup);
    await counter.increment();
    expect(await counter.s_counter()).to.equal(1);
  });
});

