import { loadFixture } from "@nomicfoundation/hardhat-network-helpers";
import { expect } from "chai";
import MeshTokenModule from "../ignition/modules/MeshToken";
import { ignition, ethers } from "hardhat";

describe("mesh token", () => {
  const setup = async () => {
    return ignition.deploy(MeshTokenModule);
  };

  it("initial supply is 0", async () => {
    const { meshToken } = await loadFixture(setup);
    const [deployer] = await ethers.getSigners();
    expect(await meshToken.balanceOf(deployer.address)).to.equal(0);
  });
});
