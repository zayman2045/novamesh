import { loadFixture } from "@nomicfoundation/hardhat-network-helpers";
import { ignition, ethers } from "hardhat";
import NovaTokenModule from "../ignition/modules/NovaToken";
import { expect } from "chai";

describe("nova token", () => {
  const setup = async () => {
    const deployment = await ignition.deploy(NovaTokenModule);
    const novaToken = await ethers.getContractAt(
      "NovaToken",
      deployment.novaToken
    );
    const [signer] = await ethers.getSigners()
    return { novaToken, signer };
  };

  it("should mint NOVA tokens in exchange for ETH", async () => {
    const { novaToken, signer } = await loadFixture(setup);

    //Check initial balance
    expect(await novaToken.balanceOf(signer)).to.equal(0);

    //Buy tokens and check balance after purchase
    await novaToken.buyTokens({value: 1});
    expect(await novaToken.balanceOf(signer)).to.equal(1);
  });
});
