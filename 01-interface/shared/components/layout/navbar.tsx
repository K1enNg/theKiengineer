import Link from 'next/link';
import { Command, CommandInput, CommandList, CommandEmpty } from "@/components/ui/command";
import { ROUTES } from '@/config/routes';

const Navbar: React.FC = () => {
    return (
        <nav className="w-full">
            <div className="container mx-auto px-4 py-4 flex justify-between items-center">
                <div className="flex items-center space-x-8">
                    <Link href={ROUTES.HOMEPAGE} className="text-xl font-bold">
                        theKiengineer
                    </Link>
                    <div className="hidden md:flex space-x-6">
                        <Link href={ROUTES.BLOGS.LIST} className="transition-colors">Blogs</Link>
                        <Link href={ROUTES.ABOUT} className="transition-colors">About</Link>
                    </div>
                </div>

                <div className="flex items-center space-x-4">
                    <Command>
                        <CommandInput placeholder="Search..." />
                    </Command>
                </div>

                <div className="flex items-center space-x-4">
                    <button className="bg-black text-white px-4 py-2 rounded-md hover:bg-gray-800 transition-colors">
                        Subscribe
                    </button>
                    <div>
                        <Link href={ROUTES.AUTH.SIGNIN} className="transition-colors text-color-gray-600">Are you author?</Link>
                    </div>
                </div>
            </div>

            <div className="border-b border-gray-200 w-full"></div>
        </nav>
    );
};

export default Navbar;