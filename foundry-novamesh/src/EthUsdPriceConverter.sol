// SPDX-License-Identifier: MIT

pragma solidity ^0.8.24;

import {AggregatorV3Interface} from "chainlink-brownie-contracts/contracts/src/v0.8/shared/interfaces/AggregatorV3Interface.sol";

/**
@title EthUsdPriceConverter
@notice Convert ETH to USD
@dev Use Chainlink AggregatorV3Interface to get the latest ETH/USD price
 */
contract EthUsdPriceConverter {
    AggregatorV3Interface internal priceFeed;

    constructor(address _priceFeed) {
        priceFeed = AggregatorV3Interface(_priceFeed);
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
