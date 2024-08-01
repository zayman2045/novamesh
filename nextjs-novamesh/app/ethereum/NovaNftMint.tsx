"use client";

import { useAccount } from "wagmi";

export default function NovaNftMint() {
  const { address } = useAccount();

  let nfts = [
    { name: "NOVA NFT1" },
    { name: "NOVA NFT2" },
    { name: "NOVA NFT3" },
  ];

  return (
    <>
      <div
        className={`flex flex-col border-4 bg-opacity-50 border-opacity-50 ${address ? "border-custom-blue bg-blue-400 " : "bg-gray-400 border-gray-600"} rounded-md items-center w-1/2 p-4 m-4 `}
      >
        <h2 className="text-2xl pb-3 font-bold">Nova NFTs</h2>
        {address ? (
          <div className="flex flex-wrap justify-around w-full ">
            {nfts.map((item) => (
              <div
                key={item.name}
                className="flex flex-col items-center font-bold p-1 m-4 w-1/3 rounded-md"
              >
                <h3>{item.name}</h3>
                <div className="bg-black m-2 p-2 text-center w-full h-20 border rounded-md">
                  Image Placeholder
                </div>
                <button className="text-white bg-custom-blue border-2 border-custom-blue rounded-lg p-1 w-20 font-bold hover:scale-105">
                  Mint
                </button>
              </div>
            ))}
          </div>
        ) : (
          <p>Connect Wallet to Access</p>
        )}
      </div>
    </>
  );
}
