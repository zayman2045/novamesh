import { useAccount } from "wagmi";
import {
  useReadNovaTokenBalanceOf,
  useWriteNovaTokenMintTokens,
} from "@/src/generated";
import { parseEther, parseUnits } from "viem";

export default function NovaTokenMint() {
  const { address: userAddress } = useAccount();

  // Get the Nova balance of the user
  const { data: userNovaBalance } = useReadNovaTokenBalanceOf({
    args: [userAddress!],
  });

  //
  const {
    data: hash,
    writeContract: mintTokens,
    error,
  } = useWriteNovaTokenMintTokens();

  // Mint Nova tokens to the user
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const novaTokenAmount = formData.get("novaTokenAmount") as string;
    mintTokens({ value: parseUnits(novaTokenAmount, 0) });
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
                Nova Balance: {userNovaBalance?.toString()}
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
              {hash && <div>Transaction Hash: {hash}</div>}
            </form>
          </>
        ) : (
          <p>Connect Wallet to Access</p>
        )}
      </div>
    </>
  );
}
