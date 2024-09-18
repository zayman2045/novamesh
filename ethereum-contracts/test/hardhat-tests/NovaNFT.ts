import {ignition, ethers} from 'hardhat';
import NovaNftsModule from '../../ignition/modules/NovaNFT';
import {loadFixture} from "@nomicfoundation/hardhat-network-helpers";
import { expect } from 'chai';

describe("nova nft", () => {
    async function setup() {
        const deployment = await ignition.deploy(NovaNftsModule);
        const novaNFT = await ethers.getContractAt("NovaNFT", deployment.novaNft);
        const [signer] = await ethers.getSigners();
        return { novaNFT, signer };
    }
    
        it("should mint a new NFT to the recipient address", async () => {
        const { novaNFT, signer } = await loadFixture(setup);
        const tx = await novaNFT.mintNFT(signer.address, { value: ethers.parseEther("0.01") });
        await tx.wait(); // Wait for the transaction to be mined
        expect(await novaNFT.ownerOf(0)).to.equal(signer.address);
    });
})