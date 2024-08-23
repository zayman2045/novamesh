import { useAccount, useBalance } from "wagmi";
import { useState } from "react";
import { sepolia } from "wagmi/chains";
import {
  useReadNovaTokenBalanceOf,
  useWriteNovaTokenMintTokens,
} from "@/src/generated";
import { parseEther } from "viem";

export default function NovaSwap() {
  // Get the user's address
  const { address: userAddress } = useAccount();

  // Get the ETH balance of the user;
  const { data: userEthBalanceData } = useBalance({
    address: userAddress,
    chainId: sepolia.id,
  });

  // Check if userEthBalance is defined before converting to a number
  const userEthBalance =
    userEthBalanceData !== undefined
      ? (Number(userEthBalanceData.value) / 10 ** 18).toFixed(4)
      : 0;

  // Get the NOVA balance of the user
  const { data: userNovaBalanceData } = useReadNovaTokenBalanceOf({
    args: [userAddress!],
  });

  // Check if userNovaBalance is defined before converting to a number
  const userNovaBalance =
    userNovaBalanceData !== undefined
      ? (Number(userNovaBalanceData) / 10 ** 18).toFixed(4)
      : 0;

  // Destructure the returned values from the useWriteNovaTokenMintTokens hook
  const {
    data: hash, // The transaction hash of the minting operation
    writeContract: mintTokens,
    status, // Function to call the mintTokens method on the contract
  } = useWriteNovaTokenMintTokens();

  // Define message state
  const [message, setMessage] = useState("");

  // Mint Nova tokens to the user when the form is submitted
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const novaTokenAmount = formData.get("novaTokenAmount") as string;
    if (Number(novaTokenAmount) > Number(userEthBalance)) {
      setMessage("Insufficient Eth Balance");
      return;
    } else {
      setMessage("");
      mintTokens({ value: parseEther(novaTokenAmount) });
    }
  };

  const getStatusMessage = (status: string) => {
    switch (status) {
      case "pending":
        return "Processing transaction...";
      case "error":
        return "Error minting tokens";
      case "success":
        return "Tokens minted successfully";
      case "idle":
        return null;
      default:
        return null;
    }
  };

  return (
    <div className="flex flex-col border-4 bg-opacity-50 border-opacity-50 rounded-md items-center justify-center h-[50vh] w-[50vw] p-4  border-custom-blue bg-blue-400">
      <div>
        <h3 className="mb-3">Nova Balance: {userNovaBalance.toString()}</h3>
        <h3>Eth Balance: {userEthBalance.toString()}</h3>
      </div>
      <form onSubmit={handleSubmit}>
        <input
          name="novaTokenAmount"
          type="text"
          className="text-black mr-3 text-right"
          placeholder="0"
          required
        ></input>
        <button
          type="submit"
          className="bg-custom-blue p-1 border border-custom-blue rounded-lg w-20 font-bold hover:scale-105"
        >
          Mint
        </button>
      </form>
      <div>{message}</div>
      <div>
        {hash && (
          <a
            href={`https://sepolia.etherscan.io/tx/${hash}`}
            target="_blank"
            rel="noreferrer"
          >
            View Transaction
          </a>
        )}
      </div>
      <div>{getStatusMessage(status)}</div>
    </div>
  );
}
