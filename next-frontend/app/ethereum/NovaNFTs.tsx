import Image from "next/image";
import NovaNft1 from "@/public/nova-nft-1.jpeg";
import NovaNft2 from "@/public/nova-nft-2.jpeg";
import NovaNft3 from "@/public/nova-nft-3.jpeg";
import { useRef, useEffect } from "react";

export default function NovaNFTs() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    if (!scrollContainer) return;

    // Set initial scroll position to the middle
    scrollContainer.scrollLeft = scrollContainer.scrollWidth / 2;

    const handleScroll = () => {
      const maxScrollLeft = scrollContainer.scrollWidth / 2;

      if (scrollContainer.scrollLeft >= maxScrollLeft) {
        scrollContainer.scrollLeft = scrollContainer.scrollLeft - maxScrollLeft;
      } else if (scrollContainer.scrollLeft <= 0) {
        scrollContainer.scrollLeft = maxScrollLeft + scrollContainer.scrollLeft;
      }
    };

    scrollContainer.addEventListener("scroll", handleScroll);
    return () => {
      scrollContainer.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="flex flex-col border-4 bg-opacity-50 border-opacity-50 rounded-3xl items-center justify-evenly h-[50vh] w-[50vw] p-4 border-custom-blue bg-blue-400">
      <div
        ref={scrollContainerRef}
        className="flex overflow-x-auto w-full gap-4 hide-scrollbar"
      >
        <div className="flex flex-col items-center justify-center min-w-[33%]">
          <Image src={NovaNft1} alt="Nova NFT 1" className="rounded-lg" />
        </div>
        <div className="flex flex-col items-center justify-center min-w-[33%]">
          <Image src={NovaNft2} alt="Nova NFT 2" className="rounded-lg" />
        </div>
        <div className="flex flex-col items-center justify-center min-w-[33%]">
          <Image src={NovaNft3} alt="Nova NFT 3" className="rounded-lg" />
        </div>
        {/* Duplicate the content for seamless scrolling */}
        <div className="flex flex-col items-center justify-center min-w-[33%]">
          <Image src={NovaNft1} alt="Nova NFT 1" className="rounded-lg" />
        </div>
        <div className="flex flex-col items-center justify-center min-w-[33%]">
          <Image src={NovaNft2} alt="Nova NFT 2" className="rounded-lg" />
        </div>
        <div className="flex flex-col items-center justify-center min-w-[33%]">
          <Image src={NovaNft3} alt="Nova NFT 3" className="rounded-lg" />
        </div>
      </div>
      <div className="flex flex-col items-center justify-center my-2">
        <button className="bg-blue-500 bg-opacity-75 border-2 border-custom-blue rounded-xl font-bold p-2 m-2 transition-transform hover:scale-110 duration-300">
          Activate Loot Box
        </button>
      </div>
    </div>
  );
}
