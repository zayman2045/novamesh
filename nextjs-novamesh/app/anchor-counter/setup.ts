import { IdlAccounts, Program } from "@coral-xyz/anchor";
import { IDL, AnchorCounter } from "./idl";
import { clusterApiUrl, Connection, PublicKey } from "@solana/web3.js";

const programId = new PublicKey("DeffejzE94nG1u4ZoAhGzmS9bWfQ1Sd1RFknj7M2AJa5");
const connection = new Connection(clusterApiUrl("devnet"));

export const program = new Program<AnchorCounter>(IDL, programId, {
  connection,
});

export const [counterPDA] = PublicKey.findProgramAddressSync(
  [Buffer.from("counter")],
  programId
);

export type CounterData = IdlAccounts<AnchorCounter>["counter"];
