import SolanaConnectButton from "../components/SolanaConnectButton";

export default function SolanaHome() {
  return (
    <>
      <div className="flex flex-col items-center m-4">
        <div className="flex flex-col items-center border-4 border-custom-purple rounded-md m-4 p-4 w-3/5">
          <h1>Connect A Solana Wallet</h1>
          <SolanaConnectButton />
        </div>
        <div className="flex justify-center border-4 border-custom-purple rounded-md w-3/5 m-4 p-4">
          <h2>Mesh Tokens</h2>
        </div>
        <div className="flex justify-center border-4 border-custom-purple rounded-md w-3/5 m-4 p-4">
          <h2>Mesh NFTs</h2>
        </div>
      </div>
    </>
  );
}
