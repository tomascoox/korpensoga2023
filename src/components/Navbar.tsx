import Link from 'next/link'

const Navbar = () => {
    return (
        <>
            <header className="w-full fixed top-0 z-50 bg-white shadow-md">
                <div className="container mx-auto px-4 py-2">
                    <nav className="flex items-center justify-between">
                        {/* Logo */}
                        <div>
                            <Link href="/">
                                {/* Replace with your logo */}
                                <span className="cursor-pointer text-xl font-bold">Logo</span>
                            </Link>
                        </div>

                        {/* Navigation items */}
                        <ul className="hidden md:flex items-center space-x-6">
                            {/* Replace with your navigation items */}
                            <li>
                                <Link href="/about">
                                    <span className="cursor-pointer text-gray-700">About</span>
                                </Link>
                            </li>
                            {/* Add more navigation items */}
                        </ul>
                    </nav>
                </div>
            </header>

            {/* Bottom navigation for small screens */}
            <div className="w-full fixed bottom-0 z-50 bg-white shadow-md block md:hidden">
                <div className="container mx-auto px-4 py-2">
                    <ul className="flex items-center justify-center space-x-6">
                        {/* Add your bottom navigation items for small screens here */}
                        <li>
                            <Link href="/about">
                                <span className="cursor-pointer text-gray-700">About</span>
                            </Link>
                        </li>
                        {/* Add more bottom navigation items */}
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Navbar
