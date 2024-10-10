"use client";

import { useWallet } from "@solana/wallet-adapter-react";
import MeshSwap from "./MeshSwap";
import MeshTabButton from "./MeshTabButton";
import { MeshTab, useMeshTab } from "./MeshTabProvider";
import { useEffect } from "react";

export default function SolanaHome() {
  // Get the browser wallet
  const { connected, publicKey } = useWallet();

  // Get the current tab and the function to set the tab
  const { tab: tabState, setTab } = useMeshTab();

  useEffect(() => {
    // Set the tab to Swap if the user is connected
    if (connected) {
      setTab(MeshTab.Swap);
    } else {
      setTab(MeshTab.None);
    }
  }, [connected]);

  return (
    <>
      <div className="flex flex-col items-center justify-center h-[calc(100vh-4rem)] m-4 text-white">
        <div className="h-[55vh]">
          <div>
            <MeshTabButton tabValue={MeshTab.Swap} />
            <MeshTabButton tabValue={MeshTab.NFTs} />
            <MeshTabButton tabValue={MeshTab.Send} />
          </div>
          {connected && tabState == MeshTab.Swap && <MeshSwap />}
          {connected && tabState == MeshTab.Send && <MeshSwap />}
          {connected && tabState == MeshTab.NFTs && <MeshSwap />}
          {!connected && (
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
