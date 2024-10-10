interface HomeContentProps {
  title: string; // The title to be displayed in the component
  description: string; // The description to be displayed in the component
  orientation: "left" | "right"; // The orientation of the content
}

export default function HomeContent({
  title,
  description,
  orientation,
}: HomeContentProps) {
  return (
    <div className="flex justify-around items-center hide h-52">
      {orientation === "left" ? (
        <>
          <div className="w-1/2 flex flex-col justify-around h-1/2">
            <h1 className="text-2xl font-bold">{title}</h1>
            <p>{description}</p>
          </div>
          <div className="h-52 w-52 border border-blue-400"></div>
        </>
      ) : (
        <>
          <div className="h-52 w-52 border border-blue-400"></div>
          <div className="w-1/2 flex flex-col justify-around h-1/2">
            <h1 className="text-2xl font-bold">{title}</h1>
            <p>{description}</p>
          </div>
        </>
      )}
    </div>
  );
}
