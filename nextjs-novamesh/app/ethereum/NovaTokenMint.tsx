import { useAccount } from "wagmi";
import {
  novaExchangeAddress,
  useReadNovaExchangeNovaToken,
  useReadErc20BalanceOf,
  useWriteNovaExchangeBuyTokens
} from "@/src/generated";

export default function NovaTokenMint() {
  const { address: userAddress } = useAccount();
  const { data: novaToken } = useReadNovaExchangeNovaToken();
  const x = useWriteNovaExchangeBuyTokens();
  
  // Get the NOVA balance of the user
  const { data: userNovaBalance } = useReadErc20BalanceOf({
    address: novaToken,
    args: [userAddress!],
  });

  // Get the NOVA Balance of the Exchange
  const { data: exchangeNovaBalance } = useReadErc20BalanceOf({
    address: novaToken,
    args: [novaExchangeAddress[11155111]],
  });
  

  return (
    <>
      <div
        className={`flex flex-col border-4 bg-opacity-50 border-opacity-50 ${userAddress ? "border-custom-blue" : "border-gray-600"} rounded-md items-center w-1/2 p-4 m-4 ${userAddress ? "bg-blue-400" : "bg-gray-400"}`}
      >
        <h2 className="text-2xl pb-3 font-bold">Nova Tokens</h2>
        {userAddress && (
          <div>
            <h3 className="mb-3">Nova Token Address: {novaToken} </h3>
            <h3 className="mb-3">User Nova Balance: {userNovaBalance?.toString()}</h3>
            <h3 className="mb-3">Exchange Nova Balance: {exchangeNovaBalance?.toString()}</h3>

          </div>
        )}
        {userAddress ? (
          <button
            className="bg-custom-blue p-1 border border-custom-blue rounded-lg w-20 font-bold hover:scale-105"
            disabled
          >
            Mint
          </button>
        ) : (
          <p>Connect Wallet to Access</p>
        )}
      </div>
    </>
  );
}
