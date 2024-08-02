import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

const NovaTokenModule = buildModule("NovaTokenModule", (m) => {
  const novaToken = m.contract("NovaToken");
  return { novaToken };
});

export default NovaTokenModule;
