import EthereumConnectButton from "../components/EthereumConnectButton";

export default function EthereumHome() {
  return (
    <>
      <div className="flex flex-col items-center">
        <h1>Ethereum Home</h1>
        <EthereumConnectButton />
      </div>
      <div>
        <h2>Mint Nova Tokens</h2>
      </div>
      <div>
        <h2>Mint Nova NFTs</h2>
      </div>
    </>
  );
}
