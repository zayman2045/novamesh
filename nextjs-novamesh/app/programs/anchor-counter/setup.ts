import { IdlAccounts, Program } from "@coral-xyz/anchor";
import { IDL, AnchorCounter } from "./idl";
import { clusterApiUrl, Connection, PublicKey } from "@solana/web3.js";

// Specify the devnet program ID for the Anchor Counter program.
const programId = new PublicKey("dPRoKkdhQVbQfMtFkfXq1rjZM7ooCpnDpYhMBJGtwy4");

// Establish a connection to the Solana devnet cluster.
const connection = new Connection(clusterApiUrl("devnet"));

// Create a new Program instance with the IDL and program ID.
export const program = new Program<AnchorCounter>(IDL, programId, {
  connection,
});

// Derive the program-derived address for the "counter" account.
export const [counterPDA] = PublicKey.findProgramAddressSync(
  [Buffer.from("counter")],
  programId
);

// Export the type for the 'counter' account data.
export type CounterData = IdlAccounts<AnchorCounter>["counter"];
