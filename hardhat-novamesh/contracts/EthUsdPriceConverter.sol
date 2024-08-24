// SPDX-License-Identifier: MIT

pragma solidity ^0.8.24;

import {AggregatorV3Interface} from "@chainlink/contracts/src/v0.8/shared/interfaces/AggregatorV3Interface.sol";

contract EthUsdPriceConverter {
    AggregatorV3Interface internal priceFeed;

    constructor() {
        priceFeed = AggregatorV3Interface(
            0x694AA1769357215DE4FAC081bf1f309aDC325306
        ); // Sepolia Testnet ETH/USD
        // priceFeed = AggregatorV3Interface(0x5f4eC3Df9cbd43714FE2740f5E3616155c5b8419); // Mainnet ETH/USD
    }

    function getLatestPrice() public view returns (int256) {
        (, int256 answer, , , ) = priceFeed.latestRoundData();
        return answer * 1e10; // Convert to 1e18 precision
    }

    function getDecimals() public view returns (uint8) {
        return priceFeed.decimals(); // 8 decimals for ETH/USD
    }

    function getEthInUsd(uint256 ethAmount) external view returns (uint256) {
        int256 ethPrice = getLatestPrice();
        return (ethAmount * uint256(ethPrice)) / 1e18;
    }
}
