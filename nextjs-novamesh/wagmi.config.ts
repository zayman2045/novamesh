import { defineConfig } from "@wagmi/cli";
import { etherscan, react } from "@wagmi/cli/plugins";
import { sepolia } from "wagmi/chains";
import { erc20Abi } from "viem";
import * as dotenv from 'dotenv';
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
          name: "Counter",
          address: {
            [sepolia.id]: "0xA91FA55aE9cb5d1f4701177C99Cd7E418940CCa2",
          },
        },
      ],
    }),
    react(),
  ],
});
