import {
  useConnection,
  useAnchorWallet,
} from "@solana/wallet-adapter-react";
import * as anchor from "@project-serum/anchor";
import { FC, useEffect, useState } from "react";
import { IDL } from "./idl";
import { Button } from "@chakra-ui/react";

const PROGRAM_ID = new anchor.web3.PublicKey(
  `DeffejzE94nG1u4ZoAhGzmS9bWfQ1Sd1RFknj7M2AJa5`
);

export interface Props {
  setCounter: (value: anchor.web3.PublicKey) => void;
  setTransactionUrl: (url: string) => void;
}

export const Initialize: FC<Props> = ({ setCounter, setTransactionUrl }) => {
  const [program, setProgram] = useState<anchor.Program<anchor.Idl> | null>(
    null
  );
  const { connection } = useConnection();
  const wallet = useAnchorWallet();

  if (!wallet) {
    console.log("Error: Wallet failure.");
    process.exit(1);
  }

  useEffect(() => {
    let provider: anchor.Provider;

    try {
      provider = anchor.getProvider();
    } catch {
      provider = new anchor.AnchorProvider(connection, wallet, {});
      anchor.setProvider(provider);
    }

    const program = new anchor.Program(IDL as anchor.Idl, PROGRAM_ID);
    setProgram(program);
  }, []);

  const onClick = async () => {
    const newAccount = anchor.web3.Keypair.generate();

    if (!program) {
      console.log("Error: Program registration failed.");
      process.exit(1);
    }

    const sig = await program.methods
      .initialize()
      .accounts({
        counter: newAccount.publicKey,
        user: wallet.publicKey,
        systemAccount: anchor.web3.SystemProgram.programId,
      })
      .signers([newAccount])
      .rpc();

    setTransactionUrl(`https://explorer.solana.com/tx/${sig}?cluster=devnet`);
    setCounter(newAccount.publicKey);
  };

  return <button onClick={onClick}>Initialize Counter</button>;
};
