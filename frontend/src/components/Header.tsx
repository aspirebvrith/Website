import Link from 'next/link';

const Header = () => {
  return (
    <header className="bg-gray-800 text-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold hover:text-gray-300">
          A.S.P.I.R.E Club
        </Link>
        <nav>
          <ul className="flex space-x-4">
            <li><Link href="/" className="hover:text-gray-300">Home</Link></li>
            <li><Link href="/events" className="hover:text-gray-300">Events</Link></li>
            <li><Link href="/learning-hub" className="hover:text-gray-300">Learning Hub</Link></li>
            <li><Link href="/projects" className="hover:text-gray-300">Projects</Link></li>
            <li><Link href="/about" className="hover:text-gray-300">About Us</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
