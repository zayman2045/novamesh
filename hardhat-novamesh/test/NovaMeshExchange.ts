import { ignition, ethers } from "hardhat";
import NovaMeshExchangeModule from "../ignition/modules/NovaMeshExchange";
import { loadFixture } from "@nomicfoundation/hardhat-network-helpers";
import { expect } from "chai";

describe("novamesh exchange", () => {
  const setup = async () => {
    return ignition.deploy(NovaMeshExchangeModule);
  };
});
