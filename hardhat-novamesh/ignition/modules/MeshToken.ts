import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

const MeshTokenModule = buildModule("MeshToken", (m) => {
  const meshToken = m.contract("MeshToken", [0]);
  return { meshToken };
});

export default MeshTokenModule;
