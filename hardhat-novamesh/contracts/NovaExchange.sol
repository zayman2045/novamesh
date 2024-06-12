// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

import "./NovaToken.sol";

contract NovaExchange {
    NovaToken public novaToken;
    uint256 public exchangeRate = 100; // 1 ETH = 100 NOVA

    constructor(uint256 initialSupply) {
        novaToken = new NovaToken(address(this), initialSupply);
    }

    function buyTokens() public payable {
        uint256 novaAmount = msg.value * exchangeRate;
        novaToken.mint(msg.sender, novaAmount);
    }
}
