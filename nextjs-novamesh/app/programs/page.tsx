"use client";

import { useWallet } from "@solana/wallet-adapter-react";
import AnchorCounterState from "./anchor-counter/components/AnchorCounterState";
import HardhatCounterState from "./hardhat-counter/HardhatCounterState";
import IncrementButton from "./anchor-counter/components/IncrementButton";

export default function ProgramsHome() {
  const wallet = useWallet();
  return (
    <>
      <div className={"flex flex-col mx-auto border rounded w-1/4 mt-4"}>
        <h2 className={" bg-white text-black w-full"}>Solana Counter</h2>
        {wallet.connected ? (
          <div className={"mx-auto"}>
            <AnchorCounterState />
            <IncrementButton />
          </div>
        ) : (
          <p> Please Connect Solana Wallet</p>
        )}
      </div>
      <h2>Ethereum Counter</h2>
      <HardhatCounterState />
    </>
  );
}
