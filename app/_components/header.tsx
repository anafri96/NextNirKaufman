import Link from "next/link";

export default function Header() {
  return (
    <div>
      <header className="bg-blue-300 py-4">
        <nav className="container mx-auto flex items-center justify-between">
          <h1 className="text-white text-2xl font-bold">My Blog</h1>
          <ul className="flex space-x-4">
            <Link href={"/"}>Home</Link>
            <Link href={"posts"}>Posts</Link>
            <Link href={"photos"}>Photos</Link>
            <Link href={"about"}>About</Link>
          </ul>
        </nav>
      </header>
    </div>
  );
}
