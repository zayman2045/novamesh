import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

// Build a hardhat ignition module to deploy to NovaToken contract
const NovaTokenModule = buildModule("NovaTokenModule", (m) => {
  const novaToken = m.contract("NovaToken");
  return { novaToken };
});

export default NovaTokenModule;
