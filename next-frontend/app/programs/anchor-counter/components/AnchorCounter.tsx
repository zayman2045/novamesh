"use client";

import AnchorCounterState from "./AnchorCounterState";
import AnchorIncrementButton from "./AnchorIncrementButton";
import { useWallet } from "@solana/wallet-adapter-react";

export default function AnchorCounter() {
  const wallet = useWallet();
  return (
    <>
      <div className={"flex flex-col mx-auto border rounded w-1/4 mt-4"}>
        <h2 className={" bg-white text-black w-full"}>Solana Counter</h2>
        {wallet.connected ? (
          <div className={"mx-auto"}>
            <AnchorCounterState />
            <AnchorIncrementButton />
          </div>
        ) : (
          <p> Please Connect Solana Wallet</p>
        )}
      </div>
    </>
  );
}
