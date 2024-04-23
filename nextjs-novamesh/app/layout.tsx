import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { EthereumProvider } from "./components/EthereumProvider";
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
      <body className={inter.className}>
        <EthereumProvider>
          <NavBar />
          {children}
        </EthereumProvider>
      </body>
    </html>
  );
}
