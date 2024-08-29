// SPDX-License-Identifier: MIT

pragma solidity ^0.8.24;

import {Script} from "forge-std/Script.sol";
import {EthUsdPriceConverter} from "../src/EthUsdPriceConverter.sol";
import {ChainConfig} from "./ChainConfig.s.sol";

contract DeployEthUsdPriceConverter is Script {
    function run() external returns (EthUsdPriceConverter) {
        uint256 deployerPrivateKey = vm.envUint("SEPOLIA_PRIVATE_KEY");
        ChainConfig chainConfig = new ChainConfig();
        address priceFeed = chainConfig.activeNetworkConfig();

        vm.startBroadcast(deployerPrivateKey);
        EthUsdPriceConverter ethUsdPriceConverter = new EthUsdPriceConverter(priceFeed);
        vm.stopBroadcast();
        return (ethUsdPriceConverter);
    }
}
