// SPDX-License-Identifier: MIT

pragma solidity ^0.8.24;

import {ERC721} from "openzeppelin-contracts/contracts/token/ERC721/ERC721.sol";

/**
@title NovaNFTs
@notice Mint NFTs
 */
contract NovaNFTs is ERC721 {
    uint256 private s_tokenCounter;
    uint256 private constant NFT_PRICE = 0.01 ether;
    string private s_baseURI = "https://ipfs.io/ipfs/";

    constructor() ERC721("Nova NFTs", "NNFT") {}

    function _baseURI() internal view override returns (string memory) {
        return s_baseURI;
    }

    function mintNFT(address recipient) public payable returns (uint256) {
        require(msg.value == NFT_PRICE, "Incorrect Ether value sent");
        uint256 newItemId = s_tokenCounter;
        _safeMint(recipient, newItemId);
        s_tokenCounter += 1;
        return newItemId;
    }
}
