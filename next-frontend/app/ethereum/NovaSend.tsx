export default function NovaSend() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Add form submission logic here
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-2 h-[50vh] w-[50vw]"
    >
      <div className="flex flex-col justify-evenly border-4 bg-opacity-50 border-opacity-50 border-custom-blue bg-blue-400 rounded-3xl p-3 h-4/5 w-full">
        <div className="flex items-center">
          <label className="mr-4">Asset to Send:</label>
          <div className="flex items-center mr-4">
            <input
              type="radio"
              id="sendNova"
              name="currency"
              value="NOVA"
              className="mr-2"
              required
            />
            <label htmlFor="sendNova">NOVA</label>
          </div>
          <div className="flex items-center">
            <input
              type="radio"
              id="sendEth"
              name="currency"
              value="ETH"
              className="mr-2"
              required
            />
            <label htmlFor="sendEth">ETH</label>
          </div>
        </div>
        <div>
          <label>Recipient</label>
          <input
            type="text"
            className=" bg-transparent border-2 border-custom-blue rounded-3xl w-full h-10 p-2 text-left text-lg outline-none shadow-none placeholder:text-white"
            placeholder="0x1234..."
            required
          />
        </div>
        <div>
          <label>Amount</label>
          <input
            type="number"
            step="0.0001"
            min="0"
            className="bg-transparent border-2 border-custom-blue rounded-3xl w-full h-10 p-2 text-left text-lg outline-none shadow-none placeholder:text-white no-spinner"
            placeholder="Enter amount"
            required
          />
        </div>
      </div>
      <button
        type="submit"
        className="bg-blue-500 bg-opacity-75 p-2 border-2 border-custom-blue rounded-3xl w-full h-1/5 font-bold hover:scale-105 duration-300"
      >
        Send
      </button>
    </form>
  );
}
