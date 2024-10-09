import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { SolanaProvider } from "./(connection)/SolanaProvider";
import EthereumProvider from "./(connection)/EthereumProvider";
import "./globals.css";
import NavBar from "./(connection)/NavBar";

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
    // Retrieve the Wallet Connect project ID from environment variables
  const projectId = process.env.WALLET_CONNECT_PROJECT_ID;
  
  // Check if the project ID is defined
  if (!projectId) {
    // Throw an error if the project ID is not defined
    throw new Error("WALLET_CONNECT_PROJECT_ID is not defined");
  }

  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-gray-300 text-white bg-custom-background bg-cover bg-center h-screen bg-fixed`}
      >
        <EthereumProvider projectId={projectId}>
          <SolanaProvider>
            <NavBar />
            <main>{children}</main>
          </SolanaProvider>
        </EthereumProvider>
      </body>
    </html>
  );
}
