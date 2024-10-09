import React from "react";
import { NovaTab, useNovaTab } from "./NovaTabProvider";
import { useAccount } from "wagmi";

interface NovaTabButtonProps {
  tabValue: NovaTab; // The value of the tab
}

const NovaTabButton: React.FC<NovaTabButtonProps> = ({ tabValue }) => {
  // Get the current tab and the function to set the tab
  const { tab: tabState, setTab } = useNovaTab();

  // Get the user's address
  const { address: userAddress } = useAccount();

  const handleClick = () => {
    // Set the tab to the clicked tab
    if (userAddress) {
      setTab(tabValue);
    }
  };

  return (
    <button
      onClick={handleClick}
      className={`rounded-2xl py-1 px-2 mx-2 my-1 ${tabValue === tabState && "bg-blue-400"} ${userAddress && "hover:scale-110"}`}
    >
      {tabValue}
    </button>
  );
};

export default NovaTabButton;
