"use client";

import React, { useState, useEffect } from "react";
import ethLogo from "@/public/ethereum-eth-logo.svg";
import solLogo from "@/public/solana-sol-logo.png";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const position = window.scrollY;
      setIsScrolled(position > 275);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="flex flex-col m-10">
      <div
        className={`flex flex-col justify-center items-center text-center h-screen transition-all duration-500 ${isScrolled ? "blur-sm" : ""}`}
      >
        <h1 className="text-3xl font-bold">Welcome to NovaMesh</h1>
        <p className="m-6">
          Connect your Ethereum and Solana Wallet to mint Tokens and NFTs
        </p>
      </div>
      <div className="flex justify-evenly items-center my-6 min-h-[80vh]">
        <div className="w-1/6 p-2 hover:scale-110 transition-transform duration-300">
          <Link href="/ethereum">
            <Image src={ethLogo} alt="ETH Logo" className="w-full" />
          </Link>
        </div>
        <p className="w-1/3 p-3 text-center">
          NovaMesh allows users to mint tokens and NFTs on the Ethereum & Solana
          blockchain networks.
        </p>
        <div className="w-1/6 p-2 hover:scale-110 transition-transform duration-300">
          <Link href="/solana">
            <Image src={solLogo} alt="SOL Logo" className="w-full" />
          </Link>
        </div>
      </div>
    </div>
  );
}
