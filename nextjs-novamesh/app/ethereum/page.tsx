"use client";

import EthereumWallet from "./EthereumWallet";
import NovaTokenMint from "./NovaTokenMint";
import NovaNftMint from "./NovaNftMint";

export default function EthereumHome() {
  return (
    <>
      <div className="flex flex-col m-4 items-center text-white">
        <EthereumWallet />
        <NovaTokenMint />
        <NovaNftMint />
      </div>
    </>
  );
}
