// SPDX-License-Identifier: MIT

pragma solidity ^0.8.24; 

contract FundMe{
    function withdraw() public {
        payable(msg.sender).transfer(address(this).balance);
        bool sendSuccess = payable(msg.sender).send(address(this).balance);
        (bool sendSuccess2, ) = payable(msg.sender).call{value: address(this).balance}("");
    }
}