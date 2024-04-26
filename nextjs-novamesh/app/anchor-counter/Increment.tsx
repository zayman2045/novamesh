import {
  useConnection,
  useWallet,
  useAnchorWallet,
} from "@solana/wallet-adapter-react";
import * as anchor from "@project-serum/anchor";
import { FC, useCallback, useEffect, useState } from "react";
import { IDL } from "./idl";
import { Button, HStack, VStack, Text } from "@chakra-ui/react";

const PROGRAM_ID = `DeffejzE94nG1u4ZoAhGzmS9bWfQ1Sd1RFknj7M2AJa5`;

export interface Props {
  counter: anchor.web3.PublicKey;
  setTransactionUrl: (url: string) => void;
}

export const Increment: FC<Props> = ({ counter, setTransactionUrl }) => {
  const [count, setCount] = useState(0);
  const [program, setProgram] = useState<anchor.Program>();
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
    refreshCount(program);
  }, []);

//   if (!program) {
//     console.log("Error: Program registration failed.");
//     process.exit(1);
//   }

  const incrementCount = async () => {
    const sig = await program!.methods
      .increment()
      .accounts({
        counter: counter,
        user: wallet.publicKey,
      })
      .rpc();

    setTransactionUrl(`https://explorer.solana.com/tx/${sig}?cluster=devnet`);
  };

  const refreshCount = async (program: anchor.Program) => {
    const counterAccount = await program.account.counter.fetch(counter);
    setCount(counterAccount.count.toNumber());
  };

  return (
    <>
      <button onClick={incrementCount}>Increment Counter</button>
      <button onClick={() => refreshCount(program!)}>Refresh count</button>
      <p color="white">Count: {count}</p>
    </>
  );
};
