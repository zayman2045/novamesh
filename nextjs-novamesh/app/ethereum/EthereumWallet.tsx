import EthereumConnectButton from "../components/EthereumConnectButton";

export default function EthereumWallet() {
  return (
    <>
      <div className="flex flex-col items-center border-4 border-custom-blue rounded-md w-3/5 p-4 m-4 bg-blue-400">
        <h1 className="text-2xl pb-3 font-bold">Ethereum Wallet</h1>
        <EthereumConnectButton />
      </div>
    </>
  );
}
