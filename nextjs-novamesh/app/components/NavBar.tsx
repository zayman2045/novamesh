"use client";

import Link from "next/link";
import Image from "next/image";
import logo from "../../public/novamesh-title-text.png";

export default function NavBar() {
  return (
    <nav className="flex justify-between items-center p-2 bg-custom-green bg-opacity-75">
      <Link href="/">
       <Image src={logo} alt="NovaMesh" className="ml-10" width={225} height={100} />
      </Link>
      <div className="flex justify-between space-x-8">
        <Link href="/ethereum">
          <p className="text-white hover:text-blue-800 cursor-pointer pb-2 border-b-2 border-white hover:border-blue-800">
            Ethereum
          </p>
        </Link>
        <Link href="/solana">
          <p className="text-white hover:text-purple-800 cursor-pointer pb-2 border-b-2 border-white hover:border-purple-800">
            Solana
          </p>
        </Link>
        <Link href="/bridge">
          <p className="text-white hover:text-black cursor-pointer pb-2 border-b-2 border-white hover:border-black">
            Bridge
          </p>
        </Link>
      </div>
      <div className="text-white mr-10">Github & Portfolio Links</div>
    </nav>
  );
}
