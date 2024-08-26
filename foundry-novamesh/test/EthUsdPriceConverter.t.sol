// SPDX-License-Identifier: MIT

pragma solidity ^0.8.24;

import {Test} from "forge-std/Test.sol";
import {EthUsdPriceConverter} from "../src/EthUsdPriceConverter.sol";

contract EthUsdPriceConverterTest is Test {
   EthUsdPriceConverter converter;

   function setUp() public {
    converter = new EthUsdPriceConverter();
   }

   function testGetDecimals() public view {
    uint256 acutalDecimals = converter.getDecimals();
    uint256 expectedDecimals = 8;
    assertEq(acutalDecimals, expectedDecimals);
   }
}