import { program } from "../setup";
import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import { useState } from "react";

const IncrementButton = () => {
  const { publicKey, sendTransaction } = useWallet();
  const { connection } = useConnection();
  const [isLoading, setIsLoading] = useState(false);

  const onClick = async () => {
    if (!publicKey) return;

    setIsLoading(true);

    try {
      const transaction = await program.methods.increment().transaction();
      const transactionSignature = await sendTransaction(
        transaction,
        connection
      );
    } catch (error) {
      console.log(error);
    } finally {
        setIsLoading(false);
      }
  };

  return (
    <>
      <button className="w-24 border border-white rounded p-1 mb-2" onClick={onClick} disabled={!publicKey}>
        {isLoading ? "Loading" : "Increment"}
      </button>
    </>
  );
};

export default IncrementButton;
