"use client";

import NovaTokenSwap from "./NovaTokenSwap";
import { NovaTab, useNovaTab } from "./NovaTabProvider";
import { useAccount } from "wagmi";
import NovaTabButton from "./NovaTabButton";
import { useEffect } from "react";

export default function EthereumHome() {
  const { address: userAddress } = useAccount();
  const {tab: tabState, setTab} = useNovaTab();

  useEffect(() => {
    !userAddress ? setTab(NovaTab.None) : setTab(NovaTab.Swap)
  }, [userAddress])

  return (
    <>
      <div className="flex flex-col m-4 items-center justify-center h-[calc(100vh-4rem)] text-white">
        <div className="h-[55vh]">
          <div>
            <NovaTabButton tabValue={NovaTab.Swap}/>
            <NovaTabButton tabValue={NovaTab.Pool}/>
            <NovaTabButton tabValue={NovaTab.Send}/>
            <NovaTabButton tabValue={NovaTab.NFTs}/>
          </div>
          {userAddress &&  tabState == NovaTab.Swap && <NovaTokenSwap />}
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
