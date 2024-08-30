"use client";

import Link from "next/link";
import Image from "next/image";
import novameshLogo from "@/public/novamesh-title-text.png";
import githubLogo from "@/public/github-logo.png";
import ethLogo from "@/public/ethereum-eth-logo.svg";
import solLogo from "@/public/solana-sol-logo.png";
import SolanaConnectButton from "./SolanaConnectButton";
import EthereumConnectButton from "./EthereumConnectButton";
import { usePathname } from "next/navigation";

export default function NavBar() {
  const pathname = usePathname();
  return (
    <nav className="fixed top-0 left-0 w-full h-[4rem] flex justify-between items-center p-2 text-white text-lg z-10">
      <div className="flex">
        <Link href="/">
          <Image
            src={novameshLogo}
            alt="NovaMesh Logo"
            className="ml-4 mr-4 border-b-2 border-white border-opacity-0 hover:border-opacity-100 transition-colors duration-500"
            width={225}
            height={100}
          />
        </Link>
        {pathname === "/ethereum" && <div className="flex items-center"><EthereumConnectButton/></div>}
        {pathname == "/solana" && <div className="flex items-center"><SolanaConnectButton/></div>}
      </div>
      <div className="flex justify-around w-1/4 gap-4">
        <Link
          href="/ethereum"
          className="border-b-2 border-white border-opacity-0 hover:border-opacity-100 transition-colors duration-300 py-2"
        >
          <Image src={ethLogo} alt="ETH Logo" className="" width={50} />
        </Link>
        <Link
          href="/solana"
          className="border-b-2 border-white border-opacity-0 hover:border-opacity-100 transition-colors duration-300 py-2"
        >
          {" "}
          <Image src={solLogo} alt="SOL Logo" width={50} />
        </Link>
        <a
          href="https://github.com/zayman2045/novamesh"
          className="border-b-2 border-white border-opacity-0 hover:border-opacity-100 transition-colors duration-300 py-2"
        >
          <Image src={githubLogo} alt="Github Logo" width={50} height={25} />
        </a>
      </div>
    </nav>
  );
}
