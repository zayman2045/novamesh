"use client";

import Link from "next/link";
import Image from "next/image";
import novameshLogo from "@/public/novamesh-title-text.png";
import githubLogo from "@/public/github-logo.png";

export default function NavBar() {
  return (
    <nav className="flex justify-between items-center p-2 bg-custom-green bg-opacity-75">
      <Link href="/">
        <Image
          src={novameshLogo}
          alt="NovaMesh Logo"
          className="ml-10"
          width={225}
          height={100}
        />
      </Link>
      <div className="flex justify-between space-x-8 mr-8">
        <Link href="/ethereum">
          <p className="text-white font-semibold hover:text-custom-blue cursor-pointer  hover:border-blue-800">
            Ethereum
          </p>
        </Link>
        <Link href="/solana">
          <p className="text-white font-semibold hover:text-custom-purple cursor-pointer">
            Solana
          </p>
        </Link>
        <a href="https://github.com/zayman2045/novamesh">
          <Image src={githubLogo} alt="Github Logo" width={25} height={25} />
        </a>
      </div>
    </nav>
  );
}
