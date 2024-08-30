import {ignition, ethers} from 'hardhat';
import NovaNftsModule from '../../ignition/modules/NovaNFTs';
import {loadFixture} from "@nomicfoundation/hardhat-network-helpers";
import { expect } from 'chai';

describe("nova nfts", () => {
    async function setup() {
        const deployment = await ignition.deploy(NovaNftsModule);
        const novaNFTs = await ethers.getContractAt("NovaNFTs", deployment.novaNfts);
        const [signer] = await ethers.getSigners();
        return { novaNFTs, signer };
    }
    
        it("should mint a new NFT to the recipient address", async () => {
        const { novaNFTs, signer } = await loadFixture(setup);
        const tx = await novaNFTs.mintNFT(signer.address, { value: ethers.parseEther("0.01") });
        await tx.wait(); // Wait for the transaction to be mined
        expect(await novaNFTs.ownerOf(0)).to.equal(signer.address);
    });
})