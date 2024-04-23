import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { EthereumProvider } from "./components/EthereumProvider";
import "./globals.css";

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
        <EthereumProvider>{children}</EthereumProvider>
      </body>
    </html>
  );
}
