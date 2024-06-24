import EthereumConnectButton from "../components/EthereumConnectButton";

export default function EthereumHome() {
  return (
    <>
      <div className="flex flex-col m-4 items-center">
        <div className="flex flex-col items-center border border-blue-500 w-3/5 p-4 m-4">
          <h1>Connect An Ethereum Wallet</h1>
          <EthereumConnectButton />
        </div>
        <div className="flex border border-blue-500 justify-center w-3/5 p-4 m-4">
          <h2>Mint Nova Tokens</h2>
        </div>
        <div className="flex border border-blue-500 justify-center w-3/5 p-4 m-4">
          <h2>Mint Nova NFTs</h2>
        </div>
      </div>
    </>
  );
}
