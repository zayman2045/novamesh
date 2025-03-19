import {
  clusterApiUrl,
  Connection,
  PublicKey,
  Keypair,
  LAMPORTS_PER_SOL,
} from "@solana/web3.js";

import {
  createMint,
  getOrCreateAssociatedTokenAccount,
  mintTo,
  transfer,
  Account,
  getMint,
  getAccount,
} from "@solana/spl-token";

// Special setup to add a Buffer class, because it's missing
window.Buffer = window.Buffer || require("buffer").Buffer;

export default function MeshTokens() {
  // Connect to the cluster
  const connection = new Connection(clusterApiUrl("devnet"), "confirmed");

  // Generate a new wallet keypair and airdrop SOL
  const fromWallet = Keypair.fromSecretKey(
    Uint8Array.from([
      194, 31, 125, 114, 69, 172, 98, 227, 190, 79, 182, 246, 173, 226, 129,
      115, 238, 233, 91, 182, 193, 45, 157, 137, 174, 50, 57, 198, 190, 229, 11,
      182, 176, 161, 251, 171, 244, 95, 103, 194, 232, 4, 191, 204, 247, 170,
      132, 174, 29, 60, 8, 38, 216, 88, 110, 91, 204, 71, 158, 238, 128, 180,
      131, 70,
    ])
  );
  console.log(`fromWallet: ${fromWallet.publicKey.toBase58()}`);

  // Public Key to your Phantom Wallet
  const toWallet = new PublicKey(
    "BZjEh99Q8ZWstoNnVo7tqPqEAXXXxGScDJYBXbA2hoK3"
  );
  let fromTokenAccount: Account;
  let mint: PublicKey;

  async function createToken() {
   
    // Create new token mint
    mint = await createMint(
      connection,
      fromWallet,
      fromWallet.publicKey,
      null,
      9 // 9 here means we have a decmial of 9 0's
    );
    console.log(`Create token: ${mint.toBase58()}`);

    // Get the token account of the fromWallet address, and if it does not exist, create it
    fromTokenAccount = await getOrCreateAssociatedTokenAccount(
      connection,
      fromWallet,
      mint,
      fromWallet.publicKey
    );
    console.log(`Create Token Account: ${fromTokenAccount.address.toBase58()}`);
  }

  async function mintToken() {
    // Mint 1 new token to the "fromTokenAccount" account we just created
    const signature = await mintTo(
      connection,
      fromWallet,
      mint,
      fromTokenAccount.address,
      fromWallet.publicKey,
      10000000000 // 10 billion
    );
    console.log(`Mint signature: ${signature}`);
  }

  async function checkBalance() {
    // get the supply of tokens we have minted into existance
    const mintInfo = await getMint(connection, mint);
    console.log(mintInfo.supply);

    // get the amount of tokens left in the account
    const tokenAccountInfo = await getAccount(
      connection,
      fromTokenAccount.address
    );
    console.log(tokenAccountInfo.amount);
  }

  async function sendToken() {
    // Get the token account of the toWallet address, and if it does not exist, create it
    const toTokenAccount = await getOrCreateAssociatedTokenAccount(
      connection,
      fromWallet,
      mint,
      toWallet
    );
    console.log(`toTokenAccount ${toTokenAccount.address}`);

    const signature = await transfer(
      connection,
      fromWallet,
      fromTokenAccount.address,
      toTokenAccount.address,
      fromWallet.publicKey,
      1000000000 // 1 billion
    );
    console.log(`finished transfer with ${signature}`);
  }

  return (
    <>
      <h2 className="text-2xl font-bold pb-3">Mesh Tokens</h2>
      <div className="flex justify-between w-full py-2">
        <button
          className="border border-custom-purple rounded-md hover:scale-110 transition-transform p-1 font-bold bg-custom-purple mx-1 w-1/5"
          onClick={createToken}
        >
          Create Token
        </button>
        <button
          className="border border-custom-purple rounded-md hover:scale-110 transition-transform p-1 font-bold bg-custom-purple mx-1 w-1/5"
          onClick={mintToken}
        >
          Mint Token
        </button>
        <button
          className="border border-custom-purple rounded-md hover:scale-110 transition-transform p-1 font-bold bg-custom-purple mx-1 w-1/5"
          onClick={checkBalance}
        >
          Check Balance
        </button>
        <button
          className="border border-custom-purple rounded-md hover:scale-110 transition-transform p-1 font-bold bg-custom-purple mx-1 w-1/5"
          onClick={sendToken}
        >
          Send Token
        </button>
      </div>
    </>
  );
}
