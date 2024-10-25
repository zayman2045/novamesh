import * as anchor from "@coral-xyz/anchor";
import { Program } from "@coral-xyz/anchor";
import { MeshToken } from "../target/types/mesh_token";
import {
  TOKEN_PROGRAM_ID,
  MINT_SIZE,
  createAssociatedTokenAccountInstruction,
  getAssociatedTokenAddress,
  createInitializeMintInstruction,
} from "@solana/spl-token";
import { assert } from "chai";

describe("mesh-token", () => {
  // Configure the client to use the local cluster.
  anchor.setProvider(anchor.AnchorProvider.env());
  // Retrieve the MeshToken struct from our smart contract
  const program = anchor.workspace.MeshToken as Program<MeshToken>;
  // Generate a random keypair that will represent our token
  const mintKey: anchor.web3.Keypair = anchor.web3.Keypair.generate();
  // AssociatedTokenAccount for anchor's workspace wallet
  let associatedTokenAccount = undefined;

  it("Mint a token", async () => {
    // Get anchor's wallet's public key
    const key = anchor.AnchorProvider.env().wallet.publicKey;
    // Get the amount of SOL needed to pay rent for our Token Mint
    const lamports: number =
      await program.provider.connection.getMinimumBalanceForRentExemption(
        MINT_SIZE
      );

    // Get the ATA for a token and the account that we want to own the ATA (but it might not exist on the SOL network yet)
    associatedTokenAccount = await getAssociatedTokenAddress(
      mintKey.publicKey,
      key
    );

    // Fires a list of instructions
    const mint_tx = new anchor.web3.Transaction().add(
      // Use anchor to create an account from the mint key that we created
      anchor.web3.SystemProgram.createAccount({
        fromPubkey: key,
        newAccountPubkey: mintKey.publicKey,
        space: MINT_SIZE,
        programId: TOKEN_PROGRAM_ID,
        lamports,
      }),
      // Fire a transaction to create our mint account that is controlled by our anchor wallet
      createInitializeMintInstruction(mintKey.publicKey, 0, key, key),
      // Create the ATA account that is associated with our mint on our anchor wallet
      createAssociatedTokenAccountInstruction(
        key,
        associatedTokenAccount,
        key,
        mintKey.publicKey
      )
    );

    // sends and create the transaction
    const res = await anchor.AnchorProvider.env().sendAndConfirm(mint_tx, [
      mintKey,
    ]);

    console.log(
      await program.provider.connection.getParsedAccountInfo(mintKey.publicKey)
    );

    console.log("Account: ", res);
    console.log("Mint key: ", mintKey.publicKey.toString());
    console.log("User: ", key.toString());

    // Executes our code to mint our token into our specified ATA
    await program.methods
      .mintToken()
      .accounts({
        mint: mintKey.publicKey,
        tokenAccount: associatedTokenAccount,
        authority: key,
      })
      .rpc();

    // Get minted token amount on the ATA for our anchor wallet
    const accountInfo = await program.provider.connection.getParsedAccountInfo(
      associatedTokenAccount
    );

    if (accountInfo === null) {
      throw new Error("Account info is null");
    }

    if ("parsed" in accountInfo.value.data) {
      const minted = accountInfo.value.data.parsed.info.tokenAmount.amount;
      assert.equal(minted, 10);
    } else {
      throw new Error("Failed to parse account info");
    }
  });

  it("Transfer token", async () => {
    // Get anchor's wallet's public key
    const myWallet = anchor.AnchorProvider.env().wallet.publicKey;
    // Wallet that will receive the token
    const toWallet: anchor.web3.Keypair = anchor.web3.Keypair.generate();
    // The ATA for a token on the to wallet (but might not exist yet)
    const toATA = await getAssociatedTokenAddress(
      mintKey.publicKey,
      toWallet.publicKey
    );

    // Fires a list of instructions
    const mint_tx = new anchor.web3.Transaction().add(
      // Create the ATA account that is associated with our To wallet
      createAssociatedTokenAccountInstruction(
        myWallet,
        toATA,
        toWallet.publicKey,
        mintKey.publicKey
      )
    );

    // Sends and create the transaction
    await anchor.AnchorProvider.env().sendAndConfirm(mint_tx, []);

    // Executes our transfer smart contract
    await program.methods
      .transferToken()
      .accounts({
        from: associatedTokenAccount,
        fromAuthority: myWallet,
        to: toATA,
      })
      .rpc();

    // Get minted token amount on the ATA for our anchor wallet
    const accountInfo = await program.provider.connection.getParsedAccountInfo(
      associatedTokenAccount
    );
    if (accountInfo === null) {
        throw new Error("Account info is null");
    }

    if ("parsed" in accountInfo.value.data) {
        const minted = accountInfo.value.data.parsed.info.tokenAmount.amount;
        assert.equal(minted, 5);
    } else {
        throw new Error("Failed to parse account info");
    }
  });
});
