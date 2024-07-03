import { useAccount } from "wagmi";

export default function NovaTokenMint() {
  const { address } = useAccount();
  return (
    <>
      <div
        className={`flex flex-col border-4 ${address ? "border-custom-blue" : "border-gray-600"} rounded-md items-center w-3/5 p-4 m-4 ${address ? "bg-blue-400" : "bg-gray-400"}`}
      >
        <h2 className="text-2xl pb-3 font-bold">Nova Tokens</h2>
        {address ? <h3 className="mb-3">Current Balance:</h3> : <div></div>}
        {address ? <button
          className="bg-custom-blue p-1 border border-custom-blue rounded-lg w-20 font-bold hover:scale-105"
          disabled
        >
          Mint
        </button> : <p>Connect Wallet to Access</p>}
        
      </div>
    </>
  );
}
