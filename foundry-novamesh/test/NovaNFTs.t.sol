// SPDX-License-Identifier: MIT

pragma solidity ^0.8.24;

import {Test} from "forge-std/Test.sol";
import {NovaNFTs} from "../src/NovaNFTs.sol";
import "openzeppelin-contracts/contracts/utils/Strings.sol";

contract NovaNFTsTest is Test {
    NovaNFTs nft;

    function setUp() public {
        nft = new NovaNFTs();
    }

    function test_MintNFT() public {
        address recipient = address(0x123);
        uint256 tokenId = nft.mintNFT{value: 0.01 ether}(recipient);
        assertEq(tokenId, 0);
    }

    function testFail_MintNFTWithIncorrectValue() public {
        address recipient = address(0x123);
        nft.mintNFT{value: 0.001 ether}(recipient);
    }

    function test_BaseURI() public view {
        string memory uri = nft.getBaseURI();
        assertEq(uri, "https://ipfs.io/ipfs/");
    }

    function test_TokenPrice() public view {
        uint256 price = nft.NFT_PRICE();
        assertEq(price, 0.01 ether);
    }

    function test_Name() public view {
        string memory name = nft.name();
        assertEq(name, "Nova NFTs");
    }

    function test_Symbol() public view {
        string memory symbol = nft.symbol();
        assertEq(symbol, "NNFT");
    }

    function test_TokenURI() public {
        address recipient = address(0x123);
        uint256 tokenId = nft.mintNFT{value: 0.01 ether}(recipient);
        string memory baseURI = nft.getBaseURI();
        string memory tokenURI = nft.tokenURI(tokenId);
        string memory expectedTokenURI = string(
            abi.encodePacked(baseURI, Strings.toString(tokenId))
        );
        assertEq(tokenURI, expectedTokenURI);
    }
}
