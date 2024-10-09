"use client";

import React, { useEffect } from "react";
import ethLogo from "@/public/ethereum-eth-logo.svg";
import solLogo from "@/public/solana-sol-logo.png";
import Image from "next/image";
import Link from "next/link";

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
            Connect your Ethereum and Solana Wallet to mint Tokens and NFTs
          </p>
        </div>
        <div className="text-lg text-center font-semibold mt-4 animate-blink">
          <p>Learn More</p>
          <p>&#x2193;</p>
        </div>
      </div>
      <div className="hide flex justify-center items-center h-20 my-10 border-2 border-white">
        <h1>Some Content!</h1>
      </div>
      <div className="hide flex justify-center items-center h-20 my-10 border-2 border-white">
        <h1>More Content!!</h1>
      </div>
      <div className="hide flex justify-center items-center h-20 my-10 border-2 border-white">
        <h1>Even More Content!!!</h1>
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
