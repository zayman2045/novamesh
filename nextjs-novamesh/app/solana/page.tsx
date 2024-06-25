import SolanaConnectButton from "../components/SolanaConnectButton";

export default function SolanaHome() {
  return (
    <>
      <div className="flex flex-col items-center m-4 text-white">
        <div className="flex flex-col items-center border-4 border-custom-purple rounded-md m-4 p-4 w-3/5 bg-purple-400">
          <h1 className="text-2xl font-bold pb-3">Solana Wallet</h1>
          <SolanaConnectButton />
        </div>
        <div className="flex flex-col items-center border-4 border-custom-purple rounded-md w-3/5 m-4 p-4 bg-purple-400">
          <h2 className="text-2xl pb-3 font-bold">Mesh Tokens</h2>
          <button className="bg-custom-purple w-20 font-bold border border-custom-purple rounded-lg p p-1 hover:scale-105">Mint</button>
        </div>
        <div className="flex flex-col items-center border-4 border-custom-purple rounded-md w-3/5 m-4 p-4 bg-purple-400">
          <h2 className="text-2xl font-bold pb-3">Mesh NFTs</h2>
          <button className="bg-custom-purple w-20 font-bold border border-custom-purple rounded-lg p-1 hover:scale-105">Mint</button>
        </div>
      </div>
    </>
  );
}
