import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

// Build a hardhat ignition module to deploy to EthUsdPriceConverter contract
const EthUsdPriceConverterModule = buildModule(
  "EthUsdPriceConverterModule",
  (module) => {
    const ethUsdPriceConverter = module.contract("EthUsdPriceConverter", []);
    return { ethUsdPriceConverter };
  }
);

export default EthUsdPriceConverterModule;
