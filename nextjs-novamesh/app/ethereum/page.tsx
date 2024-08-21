"use client";

import NovaTokenSwap from "./NovaTokenSwap";
import { NovaTab, useNovaTab } from "./NovaTabProvider";
import { useAccount } from "wagmi";

export default function EthereumHome() {
  const { address: userAddress } = useAccount();
  const {tab} = useNovaTab();

  return (
    <>
      <div className="flex flex-col m-4 items-center justify-center h-[calc(100vh-4rem)] text-white">
        <div className="h-[55vh]">
          <div>
            <button
              className={`rounded-2xl py-1 px-2 mx-2 my-1 ${userAddress ? "hover:bg-blue-400" : "disabled"}`}
            >
              Swap
            </button>
            <button className="rounded-2xl py-1 px-2 mx-2 my-1">Pool</button>
            <button className="rounded-2xl py-1 px-2 mx-2 my-1">Send</button>
            <button className="rounded-2xl py-1 px-2 mx-2 my-1">NFTs</button>
          </div>
          {userAddress &&  tab == NovaTab.Swap && <NovaTokenSwap />}
          {!userAddress && (
            <div className="flex flex-col border-4 bg-opacity-50 border-gray-600 bg-gray-400 border-opacity-50 rounded-md items-center justify-center h-[50vh] w-[50vw] p-4">
              <h2 className="text-2xl pb-3 font-bold">NOVA</h2>
              <p>Connect Wallet to Access</p>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
