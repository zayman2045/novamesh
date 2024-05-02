"use client";

import { useEthereum } from "./EthereumProvider";
import { ethers } from "ethers";

// Component for displaying a button to connect to an Ethereum wallet
export default function EthereumConnectButton() {
  // Retrieve Ethereum context with provider and signer
  const ethereum = useEthereum();
  let provider: ethers.BrowserProvider | null = null,
      signer: ethers.JsonRpcSigner | null = null;

  // Destructure provider and signer from the context if available
  if (ethereum !== null) {
    ({ provider, signer } = ethereum);
    console.log(provider, signer);
  }

  // Function to initiate connection to the user's Ethereum wallet
  const connectWallet = async () => {
    if (provider === null) {
      console.error("Provider is null");
      return;
    }

    try {
      // Request account access to the user's Ethereum wallet
      const accounts = await provider.send("eth_requestAccounts", []);
      console.log("Connected account:", accounts[0]);
    } catch (error) {
      console.error("Error connecting to wallet:", error);
    }
  };

  // Render a button to connect the wallet if no signer is available, else show connected status
  return (
    <>
      {signer ? (
        <p>Connected</p>
      ) : (
        <button onClick={connectWallet}>Connect Wallet</button>
      )}
    </>
  );
}
