// SPDX-License-Identifier: MIT

pragma solidity ^0.8.24;

import {Script} from "forge-std/Script.sol";
import {NovaNFTs} from "../src/NovaNFTs.sol";

contract DeployNovaNFTs is Script {
    function run() external {
        uint256 deployerPrivateKey = vm.envUint("SEPOLIA_PRIVATE_KEY");
        vm.startBroadcast(deployerPrivateKey);
        new NovaNFTs();
        vm.stopBroadcast();
    }
}
