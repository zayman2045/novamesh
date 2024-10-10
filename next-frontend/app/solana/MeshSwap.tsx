import { useState } from "react";

export default function MeshSwap() {
  const [message, setMessage] = useState("Swap");

  return (
    <>
      <form
        onSubmit={() => {}}
        className="flex flex-col gap-2 items-center justify-center h-[50vh] w-[50vw]"
      >
        <div className="border-4 bg-opacity-50 border-opacity-50 border-custom-purple bg-custom-purple rounded-3xl h-2/5 w-full p-3">
          <h3>Sell</h3>
          <input
            name="solAmount"
            type="text"
            className={`text-white mr-3 bg-transparent rounded-3xl w-3/4 h-1/2 p-1 text-left text-3xl outline-none shadow-none placeholder:text-white`}
            placeholder="0"
            required
            onChange={() => {}}
            value={""}
          ></input>
          <div className="flex justify-between">
            <p>{}</p>
            <p>SOL Balance: {}</p>
          </div>
        </div>
        <div className="border-4 bg-opacity-50 border-opacity-50 border-custom-purple bg-custom-purple rounded-3xl h-2/5 w-full p-3">
          <h3>Buy</h3>
          <input
            name="meshAmount"
            type="text"
            className={`text-white mr-3 bg-transparent rounded-3xl w-3/4 h-1/2 p-1 text-left text-3xl outline-none shadow-none placeholder:text-white`}
            placeholder="0"
            required
            onChange={() => {}}
            value={""}
          ></input>
          <div className="flex justify-between">
            <p>{}</p>
            <p>MESH Balance: {}</p>
          </div>
        </div>
        <button
          type="submit"
          className={`bg-custom-purple bg-opacity-75 p-1 border-2 border-custom-purple rounded-3xl w-full h-1/5 font-bold hover:scale-105 duration-300 ${message == "Insufficient SOL Balance" && "bg-red-500 border-red-500"} ${message == "Enter an amount" && "bg-opacity-50 border-gray-600 bg-gray-400 border-opacity-50"}`}
          disabled={message != "Swap"}
        >
          {message}
        </button>
      </form>
    </>
  );
}
