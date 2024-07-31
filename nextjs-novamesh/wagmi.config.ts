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
          name: "NovaExchange",
          address: {
            [sepolia.id]: "0xf804301E3d1D479D14863a4F431793df12969669",
          },
        },
      ],
    }),
    react(),
  ],
});
