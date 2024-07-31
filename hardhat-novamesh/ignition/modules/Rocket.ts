import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

export default buildModule("Apollo", (m) => {
  const contract = m.contract("Rocket", ["Space-X"], {
    id: "Apollo_Space_X",
  });
  m.call(contract, "launch");
  return { contract };
});
