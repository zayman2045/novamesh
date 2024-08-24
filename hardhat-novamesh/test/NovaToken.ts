import { loadFixture } from "@nomicfoundation/hardhat-network-helpers";
import { ignition, ethers } from "hardhat";
import NovaTokenModule from "../ignition/modules/NovaToken";
import { expect } from "chai";

describe("nova token", () => {
  const setup = async () => {
    // Deploy the NovaToken contract
    const deployment = await ignition.deploy(NovaTokenModule);

    // Get the NovaToken contract from ethers
    const novaToken = await ethers.getContractAt(
      "NovaToken",
      deployment.novaToken
    );

    // Get the signer
    const [signer] = await ethers.getSigners()
    return { novaToken, signer };
  };

  it("should mint Nova tokens in exchange for ETH", async () => {
    // Get the NovaToken contract and the signer
    const { novaToken, signer } = await loadFixture(setup);

    //Check initial balance
    expect(await novaToken.balanceOf(signer)).to.equal(0);

    //Mint tokens and check balance after purchase
    await novaToken.mintTokens({value: 1});
    expect(await novaToken.balanceOf(signer)).to.equal(1);
  });
});
