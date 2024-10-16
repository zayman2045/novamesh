"use client";

import { useWallet } from "@solana/wallet-adapter-react";

export default function SolanaHome() {
  const { connected, publicKey } = useWallet();

  return (
    <>
      <div className="flex flex-col items-center justify-center h-[calc(100vh-4rem)] m-4 text-white">
        <div
          className={`flex flex-col items-center justify-center border-4 ${connected ? "border-custom-purple" : "border-gray-600"} rounded-md m-4 p-4 h-1/2 w-1/2 ${connected ? "bg-custom-purple" : "bg-gray-400"} bg-opacity-50 border-opacity-50`}
        >
          {connected ? (
            <button className="bg-custom-purple w-20 font-bold border border-custom-purple rounded-lg p-1 hover:scale-105">
              Swap
            </button>
          ) : (
            <>
            <h2 className="text-2xl font-bold pb-3">Mesh</h2>
            <p>Connect Wallet to Access</p>
            </>
          )}
        </div>
      </div>
    </>
  );
}
