import EthereumConnectButton from "../components/EthereumConnectButton";

export default function EthereumHome() {
  return (
    <>
      <div className="flex flex-col m-4 items-center">
        <div className="flex flex-col items-center border-4 border-blue-500 rounded-md w-3/5 p-4 m-4 bg-blue-300">
          <h1 className="text-2xl">Connect An Ethereum Wallet</h1>
          <EthereumConnectButton />
        </div>
        <div className="flex flex-col border-4 border-blue-500 rounded-md items-center w-3/5 p-4 m-4">
          <h2 className="text-2xl">Nova Tokens</h2>
          <button>Mint</button>
        </div>
        <div className="flex flex-col border-4 border-blue-500 rounded-md items-center w-3/5 p-4 m-4">
          <h2 className="text-2xl">Nova NFTs</h2>
          <button className="text-white bg-blue-500 border-2 rounded-lg p-2">Mint</button>
        </div>
      </div>
    </>
  );
}
