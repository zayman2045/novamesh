"use client"
import { PublicKey } from "@solana/web3.js";
import { Increment } from "../anchor-counter/Increment";
import { Initialize } from "../anchor-counter/Initialize";
import { useWallet } from "@solana/wallet-adapter-react";
import { useState } from "react";

export default function ProgramsHome() {
  const [counter, setCounter] = useState<PublicKey | null>(null);
  const [transactionUrl, setTransactionUrl] = useState("");
  const wallet = useWallet();
  return (
    <>
      <h1>Programs</h1>
      <h2>Solana Counter</h2>
      {wallet.connected ? (
        counter ? (
          <Increment counter={counter} setTransactionUrl={setTransactionUrl}/>
        ) : (
          <Initialize setCounter={setCounter} setTransactionUrl={setTransactionUrl}/>
        )
      ) : (
        <p>Connect Wallet</p>
      )}
      <h2>Ethereum Counter</h2>
    </>
  );
  }
