"use client";

import SolanaConnectButton from "../(connection)/SolanaConnectButton";
import { useWallet } from "@solana/wallet-adapter-react";

export default function SolanaHome() {
  const { connected, publicKey } = useWallet();

  return (
    <>
      <div className="flex flex-col items-center m-4 pt-[4rem] text-white">
        <div className="flex flex-col items-center border-4 border-custom-purple rounded-md m-4 p-4 w-1/2 bg-custom-purple bg-opacity-50 border-opacity-50">
          <h1 className="text-2xl font-bold pb-3">Solana Wallet</h1>
          <SolanaConnectButton />
        </div>
        <div
          className={`flex flex-col items-center border-4 ${connected ? "border-custom-purple" : "border-gray-600"} rounded-md m-4 p-4 w-1/2 ${connected ? "bg-custom-purple" : "bg-gray-400"} bg-opacity-50 border-opacity-50`}
        >
          <h2 className="text-2xl pb-3 font-bold">Mesh Tokens</h2>
          {connected ? (
            <button className="bg-custom-purple w-20 font-bold border border-custom-purple rounded-lg p p-1 hover:scale-105">
              Mint
            </button>
          ) : (
            <p>Connect Wallet to Access</p>
          )}
        </div>
        <div
          className={`flex flex-col items-center border-4 ${connected ? "border-custom-purple" : "border-gray-600"} rounded-md m-4 p-4 w-1/2 ${connected ? "bg-custom-purple" : "bg-gray-400"} bg-opacity-50 border-opacity-50`}
        >
          <h2 className="text-2xl font-bold pb-3">Mesh NFTs</h2>
          {connected ? (
            <button className="bg-custom-purple w-20 font-bold border border-custom-purple rounded-lg p-1 hover:scale-105">
              Mint
            </button>
          ) : (
            <p>Connect Wallet to Access</p>
          )}
        </div>
      </div>
    </>
  );
}
