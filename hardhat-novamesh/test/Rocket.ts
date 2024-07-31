import { loadFixture } from "@nomicfoundation/hardhat-network-helpers";
import { ignition, ethers } from "hardhat";
import rocketModule from "../ignition/modules/Rocket";
import { expect } from "chai";

describe("rocket tests", () => {
  const setup = async () => {
    const deployment = await ignition.deploy(rocketModule);
    const rocket = await ethers.getContractAt(
      "Rocket",
      await deployment.contract.getAddress()
    );
    return { rocket }
  };

  it("should change the status to 'lift-off' upon deployment", async () => {
    const { rocket } = await loadFixture(setup);
    expect(await rocket.status()).to.equal("lift-off");
  });
});
