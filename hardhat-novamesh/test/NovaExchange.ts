import { ignition, ethers } from "hardhat";
import NovaExchangeModule from "../ignition/modules/NovaExchange";
import { loadFixture } from "@nomicfoundation/hardhat-network-helpers";
import { expect } from "chai";

describe("nova exchange", () => {
  const setup = async () => {
    return ignition.deploy(NovaExchangeModule);
  };

  it("should deploy NovaToken contract", async () => {
    const { novaExchange } = await loadFixture(setup);
    const novaToken = await novaExchange.novaToken();
    expect(novaToken).to.be.properAddress;
  });
});
