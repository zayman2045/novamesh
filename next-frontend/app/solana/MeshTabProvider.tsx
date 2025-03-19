"use client";

import React, { useState, useContext, createContext } from "react";

// Represents the different tabs in the Mesh app
export enum MeshTab {
  None,
  Swap = "Swap",
  Send = "Send",
  NFTs = "NFTs",
}

interface MeshTabContextType {
  tab: MeshTab; // The current tab
  setTab: (tab: MeshTab) => void; // A function to set the current tab
}

// Create a the context for the Mesh tab
const MeshTabContext = createContext<MeshTabContextType | undefined>(undefined);

export function MeshTabProvider({ children }: { children: React.ReactNode }) {
  // Set the default tab to None
  const [tab, setTab] = useState(MeshTab.None);

  return (
    <MeshTabContext.Provider value={{ tab, setTab }}>
      {children}
    </MeshTabContext.Provider>
  );
}

// A hook to access the Mesh tab context
export function useMeshTab() {
  const context = useContext(MeshTabContext);
  if (!context) {
    throw new Error(
      "the useMeshTab hook must be used within a MeshTabProvider component"
    );
  }
  return context;
}
