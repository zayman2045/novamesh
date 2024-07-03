export default function NovaTokenMint() {
  return (
    <>
      <div className="flex flex-col border-4 border-custom-blue rounded-md items-center w-3/5 p-4 m-4 bg-blue-400">
        <h2 className="text-2xl pb-3 font-bold">Nova Tokens</h2>
        <button className="bg-custom-blue p-1 border border-custom-blue rounded-lg w-20 font-bold hover:scale-105">
          Mint
        </button>
      </div>
    </>
  );
}
