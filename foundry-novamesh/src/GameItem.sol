// SPDX-License-Identifier: MIT

pragma solidity >=0.8.10;

import "openzeppelin-contracts/contracts/token/ERC721/ERC721.sol";

contract GameItem is ERC721 {
    uint256 public currentTokenId;
    string private _customBaseURI;

    constructor(
        string memory name,
        string memory symbol,
        string memory baseURI
    ) ERC721(name, symbol) {
        _customBaseURI = baseURI;
    }

    function setBaseURI(string memory baseURI) public {
        _customBaseURI = baseURI;
    }

    function _baseURI() internal view override returns (string memory) {
        return _customBaseURI;
    }

    function awardItem(address player) public returns (uint256) {
        uint256 tokenId = ++currentTokenId;
        _safeMint(player, tokenId);
        return tokenId;
    }
}
