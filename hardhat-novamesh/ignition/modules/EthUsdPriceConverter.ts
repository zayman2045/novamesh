import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

// Build a hardhat ignition module to deploy to EthUsdPriceConverter contract
export default buildModule("EthUsdPriceConverterModule", (module) => {
    const ethUsdPriceConverter = module.contract("EthUsdPriceConverter", []);
    return { contract: ethUsdPriceConverter };
});
