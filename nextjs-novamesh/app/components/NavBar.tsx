import Link from "next/link";

export default function NavBar() {
  return (
    <nav className="flex items-center justify-between p-6 bg-purple-800">
      <Link href="/">
        <h1 className="text-2xl text-white">NovaMesh</h1>
      </Link>
      <div className="flex justify-around flex-grow">
        <Link href="/programs">
          <p className="text-white hover:text-purple-300 cursor-pointer">
            Programs
          </p>
        </Link>
        <Link href="/explore">
          <p className="text-white hover:text-purple-300 cursor-pointer">
            Explore
          </p>
        </Link>
        <Link href="/swap">
          <p className="text-white hover:text-purple-300 cursor-pointer">
            Swap
          </p>
        </Link>
        <Link href="/nfts">
          <p className="text-white hover:text-purple-300 cursor-pointer">
            NFTs
          </p>
        </Link>
      </div>
      <button className="bg-white text-purple-500 hover:bg-purple-300 hover:text-white py-2 px-4 rounded">
        Connect
      </button>
    </nav>
  );
}
