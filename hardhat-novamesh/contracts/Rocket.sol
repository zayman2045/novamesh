// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

contract Rocket {
    string public name;
    string public status = "ready";

    constructor(string memory _name) {
        name = _name;
    }

    function launch() public {
        status = "lift-off";
    }
}