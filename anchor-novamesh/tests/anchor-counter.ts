import * as anchor from "@coral-xyz/anchor";
import { Program } from "@coral-xyz/anchor";
import { AnchorCounter } from "../target/types/anchor_counter";
import { assert, expect } from "chai";
import { PublicKey } from "@solana/web3.js";

describe("anchor-counter", () => {
  const provider = anchor.AnchorProvider.env();
  anchor.setProvider(provider);

  const program = anchor.workspace.AnchorCounter as Program<AnchorCounter>;

  const [counterPDA] = PublicKey.findProgramAddressSync(
    [Buffer.from("counter")],
    program.programId
  );

  it("Is initialized", async () => {
    try {
      const transactionSignature = await program.methods.initialize().rpc();

      const accountData = await program.account.counter.fetch(counterPDA);

      console.log(`Transaction Signature: ${transactionSignature}`);
      console.log(`Count: ${accountData.count}`);
      expect(accountData.count.toNumber()).to.equal(0);
    } catch (error) {
      console.log(error);
    }
  });

  it("Incremented the count", async () => {
    const transactionSignature = await program.methods.increment().rpc();

    const accountData = await program.account.counter.fetch(counterPDA);

    console.log(`Transaction Signature: ${transactionSignature}`);
    console.log(`Count: ${accountData.count}`);
    assert.deepEqual(accountData.count.toNumber(), 1);
  });
});
