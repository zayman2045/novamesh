"use client";

import { useEthereum } from "./EthereumProvider";
import { ethers } from "ethers";

export default function EthereumConnectButton() {
  const ethereum = useEthereum();
  let provider: ethers.BrowserProvider | null = null,
    signer: ethers.JsonRpcSigner | null = null,
    connect: () => Promise<void>;

  if (ethereum !== null) {
    ({ provider, signer, connect } = ethereum);
    console.log(provider, signer);
  }

  const connectWallet = async () => {
    if (ethereum) {
      await connect();
    }
  };

  return (
    <div className="w-[175px]">
      <h2 className={"text-center"}>Ethereum Wallet</h2>
      {signer ? (
        <button
          onClick={() => {}}
          className={
            "text-base font-semibold h-12 leading-none px-6 rounded font-custom-solana bg-blue-600"
          }
        >
          Wallet Connected
        </button>
      ) : (
        <button
          onClick={connectWallet}
          className={
            "text-base font-semibold h-12 leading-none px-6 rounded font-custom-solana bg-blue-600"
          }
        >
          Select Wallet
        </button>
      )}
    </div>
  );
}
