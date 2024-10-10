"use client";

import NovaSwap from "./NovaSwap";
import NovaNFTs from "./NovaNFTs";
import NovaSend from "./NovaSend";
import NovaTabButton from "./NovaTabButton";
import { NovaTab, useNovaTab } from "./NovaTabProvider";
import { useAccount } from "wagmi";
import { useEffect } from "react";

export default function EthereumHome() {
  // Get the user's address
  const { address: userAddress } = useAccount();

  // Get the current tab and the function to set the tab
  const { tab: tabState, setTab } = useNovaTab();

  useEffect(() => {
    !userAddress ? setTab(NovaTab.None) : setTab(NovaTab.Swap);
  }, [userAddress]);

  return (
    <>
      <div className="flex flex-col m-4 items-center justify-center h-[calc(100vh-4rem)] text-white">
        <div className="h-[55vh]">
          <div>
            <NovaTabButton tabValue={NovaTab.Swap} />
            <NovaTabButton tabValue={NovaTab.NFTs} />
            <NovaTabButton tabValue={NovaTab.Send} />
          </div>
          {userAddress && tabState == NovaTab.Swap && <NovaSwap />}
          {userAddress && tabState == NovaTab.Send && <NovaSend />}
          {userAddress && tabState == NovaTab.NFTs && <NovaNFTs />}
          {!userAddress && (
            <div className="flex flex-col border-4 bg-opacity-50 border-gray-600 bg-gray-400 border-opacity-50 rounded-3xl items-center justify-center h-[50vh] w-[50vw] p-4">
              <h2 className="text-2xl pb-3 font-bold">NOVA</h2>
              <p>Connect Wallet to Access</p>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
