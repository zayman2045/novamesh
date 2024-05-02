"use client";

import { useState, useEffect } from "react";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";

export default function SolanaConnectButton() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <div className="w-[175px]">
      <h2 className={"text-center"}>Solana Wallet</h2>
      {isClient ? (
        <WalletMultiButton />
      ) : (
        <button
          className={
            "text-base font-semibold h-12 leading-none px-6 rounded bg-custom-purple font-custom-solana"
          }
        >
          Select Wallet
        </button>
      )}
    </div>
  );
}
