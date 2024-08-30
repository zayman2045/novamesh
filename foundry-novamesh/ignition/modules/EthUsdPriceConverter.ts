import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

// Build a hardhat ignition module to deploy the EthUsdPriceConverter contract
const EthUsdPriceConverterModule = buildModule(
  "EthUsdPriceConverterModule",
  (m) => {
    const ethUsdPriceConverter = m.contract("EthUsdPriceConverter");
    return { ethUsdPriceConverter };
  }
);

export default EthUsdPriceConverterModule;
