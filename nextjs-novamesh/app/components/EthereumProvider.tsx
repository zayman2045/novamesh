"use client"

import {
  FC,
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import { ethers } from "ethers";

// Extend the global Window interface to include the ethereum property
declare global {
  interface Window {
    ethereum: any;
  }
}

// Define the Ethereum context type
interface EthereumContextType {
  provider: ethers.BrowserProvider | null;
  signer: ethers.JsonRpcSigner | null;
}

// Create Ethereum context with initial null value
const EthereumContext = createContext<EthereumContextType | null>(null);

// Custom hook for accessing Ethereum context
export function useEthereum() {
  return useContext(EthereumContext);
}

// Props type for EthereumProvider component
interface EthereumProviderProps {
  children: ReactNode;
}

// EthereumProvider component to manage Ethereum-related state
export const EthereumProvider: FC<EthereumProviderProps> = ({ children }) => {
  const [provider, setProvider] = useState<ethers.BrowserProvider | null>(null);
  const [signer, setSigner] = useState<ethers.JsonRpcSigner | null>(null);

  // Initialize provider and signer when the component mounts
  useEffect(() => {
    if (window.ethereum) {
      console.log(provider, signer)
      const newProvider = new ethers.BrowserProvider(window.ethereum);
      setProvider(newProvider);
      newProvider.getSigner().then(setSigner);
    }
  }, []);

  // Provide the Ethereum context to child components
  return (
    <EthereumContext.Provider value={{ provider, signer }}>
      {children}
    </EthereumContext.Provider>
  );
};
