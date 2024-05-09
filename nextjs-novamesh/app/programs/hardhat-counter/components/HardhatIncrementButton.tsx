import { useWriteCounterIncrement } from "@/src/generated";

const HardhatIncrementButton = () => {
  const { writeContract } = useWriteCounterIncrement();

  return (
    <button
      className="w-24 border border-white rounded p-1 mb-2 hover:bg-white hover:text-black hover:border-black"
      onClick={() => {
        writeContract({});
      }}
    >
      Increment
    </button>
  );
};

export default HardhatIncrementButton;
