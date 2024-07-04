"use client";

import Link from "next/link";
import Image from "next/image";
import novameshLogo from "@/public/novamesh-title-text.png";
import githubLogo from "@/public/github-logo.png";

export default function NavBar() {
  return (
    <nav className="fixed top-0 left-0 w-full h-[4rem] flex justify-between items-center p-2 text-white">
      <Link href="/">
        <Image
          src={novameshLogo}
          alt="NovaMesh Logo"
          className="ml-4"
          width={225}
          height={100}
        />
      </Link>
      <div className="flex justify-between space-x-8 mr-4">
        <Link href="/ethereum">
          <p className="font-semibold hover:text-custom-blue cursor-pointer  hover:border-blue-800">
            Ethereum
          </p>
        </Link>
        <Link href="/solana">
          <p className="font-semibold hover:text-custom-purple cursor-pointer">
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
