"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";

export default function NavBar() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <nav className="flex justify-between items-center p-6 bg-custom-green bg-opacity-75">
      <Link href="/">
        <h1 className="text-2xl text-white ml-10">NovaMesh</h1>
      </Link>
      <div className="flex justify-between space-x-16">
        <Link href="/programs">
          <p className="text-white hover:text-purple-800 cursor-pointer pb-2 border-b-2 border-white hover:border-purple-800">
            Programs
          </p>
        </Link>
        <Link href="/explore">
          <p className="text-white hover:text-purple-800 cursor-pointer pb-2 border-b-2 border-white hover:border-purple-800">
            Explore
          </p>
        </Link>
        <Link href="/swap">
          <p className="text-white hover:text-purple-800 cursor-pointer pb-2 border-b-2 border-white hover:border-purple-800">
            Swap
          </p>
        </Link>
        <Link href="/nfts">
          <p className="text-white hover:text-purple-800 cursor-pointer pb-2 border-b-2 border-white hover:border-purple-800">
            NFTs
          </p>
        </Link>
      </div>
      <div className="w-[175px]">
  {isClient ? (
    <WalletMultiButton />
  ) : (
    <button
      className={
        "text-base font-semibold h-12 leading-none px-6 rounded bg-custom-purple font-custom-solana"
      }
    >
      Select Wallet
    </button>
  )}
</div>
    </nav>
  );
}
