// SPDX-License-Identifier: MIT

pragma solidity ^0.8.24;

contract Counter {
    uint256 public s_counter;

    function increment() public {
        s_counter += 1;
    }
}
