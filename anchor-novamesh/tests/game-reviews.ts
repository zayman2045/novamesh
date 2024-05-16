import * as anchor from "@coral-xyz/anchor";
import { assert, expect } from "chai";
import { Program } from "@coral-xyz/anchor";
import { GameReviews } from "../target/types/game_reviews";

describe("game-reviews", () => {
  const provider = anchor.AnchorProvider.env();
  anchor.setProvider(provider);

  const program = anchor.workspace.GameReviews as Program<GameReviews>;

  const game_review = {
    title: "The Last of Us Part II",
    description: "Party at the end of the world!",
    rating: 9,
  };

  const [gameReviewPDA] = anchor.web3.PublicKey.findProgramAddressSync(
    [Buffer.from(game_review.title), provider.wallet.publicKey.toBuffer()],
    program.programId
  );

  it("add game review", async () => {
    const tx = await program.methods
      .addGameReview(
        game_review.title,
        game_review.description,
        game_review.rating
      )
      .rpc();

    const account = await program.account.gameReview.fetch(gameReviewPDA);
    assert.equal(game_review.title, account.title);
    assert.equal(game_review.description, account.description);
    assert.equal(game_review.rating, account.rating);
    assert.equal(
      provider.wallet.publicKey.toBase58(),
      account.reviewer.toBase58()
    );
  });

  it("update game review", async () => {
    const newDescription = "Back 2 Life!";
    const newRating = 10;
    const tx = await program.methods
      .updateGameReview(game_review.title, newDescription, newRating)
      .rpc();
    const account = await program.account.gameReview.fetch(gameReviewPDA);

    expect(account.title).to.equal(game_review.title);
    expect(account.description).to.equal(newDescription);
    expect(account.rating).to.equal(newRating);
    expect(account.reviewer.toBase58()).to.equal(
      provider.wallet.publicKey.toBase58()
    );
  });

  it("delete game review", async () => {
    const tx = await program.methods.deleteGameReview(game_review.title).rpc();
  });
});
