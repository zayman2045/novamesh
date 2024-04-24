import * as anchor from "@coral-xyz/anchor";
import { Program } from "@coral-xyz/anchor";
import { AnchorNovamesh } from "../target/types/anchor_novamesh";
import { assert, expect } from "chai";

describe("anchor-novamesh", () => {
  // Configure the client to use the local cluster.

  const provider = anchor.AnchorProvider.env();
  anchor.setProvider(provider);

  const program = anchor.workspace.AnchorNovamesh as Program<AnchorNovamesh>;

  const counter = anchor.web3.Keypair.generate();

  it("Is initialized", async () => {
    const tx = await program.methods
      .initialize()
      .accounts({ counter: counter.publicKey })
      .signers([counter])
      .rpc();

    const account = await program.account.counter.fetch(counter.publicKey);
    expect(account.count.toNumber()).to.equal(0);
  });

  it("Incremented the count", async () => {
    const tx = await program.methods
      .increment()
      .accounts({ counter: counter.publicKey })
      .rpc();

    const account = await program.account.counter.fetch(counter.publicKey);
    assert.deepEqual(account.count.toNumber(), 1);
  });
});
