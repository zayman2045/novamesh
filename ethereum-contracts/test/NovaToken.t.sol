// SPDX-License-Identifier: MIT

pragma solidity ^0.8.24;

import {Test} from "forge-std/Test.sol";
import {NovaToken} from "../src/NovaToken.sol";
import {DeployNovaToken} from "../script/DeployNovaToken.sol";

contract NovaTokenTest is Test {
    NovaToken novaToken;

    function setUp() public {
        DeployNovaToken deployNovaToken = new DeployNovaToken();
        novaToken = deployNovaToken.run();
    }

    function test_MintNovaTokens() public {
        address user = address(this);
        uint256 userInitialBalance = novaToken.balanceOf(user);
        assertEq(userInitialBalance, 0);

        novaToken.mintTokens{value: 1}();
        uint256 userFinalBalance = novaToken.balanceOf(user);
        assertEq(userFinalBalance, 1);
    }
}
