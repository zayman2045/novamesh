import Link from "next/link";

export default function NavBar() {
  return (
    <nav className="flex justify-between items-center p-6 bg-custom-green bg-opacity-75">
      <Link href="/">
        <h1 className="text-2xl text-white ml-10">NovaMesh</h1>
      </Link>
      <div className="flex justify-between space-x-16">
        <Link href="/programs">
          <p className="text-white hover:text-purple-800 cursor-pointer pb-2 border-b-2 border-white hover:border-purple-800">
            Programs
          </p>
        </Link>
        <Link href="/explore">
          <p className="text-white hover:text-purple-800 cursor-pointer pb-2 border-b-2 border-white hover:border-purple-800">
            Explore
          </p>
        </Link>
        <Link href="/swap">
          <p className="text-white hover:text-purple-800 cursor-pointer pb-2 border-b-2 border-white hover:border-purple-800">
            Swap
          </p>
        </Link>
        <Link href="/nfts">
          <p className="text-white hover:text-purple-800 cursor-pointer pb-2 border-b-2 border-white hover:border-purple-800">
            NFTs
          </p>
        </Link>
      </div>
      <button className="bg-white text-purple-500 hover:bg-purple-500 hover:text-white py-2 px-4 rounded mr-10">
        Connect
      </button>
    </nav>
  );
}