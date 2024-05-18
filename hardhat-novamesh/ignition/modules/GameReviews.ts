import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

export default buildModule("GameReviews", (m) => {
  const gameReviews = m.contract("GameReviews", []);
  return { gameReviews };
});
