import { useEthereum } from "./EthereumProvider";
import { ethers } from "ethers";

export default function EthereumConnectButton() {
  const ethereum = useEthereum();
  let provider: ethers.BrowserProvider | null = null,
    signer: ethers.JsonRpcSigner | null = null;

  if (ethereum !== null) {
    ({ provider, signer } = ethereum);
    console.log(provider, signer);
  }
  if (ethereum !== null) {
    ({ provider, signer } = ethereum);
    console.log(provider, signer);
  }

  const connectWallet = async () => {
    if (provider === null) {
      console.error("Provider is null");
      return;
    }

    try {
      const accounts = await provider.send("eth_requestAccounts", []);
      console.log("Connected account:", accounts[0]);
    } catch (error) {
      console.error("Error connecting to wallet:", error);
    }
  };

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
