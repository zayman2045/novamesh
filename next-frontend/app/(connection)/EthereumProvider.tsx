"use client";

import "@rainbow-me/rainbowkit/styles.css";
import { RainbowKitProvider, getDefaultConfig } from "@rainbow-me/rainbowkit";
import { WagmiProvider } from "wagmi";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { FC, ReactNode } from "react";
import { mainnet, sepolia } from "wagmi/chains";

// Create a new QueryClient instance
const queryClient = new QueryClient();

interface EthereumProviderProps {
  children: ReactNode; // The children of the component
  projectId: string; // The Wallet Connect project ID
}

const EthereumProvider: FC<EthereumProviderProps> = ({ children, projectId }) => {
  const config = getDefaultConfig({
    appName: "NovaMesh", // Set the app name
    projectId, // Set the Wallet Connect project ID
    chains: [mainnet, sepolia], // Add the mainnet and sepolia chains
    ssr: true, // Enable server-side rendering
  });

  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <RainbowKitProvider>{children}</RainbowKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  );
};

export default EthereumProvider;

