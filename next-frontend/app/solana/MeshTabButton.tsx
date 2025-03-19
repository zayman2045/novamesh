import React from "react";
import { MeshTab, useMeshTab } from "./MeshTabProvider";
import { useWallet } from "@solana/wallet-adapter-react";

interface MeshTabButtonProps {
  tabValue: MeshTab; // The value of the tab
}

const MeshTabButton: React.FC<MeshTabButtonProps> = ({ tabValue }) => {
  // Get the current tab and the function to set the tab
  const { tab: tabState, setTab } = useMeshTab();

  // Get the user's address
  const { connected, publicKey } = useWallet();

  const handleClick = () => {
    // Set the tab to the clicked tab
    if (connected) {
      setTab(tabValue);
    }
  };

  return (
    <button
      onClick={handleClick}
      className={`rounded-2xl py-1 px-2 mx-2 my-1 ${tabValue === tabState && "bg-custom-purple"} ${connected && "hover:scale-110"}`}
    >
      {tabValue}
    </button>
  );
};

export default MeshTabButton;
