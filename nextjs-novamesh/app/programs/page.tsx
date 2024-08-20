"use client";

import { MyProvider } from "./MyProvider";
import MyConsumer from "./MyConsumer";

export default function Programs() {
  return (
    <>
      <div className="flex flex-col items-center justify-center h-screen">
        <h1 className="border border-black p-[200px]">Programs</h1>
        <MyProvider>
          <MyConsumer />
        </MyProvider>
      </div>
    </>
  );
}
