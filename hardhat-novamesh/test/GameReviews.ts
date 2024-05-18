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

    const reviewResponse = reviews[0];
    expect(reviewResponse.title).to.equal(inputReview.title);
    expect(reviewResponse.description).to.equal(inputReview.description);
    expect(reviewResponse.rating).to.equal(inputReview.rating);
  });

  it("game review updated", async () => {
    const { gameReviews } = await loadFixture(setup);

    const initialReview = {
      title: "Inception",
      description: "Pretty good",
      rating: 9,
    };

    await gameReviews.addGameReview(
      initialReview.title,
      initialReview.description,
      initialReview.rating
    );

    const updatedReview = {
      title: initialReview.title,
      description: "Overrated",
      rating: 6,
    };

    await gameReviews.updateGameReview(
      updatedReview.title,
      updatedReview.description,
      updatedReview.rating
    );

    const reviews: GameReview[] = await gameReviews.getGameReviews();
    expect(reviews).to.have.length(1);

    const reviewResponse = reviews[0];
    expect(reviewResponse.title).to.equal(updatedReview.title);
    expect(reviewResponse.description).to.equal(updatedReview.description);
    expect(reviewResponse.rating).to.equal(updatedReview.rating);
  });

  it("game review deleted", async () => {
    const { gameReviews } = await loadFixture(setup);

    const inputReview = {
      title: "The Dark Knight",
      description: "Absolutely amazing!",
      rating: 10,
    };

    await gameReviews.addGameReview(
      inputReview.title,
      inputReview.description,
      inputReview.rating
    );
    await gameReviews.deleteGameReview(inputReview.title);
    const reviews: GameReview[] = await gameReviews.getGameReviews();
    expect(reviews).to.have.length(0);
  });

  it("second game review added", async () => {
    const { gameReviews } = await loadFixture(setup);

    const firstReview = {
      title: "Avengers",
      description: "Greatest Movie Ever!",
      rating: 10,
    };

    await gameReviews.addGameReview(
      firstReview.title,
      firstReview.description,
      firstReview.rating
    );

    const secondReview = {
      title: "Dune",
      description: "Incredible!",
      rating: 10,
    };

    await gameReviews.addGameReview(
      secondReview.title,
      secondReview.description,
      secondReview.rating
    );
    const reviews: GameReview[] = await gameReviews.getGameReviews();
    expect(reviews.length).to.equal(2);

    const reviewResponse = reviews[1];
    expect(reviewResponse.title).to.equal(secondReview.title);
    expect(reviewResponse.description).to.equal(secondReview.description);
    expect(reviewResponse.rating).to.equal(secondReview.rating);
  });
});
