// SPDX-License-Identifier: MIT

pragma solidity ^0.8.24;

import {Test, console} from "forge-std/Test.sol";
import {NovaNFT} from "../src/NovaNFT.sol";
import {DeployNovaNFT} from "../script/DeployNovaNFT.s.sol";
import "openzeppelin-contracts/contracts/utils/Strings.sol";

contract NovaNFTsTest is Test {
    NovaNFT novaNFT;
    address recipient = address(0x123);

    function setUp() public {
        DeployNovaNFT deployNovaNFT = new DeployNovaNFT();
        novaNFT = deployNovaNFT.run();
    }

    function test_MintNFT() public {
        uint256 tokenId = novaNFT.mintNFT{value: 0.01 ether}(recipient);
        assertEq(tokenId, 0);
    }

    function testFail_MintNFTWithIncorrectValue() public {
        novaNFT.mintNFT{value: 3 ether}(recipient);
    }

    function testWithdraw() public {
        address owner = novaNFT.owner();
        assertEq(owner.balance, 0);

        novaNFT.mintNFT{value: 0.01 ether}(recipient);
        vm.prank(owner);
        novaNFT.withdraw();
        assertEq(owner.balance, 0.01 ether);
    }

    function test_BaseURI() public view {
        string memory uri = novaNFT.getBaseURI();
        assertEq(uri, "https://ipfs.io/ipfs/");
    }

    function test_TokenPrice() public view {
        uint256 price = novaNFT.TOKEN_PRICE();
        assertEq(price, 0.01 ether);
    }

    function test_Name() public view {
        string memory name = novaNFT.name();
        assertEq(name, "Nova NFT");
    }

    function test_Symbol() public view {
        string memory symbol = novaNFT.symbol();
        assertEq(symbol, "NNFT");
    }

    function test_TokenURI() public {
        uint256 tokenId = novaNFT.mintNFT{value: 0.01 ether}(recipient);
        string memory baseURI = novaNFT.getBaseURI();
        string memory tokenURI = novaNFT.tokenURI(tokenId);
        string memory expectedTokenURI = string(
            abi.encodePacked(baseURI, Strings.toString(tokenId))
        );
        assertEq(tokenURI, expectedTokenURI);
    }
}
