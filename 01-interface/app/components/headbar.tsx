const Headbar = () => {
    return (
        <div className='flex justify-between items-center p-4 bg-gradient-to-r from-black via-white to-gray-400'>
            <div className='text-6xl font-bold text-white'>theKiengineer</div>
            <nav className='flex gap-6'>
                <a href="#about" className='text-gray-800 hover:text-gray-600 transition-colors'>Blogs</a>
                <a href="#projects" className='text-gray-800 hover:text-gray-600 transition-colors'>About</a>
                <a href="#contact" className='text-gray-800 hover:text-gray-600 transition-colors'>Contact</a>
            </nav>
        </div>
    )
}

export default Headbar