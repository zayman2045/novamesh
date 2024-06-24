import SolanaConnectButton from "../components/SolanaConnectButton";

export default function SolanaHome() {
  return (
    <>
      <div className="flex flex-col items-center m-4">
        <div className="flex flex-col items-center border border-custom-purple m-4 p-4 w-3/5">
          <h1>Connect A Solana Wallet</h1>
          <SolanaConnectButton />
        </div>
        <div className="flex justify-center border border-custom-purple w-3/5 m-4 p-4">
          <h2>Mint Mesh Tokens</h2>
        </div>
        <div className="flex justify-center border border-custom-purple w-3/5 m-4 p-4">
          <h2>Mint Mesh NFTs</h2>
        </div>
      </div>
    </>
  );
}
