import EthereumConnectButton from "../components/EthereumConnectButton";

export default function EthereumWallet() {
  return (
    <>
      <div className="flex flex-col items-center border-4 border-custom-blue border-opacity-50 rounded-md w-1/2 p-4 m-4 bg-blue-400 bg-opacity-50">
        <h1 className="text-2xl pb-3 font-bold">Ethereum Wallet</h1>
        <EthereumConnectButton />
      </div>
    </>
  );
}
