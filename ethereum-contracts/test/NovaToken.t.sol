// SPDX-License-Identifier: MIT

pragma solidity ^0.8.24;

import {Test, console} from "forge-std/Test.sol";
import {NovaToken} from "../src/NovaToken.sol";
import {DeployNovaToken} from "../script/DeployNovaToken.sol";

contract NovaTokenTest is Test {
    NovaToken novaToken;
    address user = makeAddr("user");

    function setUp() public {
        DeployNovaToken deployNovaToken = new DeployNovaToken();
        novaToken = deployNovaToken.run();
    }

    function test_MintNovaTokens() public {
        uint256 userInitialBalance = novaToken.balanceOf(user);
        assertEq(userInitialBalance, 0);

        hoax(user, 1);
        novaToken.mintTokens{value: 1}();
        uint256 userFinalBalance = novaToken.balanceOf(user);
        assertEq(userFinalBalance, 1);
    }

    function test_Name() public view {
        string memory name = novaToken.name();
        assertEq(name, "Nova");
    }

    function test_Symbol() public view {
        string memory symbol = novaToken.symbol();
        assertEq(symbol, "NOVA");
    }

    function test_Constructor() public {
        NovaToken novaTokenContract = new NovaToken();
        uint64 nonce = vm.getNonce(address(novaTokenContract));
        assertEq(nonce, 1);
    }
}
