"use client";

import Link from "next/link";
import Image from "next/image";
import logo from "../../public/novamesh-title.png";
import SolanaConnectButton from "./SolanaConnectButton";
import EthereumConnectButton from "./EthereumConnectButton";

export default function NavBar() {
  return (
    <nav className="flex justify-between items-center p-6 bg-custom-dark-blue bg-opacity-75">
      <Link href="/">
       <Image src={logo} alt="NovaMesh" className="ml-10" width={300} height={100} />
      </Link>
      <div className="flex justify-between space-x-8">
        <Link href="/tokens">
          <p className="text-white hover:text-purple-800 cursor-pointer pb-2 border-b-2 border-white hover:border-purple-800">
            Tokens
          </p>
        </Link>
        <Link href="/nfts">
          <p className="text-white hover:text-purple-800 cursor-pointer pb-2 border-b-2 border-white hover:border-purple-800">
            NFTs
          </p>
        </Link>
        <Link href="/bridge">
          <p className="text-white hover:text-purple-800 cursor-pointer pb-2 border-b-2 border-white hover:border-purple-800">
            Bridge
          </p>
        </Link>
      </div>
      <div className="flex justify-center">
        <SolanaConnectButton />
        <EthereumConnectButton />
      </div>
    </nav>
  );
}
