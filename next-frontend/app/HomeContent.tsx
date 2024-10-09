interface HomeContentProps {
  title: string;
  description: string;
  orientation: "left" | "right";
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
          <div className="h-52 w-52 border border-blue-400">Image</div>
        </>
      ) : (
        <>
          <div className="h-52 w-52 border border-blue-400">Image</div>
          <div className="w-1/2 flex flex-col justify-around h-1/2">
            <h1 className="text-2xl font-bold">{title}</h1>
            <p>{description}</p>
          </div>
        </>
      )}
    </div>
  );
}
