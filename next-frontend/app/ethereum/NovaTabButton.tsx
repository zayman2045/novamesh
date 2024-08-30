import React from "react";
import { NovaTab, useNovaTab } from "./NovaTabProvider";
import { useAccount } from "wagmi";

interface NovaTabButtonProps {
  tabValue: NovaTab;
}

const NovaTabButton: React.FC<NovaTabButtonProps> = ({ tabValue }) => {
  const { tab: tabState, setTab } = useNovaTab();
  const { address: userAddress } = useAccount();

  const handleClick = () => {
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
