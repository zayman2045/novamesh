import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

const decimals = 8;
const ethUsdPrice = 2000e8;

// Build a hardhat ignition module to deploy the EthUsdPriceConverter contract
const EthUsdPriceConverterModule = buildModule(
  "EthUsdPriceConverterModule",
  (m) => {
    const MockV3Aggregator = m.contract("MockV3Aggregator", [decimals, ethUsdPrice]);
    const ethUsdPriceConverter = m.contract("EthUsdPriceConverter", [
      MockV3Aggregator,
    ]);
    return { ethUsdPriceConverter };
  }
);

export default EthUsdPriceConverterModule;
