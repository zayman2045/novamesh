import { useEffect, useRef } from "react";
import MeshNFTImages from "./MeshNFTImages";

export default function MeshNFTs() {
  // Refs to store the scroll container and the interval for auto-scrolling
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const scrollIntervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    if (!scrollContainer) return;

    // Function to set the initial scroll position to one-third of the scroll width
    const setInitialScrollPosition = () => {
      const initialScrollPosition = scrollContainer.scrollWidth / 3;
      scrollContainer.scrollLeft = initialScrollPosition;
      return initialScrollPosition;
    };

    let initialScrollPosition = setInitialScrollPosition();

    // Handle scroll event to reset scroll position if it goes out of bounds
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

    // Handle resize event to reset the initial scroll position
    const handleResize = () => {
      initialScrollPosition = setInitialScrollPosition();
    };

    // Start auto-scrolling by incrementing scrollLeft every 20ms
    const startAutoScroll = () => {
      scrollIntervalRef.current = setInterval(() => {
        scrollContainer.scrollLeft += 1;
      }, 20);
    };

    // Stop auto-scrolling by clearing the interval
    const stopAutoScroll = () => {
      if (scrollIntervalRef.current) {
        clearInterval(scrollIntervalRef.current);
      }
    };

    // Add event listeners for scroll, resize, mouse enter, and mouse leave
    scrollContainer.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);
    scrollContainer.addEventListener("mouseenter", stopAutoScroll);
    scrollContainer.addEventListener("mouseleave", startAutoScroll);

    // Start auto-scrolling initially
    startAutoScroll();

    // Cleanup event listeners and stop auto-scrolling on component unmount
    return () => {
      scrollContainer.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
      scrollContainer.removeEventListener("mouseenter", stopAutoScroll);
      scrollContainer.removeEventListener("mouseleave", startAutoScroll);
      stopAutoScroll();
    };
  }, []);

  return (
    <div className="flex flex-col border-4 bg-opacity-50 border-opacity-50 rounded-3xl items-center justify-evenly h-[50vh] w-[50vw] p-4 border-custom-purple bg-custom-purple">
      <div
        ref={scrollContainerRef}
        className="flex overflow-x-auto w-full gap-4 hide-scrollbar"
      >
        {/* Render three NovaNFTImages components */}
        <MeshNFTImages />
        <MeshNFTImages />
        <MeshNFTImages />
      </div>
      <div className="flex flex-col items-center justify-center my-2">
        {/* Button to activate the loot box */}
        <button
          className="bg-custom-purple bg-opacity-75 border-2 border-custom-purple rounded-xl font-bold p-2 m-2 transition-transform hover:scale-110 duration-300"
          onClick={() => {}}
        >
          Activate Loot Box
        </button>
      </div>
    </div>
  );
}
