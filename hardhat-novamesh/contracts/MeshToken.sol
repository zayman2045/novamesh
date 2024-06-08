// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

import {ERC20} from "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract MeshToken is ERC20 {
    constructor(uint256 _initialSupply) ERC20("Mesh", "MESH") {
        _mint(msg.sender, _initialSupply);
    }

    function mint(uint256 _amount) public {
        _mint(msg.sender, _amount);
    }
}
