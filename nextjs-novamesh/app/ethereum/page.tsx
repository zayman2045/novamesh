"use client";

import NovaTokenMint from "./NovaTokenMint";
import { useAccount } from "wagmi";


export default function EthereumHome() {
  const { address: userAddress } = useAccount();

  return (
    <>
      <div className="flex flex-col m-4 items-center justify-center h-[calc(100vh-4rem)] text-white">
        <div className="h-[55vh]">
          <div>
            <button className={`rounded-2xl py-1 px-2 mx-2 my-1 ${userAddress ? "hover:bg-blue-400" : "disabled"}`}>Swap</button>
            <button className="rounded-2xl py-1 px-2 mx-2 my-1">Pool</button>
            <button className="rounded-2xl py-1 px-2 mx-2 my-1">Send</button>
            <button className="rounded-2xl py-1 px-2 mx-2 my-1">NFTs</button>
          </div>
          <NovaTokenMint />
        </div>
      </div>
    </>
  );
}
