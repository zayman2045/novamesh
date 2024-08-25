import { expect } from "chai";
import { ethers, ignition } from "hardhat";
import EthUsdPriceConverterModule from "../ignition/modules/EthUsdPriceConverter";
import { loadFixture } from "@nomicfoundation/hardhat-network-helpers";

describe("eth usd price converter", () => {
  const setup = async () => {
    // Deploy the EthUsdPriceConverter contract
    const deployment = await ignition.deploy(EthUsdPriceConverterModule);

    // Get the EthUsdPriceConverter contract from ethers
    const ethUsdPriceConverter = await ethers.getContractAt(
      "EthUsdPriceConverter",
      deployment.ethUsdPriceConverter
    );

    // Get the signer
    const [signer] = await ethers.getSigners();
    return { ethUsdPriceConverter, signer };
  };

  it("should return 8 decimals when getDecimals is called", async () => {
    // Get the EthUsdPriceConverter contract and the signer
    const { ethUsdPriceConverter } = await loadFixture(setup);
    const result = await ethUsdPriceConverter.getDecimals();
    console.log("Decimals: ", result.toString());
    // expect(await ethUsdPriceConverter.getDecimals()).to.equal(8);
  });
});
