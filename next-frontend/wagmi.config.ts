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
            [sepolia.id]: "0x82E6E83ADcD22a0B4C376575E1B03347553b4eA4",
          },
        },
        {
          name: "EthUsdPriceConverter",
          address: {
            [sepolia.id]: "0x4b5Af4A571E51ABE9e74fF323f46930fc7CCDe41",
          },
        },
        {
          name: "NovaNFT",
          address: {
            [sepolia.id]: "0x640157b367b350589E68197E16B964273302d8BB",
          },
        },
      ],
    }),
    react(),
  ],
});
