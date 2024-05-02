import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { EthereumProvider } from "./components/EthereumProvider";
import { SolanaProvider } from "./components/SolanaProvider";
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
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gray-800 text-white`}>
        <EthereumProvider>
          <SolanaProvider>
            <NavBar />
            {children}
          </SolanaProvider>
        </EthereumProvider>
      </body>
    </html>
  );
}
