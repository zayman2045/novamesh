// SPDX-License-Identifier: MIT

pragma solidity ^0.8.24;

import {ERC721} from "openzeppelin-contracts/contracts/token/ERC721/ERC721.sol";
import {LootBox} from "./LootBox.sol";

/**
@title NovaNFTs
@notice Mint NFTs
 */
contract NovaNFTs is ERC721 {
    uint256 private s_tokenCounter;
    uint256 public constant NFT_PRICE = 0.01 ether;
    string private s_baseURI = "https://ipfs.io/ipfs/";
    LootBox private s_lootBox;

    event NFTMinted(address indexed recipient, uint256 indexed tokenId);
    event RandomNFTMinted(
        address indexed recipient,
        uint256 indexed tokenId,
        uint256 indexed randomNum
    );

    modifier onlyLootBox() {
        require(msg.sender == address(s_lootBox), "Only LootBox can call");
        _;
    }

    constructor() ERC721("Nova NFTs", "NNFT") {
        s_lootBox = new LootBox(
            34704273272032350667748017644232312045489273309779925904012839592426966833516
        );
    }

    function mintNFT(
        address recipient
    ) public payable returns (uint256 newItemId) {
        require(msg.value == NFT_PRICE, "Incorrect Ether value sent");
        newItemId = s_tokenCounter;
        _safeMint(recipient, newItemId);
        s_tokenCounter += 1;
        emit NFTMinted(recipient, newItemId);
        return newItemId;
    }

    function requestRandomNFT(address recipient) public payable {
        require(msg.value == NFT_PRICE, "Incorrect Ether value sent");
        s_lootBox.activateLootBox(recipient);
    }

    function mintRandomNFT(
        address recipient,
        uint256 randomNum
    ) public onlyLootBox {
        uint256 newItemId = s_tokenCounter;
        _safeMint(recipient, newItemId);
        s_tokenCounter += 1;
        emit RandomNFTMinted(recipient, newItemId, randomNum);
    }

    function _baseURI() internal view override returns (string memory) {
        return s_baseURI;
    }

    function getBaseURI() external view returns (string memory) {
        return s_baseURI;
    }
}
