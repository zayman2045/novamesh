// SPDX-License-Identifier: MIT

pragma solidity ^0.8.24;

import {ERC20} from "openzeppelin-contracts/contracts/token/ERC20/ERC20.sol";

/**
@title NovaToken
@notice Mint Nova tokens in exchange for ETH
 */
contract NovaToken is ERC20 {
    uint256 private s_exchangeRate = 1;

    constructor() ERC20("Nova", "NOVA") {}

    // Mints Nova tokens to the user in exchange for ETH
    function mintTokens() public payable {
        uint256 novaAmount = msg.value * s_exchangeRate;
        _mint(msg.sender, novaAmount);
    }
}
