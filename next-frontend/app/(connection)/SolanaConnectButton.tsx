"use client";

import { useState, useEffect } from "react";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";

export default function SolanaConnectButton() {
  // Check if the component is being rendered on the client
  const [isClient, setIsClient] = useState(false);

  // Set isClient to true when the component is mounted
  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <div>
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
