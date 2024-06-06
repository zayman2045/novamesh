import { expect } from "chai";
import { ethers, ignition } from "hardhat";
import { loadFixture } from "@nomicfoundation/hardhat-network-helpers";
import NovaTokenModule from "../ignition/modules/NovaToken";

describe("nova token", () => {
    const setup = async () => {
        return ignition.deploy(NovaTokenModule);
    }

    it("initial supply is 0", async () => {
        const {novaToken} = await loadFixture(setup);
        const [deployer] = await ethers.getSigners();
        expect(await novaToken.balanceOf(deployer)).to.equal(0);
    })
})
