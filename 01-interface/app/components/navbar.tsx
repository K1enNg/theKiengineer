import Link from 'next/link';

const Navbar = () => {
    return (
        <nav className="w-full">
            <div className="container mx-auto px-4 py-4 flex justify-between items-center">
                <div className="flex items-center space-x-8">
                    <Link href="/" className="text-xl font-bold">
                        Kiengineer
                    </Link>
                    <div className="hidden md:flex space-x-6">
                        <Link href="/blogs" className="transition-colors">Blogs</Link>
                        <Link href="/about" className="transition-colors">About</Link>
                    </div>
                </div>

                <button className="bg-black text-white px-4 py-2 rounded-md hover:bg-gray-800 transition-colors">
                    Subscribe
                </button>
            </div>

            <div className="border-b border-gray-200 w-full"></div>
        </nav>
    );
};

export default Navbar;