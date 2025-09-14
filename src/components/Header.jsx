import Link from "next/link";
export default function Header() {
  return (
    <div className="flex justify-between items-center p-4 max-w-6xl mx-auto">
      {/* logo and title */}
      <div className="flex items-center space-x-1">
        <h2 className="text-2xl font-bold bg-amber-400 p-1">IMDB </h2>
        <span className="text-xl text-gray-500">Clone</span>
      </div>

      {/* navigation */}
      <div className="flex items-center space-x-4">
    
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/contact"> <button className="bg-amber-400 px-4 py-2 rounded-4xl">Get Started</button></Link>
      
      </div>
      
    </div>
  );
}
