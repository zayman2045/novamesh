import SolanaConnectButton from "../components/SolanaConnectButton";

export default function SolanaHome() {
  return (
    <>
      <div className="flex flex-col items-center">
        <h1>Solana Home</h1>
        <SolanaConnectButton />
      </div>
      <h2>Mint Mesh Tokens</h2>
      <h2>Mint Mesh NFTs</h2>
    </>
  );
}
