import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

// Build a hardhat ignition module to deploy the NovaNFTs contract
const NovaNftModule = buildModule("NovaNftModule", (m) => {
  const subscriptionId = BigInt(
    "34704273272032350667748017644232312045489273309779925904012839592426966833516"
  );
  console.log("Subscription ID:", subscriptionId);
  const novaNft = m.contract("NovaNFT", [subscriptionId]);
  return { novaNft };
});

export default NovaNftModule;
