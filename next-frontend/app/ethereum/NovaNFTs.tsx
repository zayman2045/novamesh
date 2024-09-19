import NovaNFTImages from "./NovaNFTImages";
import { useRef, useEffect } from "react";
import {useWriteNovaNftActivateLootBox} from "@/src/generated";
import { useAccount } from "wagmi";
import { parseEther } from "ethers";

export default function NovaNFTs() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const scrollIntervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    if (!scrollContainer) return;

    const setInitialScrollPosition = () => {
      const initialScrollPosition = scrollContainer.scrollWidth / 3;
      scrollContainer.scrollLeft = initialScrollPosition;
      return initialScrollPosition;
    };

    let initialScrollPosition = setInitialScrollPosition();

    const handleScroll = () => {
      console.log(`Scroll position: ${scrollContainer.scrollLeft}`);
      if (
        scrollContainer.scrollLeft >= initialScrollPosition * 2 ||
        scrollContainer.scrollLeft <= 0
      ) {
        // Reset to the middle
        scrollContainer.scrollLeft = initialScrollPosition;
      }
    };

    const handleResize = () => {
      initialScrollPosition = setInitialScrollPosition();
    };

    const startAutoScroll = () => {
      scrollIntervalRef.current = setInterval(() => {
        scrollContainer.scrollLeft += 1;
      }, 20);
    };

    const stopAutoScroll = () => {
      if (scrollIntervalRef.current) {
        clearInterval(scrollIntervalRef.current);
      }
    };

    scrollContainer.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);
    scrollContainer.addEventListener("mouseenter", stopAutoScroll);
    scrollContainer.addEventListener("mouseleave", startAutoScroll);

    startAutoScroll();

    return () => {
      scrollContainer.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
      scrollContainer.removeEventListener("mouseenter", stopAutoScroll);
      scrollContainer.removeEventListener("mouseleave", startAutoScroll);
      stopAutoScroll();
    };
  }, []);

  const { address: userAddress } = useAccount();

  const { writeContract: activateLootBox, data: hash } = useWriteNovaNftActivateLootBox();

  const onClick = async () => {
    if (!userAddress) {
      console.error("User address is undefined");
      return;
    }

    try {
      const tx = await activateLootBox({
        args: [userAddress],
        value: parseEther("0.01"),
      });
      console.log("Transaction hash:", tx);
    } catch (error) {
      console.error("Transaction failed:", error);
    }
  };

  return (
    <div className="flex flex-col border-4 bg-opacity-50 border-opacity-50 rounded-3xl items-center justify-evenly h-[50vh] w-[50vw] p-4 border-custom-blue bg-blue-400">
      <div
        ref={scrollContainerRef}
        className="flex overflow-x-auto w-full gap-4 hide-scrollbar"
      >
        <NovaNFTImages />
        <NovaNFTImages />
        <NovaNFTImages />
      </div>
      <div className="flex flex-col items-center justify-center my-2">
        <button className="bg-blue-500 bg-opacity-75 border-2 border-custom-blue rounded-xl font-bold p-2 m-2 transition-transform hover:scale-110 duration-300" onClick={onClick}>
          Activate Loot Box
        </button>
      </div>
    </div>
  );
}