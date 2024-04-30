"use client";

import { useWallet } from "@solana/wallet-adapter-react";

export default function ProgramsHome() {
  const wallet = useWallet();
  return (
    <>
      <div className={"flex flex-col mx-auto border w-1/2 mt-4"}>
        <h2 className={"mx-auto"}>Solana Counter</h2>
        {wallet.connected ? (
          <p> Wallet Connected </p>
        ) : (
          <p> Please Connect Wallet</p>
        )}
      </div>
      <h2>Ethereum Counter</h2>
    </>
  );
}
