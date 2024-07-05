import ethLogo from "@/public/ethereum-eth-logo.svg";
import solLogo from "@/public/solana-sol-logo.png";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col m-10">
      <div className="flex flex-col justify-center items-center h-screen">
        <h1 className="text-3xl font-bold">Welcome to NovaMesh</h1>
        <p className="m-6">
          Connect your Ethereum and Solana Wallet to mint Tokens and NFTs
        </p>
      </div>
      <div>
        <h2 className="text-center font-bold text-2xl">Ethereum</h2>
        <div className="flex justify-evenly m-6">
          <div className="w-1/3">
            <Image
              src={ethLogo}
              alt="ETH Logo"
              width="250"
              className="mx-auto"
            />
          </div>
          <p className="w-1/3">Description of Ethereum functionalities...</p>
        </div>
      </div>
      <div>
        <h2 className="text-center font-bold text-2xl">Solana</h2>
        <div className="flex justify-evenly m-6">
          <div className=" w-1/3">Description of Solana functionalities</div>
          <div className="w-1/3">
            <Image
              src={solLogo}
              alt="SOL Logo"
              width="250"
              className="mx-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
