"use client";

import React, { useEffect } from "react";
import ethLogo from "@/public/ethereum-eth-logo.svg";
import solLogo from "@/public/solana-sol-logo.png";
import Image from "next/image";
import Link from "next/link";
import HomeContent from "./HomeContent";

export default function Home() {
  useEffect(() => {
    // Select all elements with the class "hide"
    const hiddenElements = document.querySelectorAll(".hide");

    // Create a new IntersectionObserver instance
    const observer = new IntersectionObserver(
      (entries) => {
        // Iterate over each entry (observed element)
        entries.forEach((entry) => {
          // If 75% or more of the element is visible, add the "show" class
          if (entry.intersectionRatio >= 0.75) {
            entry.target.classList.add("show");
          }
          // If 50% or less of the element is visible, remove the "show" class
          else if (entry.intersectionRatio <= 0.5) {
            entry.target.classList.remove("show");
          }
        });
      },
      {
        // Set thresholds for visibility at 50% and 75%
        threshold: [0.5, 0.75],
      }
    );

    // Observe each hidden element
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
      <div className=" h-[calc(100vh-4rem)] hide">
        <div className="flex flex-col justify-center items-center text-center h-4/5">
          <h1 className="text-3xl font-bold">Welcome to NovaMesh</h1>
          <p className="m-6">
            Connect your Ethereum or Solana Wallet to mint Tokens and NFTs
          </p>
        </div>
        <div className="text-lg text-center font-semibold mt-4 animate-blink">
          <p>Learn More</p>
          <p>&#x2193;</p>
        </div>
      </div>
      <div className="flex flex-col gap-5">
        <HomeContent
          title="Tokens"
          description="Mint ERC-20 tokens on Ethereum and SPL tokens on Solana. Nova tokens are minted in exchange for ETH, while Mesh tokens are minted in exchange for SOL."
          orientation="left"
        />
        <HomeContent
          title="NFTs"
          description="Redeem a daily NFT using the Nova and Mesh Loot Boxes. The artwork is generated with OpenAI's DALL·E 3 & Stable Diffusion 3. The NFT metadata is stored on IPFS for decentralized access."
          orientation="right"
        />
        <HomeContent
          title="Transfers"
          description="Send tokens and NFTs to other users on the network. The transfer is done on-chain and is recorded on the blockchain."
          orientation="left"
        />
      </div>
      <div className="flex justify-evenly items-center my-6 h-[calc(100vh-4rem)] hide">
        <div className="w-1/6 p-2 hover:scale-110 transition-transform duration-300">
          <Link href="/ethereum">
            <Image src={ethLogo} alt="ETH Logo" className="w-full" />
          </Link>
        </div>
        <p className="w-1/3 p-3 text-center">
          Select a blockchain network to continue
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
