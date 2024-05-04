import { mainnet, polygon, optimism, arbitrum, base } from "wagmi/chains";
import { getDefaultConfig } from "@rainbow-me/rainbowkit";

export const projectId = process.env.WALLET_CONNECT_PROJECT_ID!;

export const config = getDefaultConfig({
  appName: "NovaMesh",
  projectId,
  chains: [mainnet, polygon, optimism, arbitrum, base],
  ssr: true, // If your dApp uses server side rendering (SSR)
});
