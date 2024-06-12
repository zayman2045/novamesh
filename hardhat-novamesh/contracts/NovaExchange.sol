// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

import "./NovaToken.sol";

contract NovaExchange {
    NovaToken public novaToken;

    constructor(uint256 initialSupply) {
        novaToken = new NovaToken(address(this), initialSupply);
    }

    function buyTokens(uint256 amount) public {}
}
