import Image, { StaticImageData } from "next/image";
import HomeArt1 from "@/public/home-art-1.png";
import HomeArt2 from "@/public/home-art-2.png";
import HomeArt3 from "@/public/home-art-3.png";

interface HomeContentProps {
  title: string; // The title to be displayed in the component
  description: string; // The description to be displayed in the component
  orientation: "left" | "right"; // The orientation of the content
}

// Mapping titles to their corresponding images
const titleToImageMap: { [key: string]: StaticImageData } = {
  "Tokens": HomeArt1,
  "NFTs": HomeArt2,
  "Transfers": HomeArt3,
};

export default function HomeContent({
  title,
  description,
  orientation,
}: HomeContentProps) {
  // Get the image based on the title
  const art = titleToImageMap[title];

  return (
    <div className="flex justify-around items-center hide h-64">
      {orientation === "left" ? (
        <>
          <div className="w-1/2 flex flex-col justify-around h-1/2">
            <h1 className="text-2xl font-bold">{title}</h1>
            <p>{description}</p>
          </div>
          <Image
            src={art}
            alt={title}
            className="rounded-lg w-1/3 h-auto"
          />
        </>
      ) : (
        <>
          <Image
            src={art}
            alt={title}
            className="rounded-lg w-1/3 h-auto"
          />
          <div className="w-1/2 flex flex-col justify-around h-1/2">
            <h1 className="text-2xl font-bold">{title}</h1>
            <p>{description}</p>
          </div>
        </>
      )}
    </div>
  );
}