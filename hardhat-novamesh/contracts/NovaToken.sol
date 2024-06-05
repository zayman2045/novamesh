// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

import {ERC20} from "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract NovaToken is ERC20 {
    constructor(uint256 initialSupply) ERC20("Nova", "NOVA") {
        _mint(msg.sender, initialSupply);
    }
}
