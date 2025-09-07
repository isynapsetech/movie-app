import Link from "next/link";
import SwitchTheme from "./SwitchTheme";

export default function Header() {
  return (
    <div className="flex justify-between items-center p-3 max-w-6xl mx-auto">
      <ul className="flex gap-4">
        <li>
          <Link href="/sign-in">Sign In</Link>
        </li>
        <li className="hidden sm:block">
          <Link href="/">Home</Link>
        </li>
        <li className="hidden sm:block">
          <Link href="/about">About</Link>
        </li>
      </ul>
      <div className="flex items-center gap-2">
        <SwitchTheme />
        <Link href="/">
          <span className="text-2xl font-bold bg-amber-400 text-black px-2 py-1 rounded-md mr-2">
            IMDB
          </span>
          <span className="text-xl font-bold">Clone</span>
        </Link>
      </div>
    </div>
  );
}
