import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

const GameReviewsModule = buildModule("GameReviews", (m) => {
  const gameReviews = m.contract("GameReviews", []);
  return { gameReviews };
});

export default GameReviewsModule;
