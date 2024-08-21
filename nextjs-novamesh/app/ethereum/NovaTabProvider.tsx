"use client";

import React, { createContext, useContext, useState } from "react";

export enum NovaTab {
  None,
  Swap = "Swap",
  Pool = "Pool",
  Send = "Send",
  NFTs = "NFTs",
}

interface NovaTabContextType {
  tab: NovaTab;
  setTab: (tab: NovaTab) => void;
}

const NovaTabContext = createContext<NovaTabContextType | undefined>(undefined);

export const NovaTabProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [tab, setTab] = useState(NovaTab.None);

  return (
    <NovaTabContext.Provider value={{ tab, setTab }}>
      {children}
    </NovaTabContext.Provider>
  );
};

export const useNovaTab = () => {
  const context = useContext(NovaTabContext);
  if (!context) {
    throw new Error(
      "the useNovaTab hook must be used within a NovaTabProvider component"
    );
  }
  return context;
};
