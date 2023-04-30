import Link from 'next/link'
import { useState, useEffect } from 'react'

const Navbar = () => {
    const [scrollY, setScrollY] = useState(0)
    const [showFixedNavbar, setShowFixedNavbar] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY
            setScrollY(currentScrollY)

            if (!showFixedNavbar && currentScrollY >= 60) {
                setShowFixedNavbar(true)
            } else if (showFixedNavbar && currentScrollY < 40) {
                setShowFixedNavbar(false)
            }
        }

        window.addEventListener('scroll', handleScroll)
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [showFixedNavbar])

    const NavbarContent = () => (
        <>
            {/* Logo */}
            <div>
                <Link href="/">Logo</Link>
            </div>

            {/* Navigation items */}
            <ul className="hidden md:flex items-center space-x-6">
                <li>
                    <Link href="/about">About</Link>
                </li>
            </ul>
        </>
    )

    return (
        <>
            <header className={`bg-white border-b absolute top-0 left-0 w-full ${showFixedNavbar ? 'hidden' : 'block'}`}>
                <div className="container mx-auto px-4 py-2">
                    <nav className="flex items-center justify-between">
                        <NavbarContent />
                    </nav>
                </div>
            </header>

            <header
                className={`bg-white border-b fixed top-0 left-0 w-full transition-transform duration-300 ${
                    showFixedNavbar ? 'translate-y-0' : '-translate-y-full'
                }`}
            >
                <div className="container mx-auto px-4 py-2">
                    <nav className="flex items-center justify-between">
                        <NavbarContent />
                    </nav>
                </div>
            </header>

            {/* Bottom navigation for small screens */}
            <div className="w-full fixed bottom-0 z-50 bg-white border-t shadow-md block md:hidden">
                <div className="container mx-auto px-4 py-2">
                    <ul className="flex items-center justify-center space-x-6">
                        <li>
                            <Link href="/about">About</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Navbar
