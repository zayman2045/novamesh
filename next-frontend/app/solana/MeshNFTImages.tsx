import Image from "next/image";
import MeshNft1 from "@/public/mesh-nft-1.jpeg";
import MeshNft2 from "@/public/mesh-nft-2.jpeg";
import MeshNft3 from "@/public/mesh-nft-3.jpeg";

export default function MeshNFTImages() {
  return (
    <>
      <div className="flex flex-col items-center justify-center min-w-[33%]">
        <Image src={MeshNft1} alt="Mesh NFT 1" className="rounded-lg" />
      </div>
      <div className="flex flex-col items-center justify-center min-w-[33%]">
        <Image src={MeshNft2} alt="Mesh NFT 2" className="rounded-lg" />
      </div>
      <div className="flex flex-col items-center justify-center min-w-[33%]">
        <Image src={MeshNft3} alt="Mesh NFT 3" className="rounded-lg" />
      </div>
    </>
  );
}
