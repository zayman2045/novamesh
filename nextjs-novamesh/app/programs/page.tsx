"use client";

import React, { useState, useEffect } from "react";
import Tester from "./tester";

export default function Programs() {
  const [count, setCount] = useState(0);

  const handleClick = () => setCount(count + 1);

  useEffect(() => {
    console.log(`Count value changed: ${count}`);
  }, [count]); // Dependency array includes count

  // Effect with empty dependency array
  useEffect(() => {
    console.log("This runs only once after the initial render.");
  }, []);

  // Effect with no dependency array
  useEffect(() => {
    console.log("This runs after every render.");
  });

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
