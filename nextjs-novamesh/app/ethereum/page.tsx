"use client";

import EthereumWallet from "./EthereumWallet";
import NovaTokenMint from "./NovaTokenMint";
import NovaNftMint from "./NovaNftMint";

export default function EthereumHome() {
  return (
    <>
      <div className="flex flex-col m-4 items-center text-white pt-[4rem]">
        <EthereumWallet />
        <NovaTokenMint />
        <NovaNftMint />
      </div>
    </>
  );
}
