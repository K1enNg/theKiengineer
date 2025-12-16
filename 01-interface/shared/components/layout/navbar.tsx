"use client"

import Link from 'next/link';
import { Command, CommandInput, CommandList, CommandEmpty } from "@/components/ui/command";
import { Button } from "@/components/ui/button";
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
                        <Link href={ROUTES.COURSES} className="transition-colors">Courses</Link>
                    </div>
                </div>

                <div className="flex items-center space-x-4">
                    <Command>
                        <CommandInput placeholder="Search..." />
                    </Command>
                </div>

                <div className="flex items-center space-x-4">
                    <Link href={ROUTES.SUBSCRIBE}>
                        <Button className="bg-black text-white hover:bg-gray-800">
                            Subscribe
                        </Button>
                    </Link>
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