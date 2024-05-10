import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

export default buildModule("Auction", (m) => {
    const auction = m.contract("Auction");
    m.call(auction, "placeBid", [10]);
    return { auction }
})