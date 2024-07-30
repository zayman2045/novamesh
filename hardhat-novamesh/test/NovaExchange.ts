import { ignition, ethers } from "hardhat";
import { loadFixture } from "@nomicfoundation/hardhat-network-helpers";
import NovaExchangeModule from "../ignition/modules/NovaExchange";
import { expect } from "chai";

describe("nova exchange", () => {
  const setup = async () => {
    const deployment = await ignition.deploy(NovaExchangeModule);
    const novaExchange = await ethers.getContractAt(
      "NovaExchange",
      await deployment.novaExchange.getAddress()
    );

    const novaToken = await ethers.getContractAt(
      "NovaToken",
      await novaExchange.novaToken()
    );
    return { novaExchange, novaToken };
  };

  it("should deploy the NovaToken contract", async () => {
    const { novaExchange, novaToken } = await loadFixture(setup);
    const novaTokenAddress = await novaExchange.novaToken();
    expect(novaTokenAddress).to.be.properAddress;
    expect(novaTokenAddress).to.equal(await novaToken.getAddress());
  });

  it("should mint 1000 NOVA to the NovaExchange contract upon deployment", async () => {
    const {novaExchange, novaToken} = await loadFixture(setup);
    expect(await novaToken.balanceOf(novaExchange)).to.equal(1000);
  })

  it("should allow the NovaExchange to mint tokens to a user", async () => {
    const { novaExchange, novaToken } = await loadFixture(setup);
    const [deployer] = await ethers.getSigners();
    await novaExchange.buyTokens({ value: ethers.parseUnits("1", "wei") });
    expect(await novaToken.balanceOf(deployer)).to.equal(100);
  });

  it("should not allow mint function on NovaToken to be called directly", async () => {
    const { novaToken } = await loadFixture(setup);
    const [deployer] = await ethers.getSigners();

    await expect(novaToken.connect(deployer).mint(deployer.address, 1)).to.be
      .reverted;
  });
});
