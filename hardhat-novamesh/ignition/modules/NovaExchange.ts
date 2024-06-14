import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

const NovaExchangeModule = buildModule("NovaExchangeModule", (m) => {
  const novaExchange = m.contract("NovaExchange", [10 ** 18]);
  return { novaExchange };
});

export default NovaExchangeModule;
