import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

const NovaMeshExchangeModule = buildModule("NovaMeshExchange", (m) => {
    const novaMeshExchange = m.contract("NovaMeshExchange", ["0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512", "0x9fE46736679d2D9a65F0992F2272dE9f3c7fa6e0"]);

    return {novaMeshExchange};
})

export default NovaMeshExchangeModule;