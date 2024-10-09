"use client";

import React, { createContext, useContext, useState } from "react";

// Represents the different tabs in the Nova app
export enum NovaTab {
  None,
  Swap = "Swap",
  Send = "Send",
  NFTs = "NFTs",
}

interface NovaTabContextType {
  tab: NovaTab; // The current tab
  setTab: (tab: NovaTab) => void; // A function to set the current tab
}

// Create a the context for the Nova tab
const NovaTabContext = createContext<NovaTabContextType | undefined>(undefined);

export const NovaTabProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  // Set the default tab to None
  const [tab, setTab] = useState(NovaTab.None);

  return (
    <NovaTabContext.Provider value={{ tab, setTab }}>
      {children}
    </NovaTabContext.Provider>
  );
};

// A hook to access the Nova tab context
export const useNovaTab = () => {
  const context = useContext(NovaTabContext);
  if (!context) {
    throw new Error(
      "the useNovaTab hook must be used within a NovaTabProvider component"
    );
  }
  return context;
};
