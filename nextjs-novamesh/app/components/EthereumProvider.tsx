"use client";

import {
  FC,
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import { ethers } from "ethers";

declare global {
  interface Window {
    ethereum: any;
  }
}

interface EthereumContextType {
  provider: ethers.BrowserProvider | null;
  signer: ethers.JsonRpcSigner | null;
  connect: () => Promise<void>;
}

const EthereumContext = createContext<EthereumContextType | null>(null);

export function useEthereum() {
  return useContext(EthereumContext);
}

interface EthereumProviderProps {
  children: ReactNode;
}

export const EthereumProvider: FC<EthereumProviderProps> = ({ children }) => {
  const [provider, setProvider] = useState<ethers.BrowserProvider | null>(null);
  const [signer, setSigner] = useState<ethers.JsonRpcSigner | null>(null);

  const connect = async () => {
    if (window.ethereum) {
      const newProvider = new ethers.BrowserProvider(window.ethereum);
      setProvider(newProvider);
      const newSigner = await newProvider.getSigner();
      setSigner(newSigner);
    }
  };

  useEffect(() => {
    if (
      window.ethereum &&
      window.ethereum.request({ method: "eth_accounts" })
    ) {
      connect();
    }
  }, []);

  return (
    <EthereumContext.Provider value={{ provider, signer, connect }}>
      {children}
    </EthereumContext.Provider>
  );
};
