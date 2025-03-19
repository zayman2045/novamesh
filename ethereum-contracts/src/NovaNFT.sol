// SPDX-License-Identifier: MIT

pragma solidity ^0.8.24;

import {ERC721URIStorage, ERC721} from "openzeppelin-contracts/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import {VRFConsumerBaseV2Plus} from "chainlink-brownie-contracts/contracts/src/v0.8/vrf/dev/VRFConsumerBaseV2Plus.sol";
import {VRFV2PlusClient} from "chainlink-brownie-contracts/contracts/src/v0.8/vrf/dev/libraries/VRFV2PlusClient.sol";

/**
 * @title NovaNFT
 * @notice This contract mints NFTs and uses Chainlink VRF to mint random NFTs
 */
contract NovaNFT is ERC721URIStorage, VRFConsumerBaseV2Plus {
    uint256 private s_tokenCounter;
    uint256 public constant TOKEN_PRICE = 0.01 ether;
    uint256 s_subscriptionId;
    address vrfCoordinator = 0x9DdfaCa8183c41ad55329BdeeD9F6A8d53168B1B;
    bytes32 s_keyHash =
        0x787d74caea10b2b357790d5b5247c2f63d1d91572a9846f780606e4d953677ae;
    uint32 callbackGasLimit = 500000;
    uint16 requestConfirmations = 3;
    uint32 numWords = 1;
    mapping(uint256 => address) public requestIdToRecipient;

    error NovaNFT__InvalidEthValueSent(uint256 ethSent, uint256 tokenPrice);

    event NFTMinted(address indexed recipient, uint256 indexed newTokenId);
    event LootBoxActivated(
        address indexed recipient,
        uint256 indexed requestId
    );
    event RandomNFTMinted(
        address indexed recipient,
        uint256 indexed newTokenId
    );

    constructor(
        uint256 subscriptionId
    ) ERC721("Nova NFT", "NNFT") VRFConsumerBaseV2Plus(vrfCoordinator) {
        s_subscriptionId = subscriptionId;
    }

    function mintNFT(
        address recipient
    ) public payable returns (uint256 newTokenId) {
        if (msg.value != TOKEN_PRICE) {
            revert NovaNFT__InvalidEthValueSent(msg.value, TOKEN_PRICE);
        }
        newTokenId = s_tokenCounter;
        _safeMint(recipient, newTokenId);
        s_tokenCounter += 1;
        emit NFTMinted(recipient, newTokenId);
    }

    function activateLootBox(
        address recipient
    ) public payable returns (uint256 requestId) {
        if (msg.value != TOKEN_PRICE) {
            revert NovaNFT__InvalidEthValueSent(msg.value, TOKEN_PRICE);
        }

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
        emit LootBoxActivated(recipient, requestId);
    }

    function fulfillRandomWords(
        uint256 requestId,
        uint256[] calldata randomWords
    ) internal override {
        uint256 randomNum = randomWords[0];
        address recipient = requestIdToRecipient[requestId];
        mintRandomNFT(recipient, randomNum);
    }

    function mintRandomNFT(
        address recipient,
        uint256 randomNum
    ) internal returns (uint256 newTokenId) {
        newTokenId = s_tokenCounter + 1;
        _safeMint(recipient, newTokenId);

        // Generate the token URI based on the random number
        if (randomNum % 2 == 0) {
            string
                memory _tokenURI = "ipfs://QmdQ5qTZgdanGiWxCC5TT6TJ5Acd5dwifZotFEdYBzkNAu";

            _setTokenURI(newTokenId, _tokenURI);
        } else {
            string
                memory _tokenURI = "ipfs://QmbaLg5h3VfSrUgwf3eJzAwGsTJ58Kx8A8YHf37G46LyHK";
            _setTokenURI(newTokenId, _tokenURI);
        }

        s_tokenCounter += 1;
        emit RandomNFTMinted(recipient, newTokenId);
    }

    function withdraw() public onlyOwner {
        (bool success, ) = payable(msg.sender).call{
            value: address(this).balance
        }("");
        require(success, "Transfer failed.");
    }
}
