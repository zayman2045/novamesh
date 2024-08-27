// SPDX-License-Identifier: MIT

pragma solidity ^0.8.24;

import {Test} from "forge-std/Test.sol";
import {EthUsdPriceConverter} from "../src/EthUsdPriceConverter.sol";
import {ChainConfig} from "../script/ChainConfig.s.sol";
import {DeployEthUsdPriceConverter} from "../script/DeployEthUsdPriceConverter.s.sol";

contract EthUsdPriceConverterTest is Test {
    EthUsdPriceConverter priceConverter;

    function setUp() public {
        DeployEthUsdPriceConverter deployEthUsdPriceConverter = new DeployEthUsdPriceConverter();
        priceConverter = deployEthUsdPriceConverter.run();
    }

    function testGetDecimals() public view {
        uint256 acutalDecimals = priceConverter.getDecimals();
        uint256 expectedDecimals = 8;
        assertEq(acutalDecimals, expectedDecimals);
    }
}
