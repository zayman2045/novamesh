import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

const NovaTokenModule = buildModule("NovaToken", (m) => {
  const novaToken = m.contract("NovaToken", [0]);
  return { novaToken };
});

export default NovaTokenModule;
