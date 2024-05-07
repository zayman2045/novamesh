import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { SolanaProvider } from "./components/SolanaProvider";
import EthereumProvider from "./components/EthereumProvider";
import "./globals.css";
import NavBar from "./components/NavBar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "NovaMesh",
  description: "The Future of Connection",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const projectId = process.env.WALLET_CONNECT_PROJECT_ID;

  if (!projectId) {
    throw new Error('WALLET_CONNECT_PROJECT_ID is not defined');
  }

  return (
    <html lang="en">
      <body className={`${inter.className} bg-gray-800 text-white`}>
        <EthereumProvider projectId={projectId}>
          <SolanaProvider>
            <NavBar />
            {children}
          </SolanaProvider>
        </EthereumProvider>
      </body>
    </html>
  );
}
