// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract NovaMeshExchange {
    ERC20 public novaToken;
    ERC20 public meshToken;

    uint256 public constantProduct;

    constructor(address _novaToken, address _meshToken) {
        novaToken = ERC20(_novaToken);
        meshToken = ERC20(_meshToken);
        constantProduct = 0;
    }

    // Add liquidity to the pool
    function addLiquidity(uint256 _amount) public {
        require(
            novaToken.balanceOf(msg.sender) >= _amount,
            "Insufficient NOVA balance"
        );
        require(
            meshToken.balanceOf(msg.sender) >= _amount,
            "Insufficient MESH balance "
        );

        novaToken.transferFrom(msg.sender, address(this), _amount);
        meshToken.transferFrom(msg.sender, address(this), _amount);

        // Update the constant product
        constantProduct =
            novaToken.balanceOf(address(this)) *
            meshToken.balanceOf(address(this));
    }

    // Swap NOVA for MESH
    function swapNovaForMesh(uint256 _novaAmount) public {
        require(_novaAmount > 0, "Must swap more than 0 tokens");
        require(
            novaToken.balanceOf(msg.sender) >= _novaAmount,
            "Insufficient NOVA balance"
        );

        uint256 novaBalance = novaToken.balanceOf(address(this));
        uint256 meshBalance = meshToken.balanceOf(address(this));

        uint256 newNovaBalance = novaBalance + _novaAmount;
        uint256 newMeshBalance = constantProduct / newNovaBalance;

        uint256 meshAmount = meshBalance - newMeshBalance;

        novaToken.transferFrom(msg.sender, address(this), _novaAmount);
        meshToken.transfer(msg.sender, meshAmount);
    }

    // Swap MESH for NOVA
    function swapMeshForNova(uint256 _meshAmount) public {
        require(_meshAmount > 0, "Must swap more than 0 tokens");
        require(
            meshToken.balanceOf(msg.sender) >= _meshAmount,
            "Insufficient MESH balance"
        );

        uint256 novaBalance = novaToken.balanceOf(address(this));
        uint256 meshBalance = meshToken.balanceOf(address(this));

        uint256 newMeshBalance = meshBalance + _meshAmount;
        uint256 newNovaBalance = constantProduct / newMeshBalance;

        uint256 novaAmount = novaBalance - newNovaBalance;

        meshToken.transferFrom(msg.sender, address(this), _meshAmount);
        novaToken.transfer(msg.sender, novaAmount);
    }
}
