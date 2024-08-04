import { useAccount } from "wagmi";
import {
  useReadNovaTokenBalanceOf,
  useWriteNovaTokenMintTokens,
} from "@/src/generated";
import { parseEther } from "viem";

export default function NovaTokenMint() {
  // Get the user's address
  const { address: userAddress } = useAccount();

  // Get the Nova balance of the user
  const { data: userNovaBalance } = useReadNovaTokenBalanceOf({
    args: [userAddress!],
  });

  // Check if userNovaBalance is defined before converting to a number
  const userNovaBalanceNumber =
    userNovaBalance !== undefined ? (Number(userNovaBalance) / 10 ** 18).toFixed(4) : 0;

  // Destructure the returned values from the useWriteNovaTokenMintTokens hook
  const {
    data: hash, // The transaction hash of the minting operation
    writeContract: mintTokens, // Function to call the mintTokens method on the contract
  } = useWriteNovaTokenMintTokens();

  // Mint Nova tokens to the user
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const novaTokenAmount = formData.get("novaTokenAmount") as string;
    mintTokens({ value: parseEther(novaTokenAmount) });
  };

  return (
    <>
      <div
        className={`flex flex-col border-4 bg-opacity-50 border-opacity-50 ${userAddress ? "border-custom-blue" : "border-gray-600"} rounded-md items-center w-1/2 p-4 m-4 ${userAddress ? "bg-blue-400" : "bg-gray-400"}`}
      >
        <h2 className="text-2xl pb-3 font-bold">Nova Tokens</h2>

        {userAddress ? (
          <>
            <div>
              <h3 className="mb-3">
                Nova Balance: {userNovaBalanceNumber.toString()}
              </h3>
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
          </>
        ) : (
          <p>Connect Wallet to Access</p>
        )}
      </div>
    </>
  );
}
