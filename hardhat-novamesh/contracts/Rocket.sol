// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.24;

contract Rocket {
    string public s_name;
    string public status;

    constructor(string memory _name) {
        s_name = _name;
        status = "ignition";
    }

    function launch() public {
        status = "lift-off";
    }
}