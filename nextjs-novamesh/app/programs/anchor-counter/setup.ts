import { IdlAccounts, Program } from "@coral-xyz/anchor";
import { IDL, AnchorCounter } from "./idl";
import { clusterApiUrl, Connection, PublicKey } from "@solana/web3.js";

const programId = new PublicKey("dPRoKkdhQVbQfMtFkfXq1rjZM7ooCpnDpYhMBJGtwy4");
const connection = new Connection(clusterApiUrl("devnet"));

export const program = new Program<AnchorCounter>(IDL, programId, {
  connection,
});

export const [counterPDA] = PublicKey.findProgramAddressSync(
  [Buffer.from("counter")],
  programId
);

export type CounterData = IdlAccounts<AnchorCounter>["counter"];
