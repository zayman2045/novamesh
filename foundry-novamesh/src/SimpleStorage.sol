// SPDX-License-Identifier: MIT

pragma solidity ^0.8.24;

contract SimpleStorage {
    uint256 public favoriteNumber;

    function setNumber(uint256 newNumber) public returns (uint256) {
        favoriteNumber = newNumber;
        return(favoriteNumber);
    }
}