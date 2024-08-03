import { defineConfig } from "@wagmi/cli";
import { etherscan, react } from "@wagmi/cli/plugins";
import { sepolia } from "wagmi/chains";
import { erc20Abi } from "viem";
import * as dotenv from "dotenv";
dotenv.config();

export default defineConfig({
  out: "src/generated.ts",
  contracts: [
    {
      name: "erc20",
      abi: erc20Abi,
    },
  ],
  plugins: [
    etherscan({
      apiKey: process.env.ETHERSCAN_API_KEY!,
      chainId: sepolia.id,
      contracts: [
        {
          name: "NovaToken",
          address: {
            [sepolia.id]: "0x246fE1a68b3Bd77b6eb73ac5f312063805aDc485",
          },
        },
      ],
    }),
    react(),
  ],
});
