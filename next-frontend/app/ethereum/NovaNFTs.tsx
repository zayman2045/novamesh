import NovaNFTImages from "./NovaNFTImages";
import { useRef, useEffect } from "react";

export default function NovaNFTs() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

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
  
    scrollContainer.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);
  
    return () => {
      scrollContainer.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

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
        <button className="bg-blue-500 bg-opacity-75 border-2 border-custom-blue rounded-xl font-bold p-2 m-2 transition-transform hover:scale-110 duration-300">
          Activate Loot Box
        </button>
      </div>
    </div>
  );
}
