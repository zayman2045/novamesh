// SPDX-License-Identifier: MIT

pragma solidity ^0.8.24;

import {Script} from "forge-std/Script.sol";
import {NovaNFT} from "../src/NovaNFT.sol";

contract DeployNovaNFT is Script {
    uint256 s_subscriptionId = 34704273272032350667748017644232312045489273309779925904012839592426966833516;

    function run() external returns (NovaNFT) {
        uint256 deployerPrivateKey = vm.envUint("SEPOLIA_PRIVATE_KEY");
        vm.startBroadcast(deployerPrivateKey);
        NovaNFT novaNFT = new NovaNFT(s_subscriptionId);
        vm.stopBroadcast();
        return (novaNFT);
    }
}
