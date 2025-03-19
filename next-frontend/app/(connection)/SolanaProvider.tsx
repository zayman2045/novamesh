"use client";
import { useMemo, ReactNode } from "react";
import {
  ConnectionProvider,
  WalletProvider,
} from "@solana/wallet-adapter-react";
import { WalletAdapterNetwork } from "@solana/wallet-adapter-base";
import { WalletModalProvider } from "@solana/wallet-adapter-react-ui";
import { clusterApiUrl } from "@solana/web3.js";
import "@solana/wallet-adapter-react-ui/styles.css";

interface SolanaProviderProps {
  children: ReactNode; // The children of the component
}

export const SolanaProvider: React.FC<SolanaProviderProps> = ({ children }) => {
  // Set the network to Devnet
  const network = WalletAdapterNetwork.Devnet;

  // Set the endpoint to the cluster API URL
  const endpoint = useMemo(() => clusterApiUrl(network), [network]);

  // Create an array of wallets
  const wallets = useMemo(() => [], [network]);

  return (
    <ConnectionProvider endpoint={endpoint}>
      <WalletProvider wallets={wallets} autoConnect>
        <WalletModalProvider>{children}</WalletModalProvider>
      </WalletProvider>
    </ConnectionProvider>
  );
};
