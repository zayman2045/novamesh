import { useReadContract } from "wagmi";
import { useReadCounterSCounter, counterAbi } from "../../../../src/generated";

export default function HardhatCounterState() {
  const result = useReadContract({
    abi: counterAbi,
    address: "0xA91FA55aE9cb5d1f4701177C99Cd7E418940CCa2",
    functionName: "s_counter",
  });

  const another_result = useReadCounterSCounter();

  return <div>Count: {result.data?.toString()}</div>;
}
