"use client";

import "@rainbow-me/rainbowkit/styles.css";
import { RainbowKitProvider, getDefaultConfig } from "@rainbow-me/rainbowkit";
import { WagmiProvider } from "wagmi";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { FC, ReactNode } from "react";
import { mainnet, polygon, optimism, arbitrum, base } from "wagmi/chains";

const queryClient = new QueryClient();

interface EthereumProviderProps {
  children: ReactNode;
}

const EthereumProvider: FC<EthereumProviderProps> = ({ children }) => {
  const projectId = process.env.NEXT_PUBLIC_WALLET_CONNECT_PROJECT_ID!;

  const config = getDefaultConfig({
    appName: "NovaMesh",
    projectId,
    chains: [mainnet, polygon, optimism, arbitrum, base],
    ssr: true,
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
