"use client";

import React, { useState } from "react";
import Tester from "./tester";

export default function Programs() {
  const [count, setCount] = useState(0);

  const handleClick = () => setCount(count + 1);

  return (
    <>
      <div className="flex flex-col items-center">
        <h1 className="">Programs</h1>
        <Tester id={count} />
        <button onClick={handleClick}>+</button>
      </div>
    </>
  );
}
