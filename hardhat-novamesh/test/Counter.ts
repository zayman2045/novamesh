import { expect, assert } from "chai"
import { Counter, Counter__factory } from "../typechain-types"
import { ethers } from "hardhat"

describe("counter", () => {

    let counter: Counter;
    let counterFactory: Counter__factory;

    beforeEach(async () => {
        counterFactory = await ethers.getContractFactory("Counter");
        counter = await counterFactory.deploy();
    })

    it("initialize counter", async () => {
        const actualValue = Number(await counter.s_counter());
        const expectedValue = 0;
        assert.equal(expectedValue, actualValue);
    })

    it("increment counter", async () => {
        await counter.increment();
        const actualValue = await counter.s_counter();
        const expectedValue = 1;
        expect(expectedValue).to.equal(actualValue);
    })
})