import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

// Build a hardhat ignition module to deploy the NovaNFTs contract
const NovaNftsModule = buildModule("NovaNftsModule", (m) => {
  const novaNfts = m.contract("NovaNFTs");
  return { novaNfts };
});

export default NovaNftsModule;
