import { useReadCounterSCounter } from "@/src/generated";

export default function HardhatCounterState() {
  const result = useReadCounterSCounter();

  return <div>Count: {result.data?.toString()}</div>;
}
