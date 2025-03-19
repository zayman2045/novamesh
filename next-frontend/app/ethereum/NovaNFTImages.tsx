import Image from "next/image";
import NovaNft1 from "@/public/nova-nft-1.jpeg";
import NovaNft2 from "@/public/nova-nft-2.jpeg";
import NovaNft3 from "@/public/nova-nft-3.jpeg";
import NovaNft4 from "@/public/nova-nft-4.jpeg";

export default function NovaNFTImages() {
  return (
    <>
      <div className="flex flex-col items-center justify-center min-w-[33%]">
        <Image src={NovaNft1} alt="Nova NFT 1" className="rounded-lg" />
      </div>
      <div className="flex flex-col items-center justify-center min-w-[33%]">
        <Image src={NovaNft2} alt="Nova NFT 2" className="rounded-lg" />
      </div>
      <div className="flex flex-col items-center justify-center min-w-[33%]">
        <Image src={NovaNft3} alt="Nova NFT 3" className="rounded-lg" />
      </div>
      <div className="flex flex-col items-center justify-center min-w-[33%]">
        <Image src={NovaNft4} alt="Nova NFT 4" className="rounded-lg" />
      </div>
    </>
  );
}
