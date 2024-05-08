import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

export default buildModule("Counter", (m) => {
  const counter = m.contract("Counter", []);

  m.call(counter, "increment", []);

  return { counter };
});
