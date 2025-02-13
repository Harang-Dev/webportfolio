import Link from 'next/link';
import '../styles/globals.css';

export default function Header() {
  return (
    <header className="bg-[#373737] text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-xl font-bold">
          <Link href="/">HW's Portfolio</Link>
        </div>

        {/* 네비게이션 */}
        <nav>
          <ul className="flex space-x-6">
            <li>
              <Link href="/" className="hover:text-gray-300">
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-gray-300">
                About
              </Link>
            </li>
            <li>
              <Link href="/project" className="hover:text-gray-300">
                Project
              </Link>
            </li>
            <li>
              <Link href="/board" className="hover:text-gray-300">
                Board
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
