export default function MintToken() {
  return (
    <div className="flex justify-between w-full py-2">
      <button className="border border-custom-purple rounded-md hover:scale-110 transition-transform p-1 font-bold bg-custom-purple mx-1 w-1/5">
        Create Token
      </button>
      <button className="border border-custom-purple rounded-md hover:scale-110 transition-transform p-1 font-bold bg-custom-purple mx-1 w-1/5">
        Mint Token
      </button>
      <button className="border border-custom-purple rounded-md hover:scale-110 transition-transform p-1 font-bold bg-custom-purple mx-1 w-1/5">
        Check Balance
      </button>
      <button className="border border-custom-purple rounded-md hover:scale-110 transition-transform p-1 font-bold bg-custom-purple mx-1 w-1/5">
        Send Token
      </button>
    </div>
  );
}
