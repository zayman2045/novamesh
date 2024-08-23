// SPDX-License-Identifier: MIT

pragma solidity ^0.8.24;

import {ERC721} from "openzeppelin-contracts/contracts/token/ERC721/ERC721.sol";

contract NovaNFTs is ERC721 {
    uint256 private _tokenCounter;
    uint256 public tokenPrice = 0.01 ether;
    string public baseURI = "https://ipfs.io/ipfs/";

    constructor() ERC721("NovaNFTs", "NOVA") {
        _tokenCounter = 0;
    }

    function _baseURI() internal view override returns (string memory) {
        return baseURI;
    }

    function mintNFT(address recipient) public payable returns (uint256) {
        require(msg.value == tokenPrice, "Ether value sent is not correct");
        uint256 newItemId = _tokenCounter;
        _safeMint(recipient, newItemId);
        _tokenCounter = _tokenCounter + 1;
        return newItemId;
    }
}
