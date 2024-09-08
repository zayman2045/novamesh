import { useAccount, useBalance } from "wagmi";
import { useState } from "react";
import { sepolia } from "wagmi/chains";
import {
  useReadNovaTokenBalanceOf,
  useWriteNovaTokenMintTokens,
} from "@/src/generated";
import { parseEther } from "viem";
import { useReadEthUsdPriceConverterGetLatestPrice } from "@/src/generated";

export default function NovaSwap() {
  // Get the user's address
  const { address: userAddress } = useAccount();

  // Get the latest ETH price in USD
  const { data: ethUsdPriceData } = useReadEthUsdPriceConverterGetLatestPrice();
  const ethUsdPrice = (Number(ethUsdPriceData || 0) / 10 ** 18).toFixed(2);

  // Get the ETH balance of the user;
  const { data: userEthBalanceData } = useBalance({
    address: userAddress,
    chainId: sepolia.id,
  });

  // Check if userEthBalance is defined before converting to a number
  const userEthBalance =
    userEthBalanceData !== undefined
      ? (Number(userEthBalanceData.value) / 10 ** 18).toPrecision(4)
      : 0;

  // Get the NOVA balance of the user
  const { data: userNovaBalanceData } = useReadNovaTokenBalanceOf({
    args: [userAddress!],
  });

  // Check if userNovaBalance is defined before converting to a number
  const userNovaBalance =
    userNovaBalanceData !== undefined
      ? (Number(userNovaBalanceData) / 10 ** 18).toPrecision(4)
      : 0;

  // Destructure the returned values from the useWriteNovaTokenMintTokens hook
  const {
    data: hash, // The transaction hash of the minting operation
    writeContract: mintTokens,
    status, // Function to call the mintTokens method on the contract
  } = useWriteNovaTokenMintTokens();

  // Define message state
  const [message, setMessage] = useState("Swap");

  // Define the ETH input value and the ETH value in USD
  const [ethValue, setEthValue] = useState("");
  const [ethUsdValue, setEthUsdValue] = useState("");

  // Define the NOVA input value and the NOVA value in USD
  const [novaValue, setNovaValue] = useState("");
  const [novaUsdValue, setNovaUsdValue] = useState("");

  // Define a regular expression to validate the input values
  const regex = /^\d*\.?\d*$/;

  // Handle the change event of the ETH input field
  const handleEthChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const currentEthValue = e.target.value;
    if (regex.test(currentEthValue)) {
      setEthValue(currentEthValue);

      // Validate the input value
      if (
        currentEthValue === "." ||
        currentEthValue === "" ||
        Number(currentEthValue) === 0
      ) {
        setMessage("Enter an amount");
        setNovaValue("");
        setNovaUsdValue("");
        setEthUsdValue("");
        return;
      }

      
      // Calculate the NOVA value
      const conversionRate = 1; // 1 ETH = 1 NOVA
      const calculatedNovaValue = (Number(currentEthValue) * conversionRate).toPrecision(4);
      setNovaValue(calculatedNovaValue);
      
      // Calculate the ETH & NOVA values in USD
      setEthUsdValue(`$${(Number(currentEthValue) * Number(ethUsdPrice)).toFixed(2)}`);
      setNovaUsdValue(`$${(Number(calculatedNovaValue) * Number(ethUsdPrice)).toFixed(2)}`);

      // Validate the input value
      if (Number(currentEthValue) > Number(userEthBalance)) {
        setMessage("Insufficient ETH Balance");
      } else {
        setMessage("Swap");
      }
    }
  };

  // Handle the change event of the NOVA input field
  const handleNovaChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const currentNovaValue = e.target.value;
    if (regex.test(currentNovaValue)) {
      setNovaValue(currentNovaValue);

      // Validate the input value
      if (
        currentNovaValue === "." ||
        currentNovaValue === "" ||
        Number(currentNovaValue) === 0
      ) {
        setMessage("Enter an amount");
        setEthValue("");
        setEthUsdValue("");
        setNovaUsdValue("");
        return;
      }

      // Calculate the ETH value
      const conversionRate = 1; // 1 NOVA = 1 ETH
      const calculatedEthValue = (Number(currentNovaValue) * conversionRate).toPrecision(4);
      setEthValue(calculatedEthValue);

      // Calculate the ETH and NOVA values in USD
      setNovaUsdValue(`$${(Number(currentNovaValue) * Number(ethUsdPrice)).toFixed(2)}`);
      setEthUsdValue(`$${(Number(calculatedEthValue) * Number(ethUsdPrice)).toFixed(2)}`);

      // Validate the input value
      if (Number(calculatedEthValue) > Number(userEthBalance)) {
        setMessage("Insufficient ETH Balance");
      } else {
        setMessage("Swap");
      }
    }
  };

  // Mint Nova tokens to the user when the form is submitted
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const novaTokenAmount = formData.get("ethAmount") as string;
    mintTokens({ value: parseEther(novaTokenAmount) });
  };

  // Get the status of the transaction
  const getStatus = (status: string) => {
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
    <>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-2 items-center justify-center h-[50vh] w-[50vw]"
      >
        <div className="border-4 bg-opacity-50 border-opacity-50 border-custom-blue bg-blue-400 rounded-3xl h-2/5 w-full p-3">
          <h3>Sell</h3>
          <input
            name="ethAmount"
            type="text"
            className={`text-white mr-3 bg-transparent rounded-3xl w-3/4 h-1/2 p-1 text-left text-3xl outline-none shadow-none placeholder:text-white`}
            placeholder="0"
            required
            onChange={handleEthChange}
            value={ethValue}
          ></input>
          <div className="flex justify-between">
            <p>{ethUsdValue}</p>
            <p>ETH Balance: {userEthBalance.toString()}</p>
          </div>
        </div>
        <div className="border-4 bg-opacity-50 border-opacity-50 border-custom-blue bg-blue-400 rounded-3xl h-2/5 w-full p-3">
          <h3>Buy</h3>
          <input
            name="novaAmount"
            type="text"
            className={`text-white mr-3 bg-transparent rounded-3xl w-3/4 h-1/2 p-1 text-left text-3xl outline-none shadow-none placeholder:text-white`}
            placeholder="0"
            required
            onChange={handleNovaChange}
            value={novaValue}
          ></input>
          <div className="flex justify-between">
            <p>{novaUsdValue}</p>
            <p>NOVA Balance: {userNovaBalance.toString()}</p>
          </div>
        </div>
        <button
          type="submit"
          className={`bg-blue-500 bg-opacity-75 p-1 border-2 border-custom-blue rounded-3xl w-full h-1/5 font-bold hover:scale-105 ${message == "Insufficient ETH Balance" && "bg-red-500 border-red-500"} ${message == "Enter an amount" && "bg-opacity-50 border-gray-600 bg-gray-400 border-opacity-50"}`}
          disabled={message != "Swap"}
        >
          {message}
        </button>
      </form>
      <div className={"w-full mt-3 flex flex-col items-center"}>
        <p>{getStatus(status)}</p>
        {hash && (
          <button
            className={`bg-custom-blue p-1 border border-custom-blue rounded-lg w-1/2 font-bold hover:scale-105`}
            onClick={() =>
              window.open(
                `https://sepolia.etherscan.io/tx/${hash}`,
                "_blank",
                "noopener,noreferrer"
              )
            }
          >
            View Transaction
          </button>
        )}
      </div>
    </>
  );
}
