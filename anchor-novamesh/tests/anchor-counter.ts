import * as anchor from "@coral-xyz/anchor";
import { Program } from "@coral-xyz/anchor";
import { AnchorCounter } from "../target/types/anchor_counter";
import { expect } from "chai";

describe("anchor-counter", () => {
  const provider = anchor.AnchorProvider.env();
  anchor.setProvider(provider);

  const program = anchor.workspace.AnchorCounter as Program<AnchorCounter>;

  const [counterPDA] = anchor.web3.PublicKey.findProgramAddressSync(
    [Buffer.from("counter")],
    program.programId
  );

  it("initialize the counter", async () => {
    const tx = await program.methods.initialize().rpc();
  });

  it("incremented the count", async () => {
    const originalData = await program.account.counter.fetch(counterPDA);
    const transactionSignature = await program.methods.increment().rpc();
    const updatedData = await program.account.counter.fetch(counterPDA);
    expect(updatedData.count.toNumber()).to.equal(
      originalData.count.toNumber() + 1
    );
  });
});
