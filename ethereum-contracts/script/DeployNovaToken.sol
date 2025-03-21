// SPDX-License-Identifier: MIT

pragma solidity ^0.8.24;

import {Script} from "forge-std/Script.sol";
import {NovaToken} from "../src/NovaToken.sol";

contract DeployNovaToken is Script {
    function run() external returns (NovaToken) {
        uint256 deployerPrivateKey = vm.envUint("SEPOLIA_PRIVATE_KEY");
        vm.startBroadcast(deployerPrivateKey);
        NovaToken novaToken = new NovaToken();
        vm.stopBroadcast();
        return novaToken;
    }
}