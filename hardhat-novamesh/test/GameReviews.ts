import { ignition } from "hardhat";
import GameReviews from "../ignition/modules/GameReviews";
import { loadFixture } from "@nomicfoundation/hardhat-network-helpers";
import { expect } from "chai";

interface GameReview {
  reviewer: string;
  title: string;
  description: string;
  rating: number;
}

describe("game reviews", () => {
  const setup = async () => {
    return ignition.deploy(GameReviews);
  };

  it("game review added", async () => {
    const { gameReviews } = await loadFixture(setup);

    const inputReview = {
      title: "Avengers",
      description: "Greatest Movie Ever!",
      rating: 10,
    };

    await gameReviews.addGameReview(
      inputReview.title,
      inputReview.description,
      inputReview.rating
    );
    const reviews: GameReview[] = await gameReviews.getGameReviews();
    expect(reviews.length).to.equal(1);

    const addedReview = reviews[0];
    expect(addedReview.title).to.equal(inputReview.title);
    expect(addedReview.description).to.equal(inputReview.description);
    expect(addedReview.rating).to.equal(inputReview.rating);
  });
});
