// SPDX-License-Identifier: MIT

pragma solidity ^0.8.24;

import {VRFConsumerBaseV2Plus} from "chainlink-brownie-contracts/contracts/src/v0.8/vrf/dev/VRFConsumerBaseV2Plus.sol";
import {VRFV2PlusClient} from "chainlink-brownie-contracts/contracts/src/v0.8/vrf/dev/libraries/VRFV2PlusClient.sol";
import {NovaNFTs} from "./NovaNFTs.sol";

/**
@title LootBox
@notice Request a random number from ChainlinkVRF and mint NFTs
 */
contract LootBox is VRFConsumerBaseV2Plus {
    uint256 s_subscriptionId;
    address vrfCoordinator = 0x9DdfaCa8183c41ad55329BdeeD9F6A8d53168B1B;
    bytes32 s_keyHash =
        0x787d74caea10b2b357790d5b5247c2f63d1d91572a9846f780606e4d953677ae;
    uint32 callbackGasLimit = 40000;
    uint16 requestConfirmations = 3;
    uint32 numWords = 1;
    uint256 public randomNum;

    mapping(uint256 => address) public requestIdToRecipient;
    NovaNFTs public novaNfts = NovaNFTs(this.owner());

    event LootBoxActivated(
        uint256 indexed requestId,
        address indexed recipient
    );

    constructor(uint256 subscriptionId) VRFConsumerBaseV2Plus(vrfCoordinator) {
        s_subscriptionId = subscriptionId;
    }

    function activateLootBox(
        address recipient
    ) public onlyOwner returns (uint256 requestId) {
        requestId = s_vrfCoordinator.requestRandomWords(
            VRFV2PlusClient.RandomWordsRequest({
                keyHash: s_keyHash,
                subId: s_subscriptionId,
                requestConfirmations: requestConfirmations,
                callbackGasLimit: callbackGasLimit,
                numWords: numWords,
                // Set nativePayment to true to pay for VRF requests with Sepolia ETH instead of LINK
                extraArgs: VRFV2PlusClient._argsToBytes(
                    VRFV2PlusClient.ExtraArgsV1({nativePayment: false})
                )
            })
        );

        requestIdToRecipient[requestId] = recipient;
        emit LootBoxActivated(requestId, recipient);
    }

    function fulfillRandomWords(
        uint256 requestId,
        uint256[] calldata randomWords
    ) internal override {
        randomNum = randomWords[0];
        address recipient = requestIdToRecipient[requestId];

        // Mint NFT with random number
        novaNfts.mintRandomNFT(recipient, randomNum);
    }
}
