"use client";

import React, { useEffect } from "react";
import ethLogo from "@/public/ethereum-eth-logo.svg";
import solLogo from "@/public/solana-sol-logo.png";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  useEffect(() => {
    const hiddenElements = document.querySelectorAll(".hide");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
          } else {
            entry.target.classList.remove("show");
          }
        });
      },
      {
        threshold: 0.5,
      }
    );

    hiddenElements.forEach((element) => {
      observer.observe(element);
    });

    // Cleanup observer on component unmount
    return () => {
      hiddenElements.forEach((element) => {
        observer.unobserve(element);
      });
    };
  }, []);

  return (
    <div className="flex flex-col m-10">
      <div className="flex flex-col justify-center items-center text-center h-[calc(100vh-4rem)] hide">
        <h1 className="text-3xl font-bold">Welcome to NovaMesh</h1>
        <p className="m-6">
          Connect your Ethereum and Solana Wallet to mint Tokens and NFTs
        </p>
      </div>
      <div className="flex justify-evenly items-center my-6 h-[calc(100vh-4rem)] hide">
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
