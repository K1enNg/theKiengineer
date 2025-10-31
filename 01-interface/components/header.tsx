import React from 'react';

const Header = () => {
    return (
        <div className='w-full'>
            <header className="py-16 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <h1 className="text-6xl font-bold text-left leading-tight">
                        Where we talk about tech, engineering and philosophy
                    </h1>
                </div>
            </header>
            <div className="border-b border-gray-200 w-full"></div>
        </div>
    );
};

export default Header;