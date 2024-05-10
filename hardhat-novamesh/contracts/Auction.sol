// SPDX-License-Identifier: MIT

pragma solidity ^0.8.24;

contract Auction {
    uint256 public s_currentBid;

    event BidPlaced(uint256, address);

    function placeBid(uint256 bid) public {
        require(bid > s_currentBid);
        s_currentBid = bid;
        emit BidPlaced(s_currentBid, msg.sender);
    }
}