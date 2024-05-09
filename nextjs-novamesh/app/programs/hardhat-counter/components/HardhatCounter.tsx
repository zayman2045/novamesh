"use client";

import HardhatCounterState from "./HardhatCounterState";
import HardhatIncrementButton from "./HardhatIncrementButton";

export default function HardhatCounter() {
  return (
    <>
      <div className={"flex flex-col mx-auto border rounded w-1/4 mt-4"}>
        <h2 className={" bg-white text-black w-full"}>Hardhat Counter</h2>
        <div className={"mx-auto"}>
          <HardhatCounterState />
          <HardhatIncrementButton/>
        </div>
      </div>
    </>
  );
}
