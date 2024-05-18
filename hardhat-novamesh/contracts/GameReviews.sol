// SPDX-License-Identifier: MIT

pragma solidity ^0.8.24;

contract GameReviews {
    struct GameReview {
        address reviewer;
        string title;
        string description;
        uint8 rating;
    }

    mapping(address => mapping(string => GameReview)) s_gameReviews;
    mapping(address => string[]) s_gameTitles;

    event GameReviewAdded(string title, string description, uint8 rating);
    event GameReviewUpdated(string title, string description, uint8 rating);
    event GameReviewDeleted(string title);

    function addGameReview(
        string memory title,
        string memory description,
        uint8 rating
    ) public {
        require(
            s_gameReviews[msg.sender][title].reviewer == address(0),
            "You already have an existing review for this game"
        );
        s_gameReviews[msg.sender][title] = GameReview(
            msg.sender,
            title,
            description,
            rating
        );

        s_gameTitles[msg.sender].push(title);

        emit GameReviewAdded(title, description, rating);
    }

    function updateGameReview(
        string memory title,
        string memory description,
        uint8 rating
    ) public {
        require(
            s_gameReviews[msg.sender][title].reviewer == msg.sender,
            "You have not reviewed this game"
        );
        s_gameReviews[msg.sender][title] = GameReview({
            reviewer: msg.sender,
            title: title,
            description: description,
            rating: rating
        });

        emit GameReviewUpdated(title, description, rating);
    }

    function getGameReviews() public view returns (GameReview[] memory) {
        uint256 count = s_gameTitles[msg.sender].length;
        GameReview[] memory reviews = new GameReview[](count);
        for (uint256 i = 0; i < count; i++) {
            string memory title = s_gameTitles[msg.sender][i];
            reviews[i] = s_gameReviews[msg.sender][title];
        }
        return reviews;
    }

    function deleteGameReview(string memory title) public {
        require(
            s_gameReviews[msg.sender][title].reviewer == msg.sender,
            "You have not reviewed this game"
        );

        // Find and remove the title from the s_gameTitles array
        string[] storage titles = s_gameTitles[msg.sender];
        for (uint256 i = 0; i < titles.length; i++) {
            if (
                keccak256(abi.encodePacked(titles[i])) ==
                keccak256(abi.encodePacked(title))
            ) {
                titles[i] = titles[titles.length - 1];
                titles.pop();
                break;
            }
        }

        delete s_gameReviews[msg.sender][title];
        emit GameReviewDeleted(title);
    }
}
