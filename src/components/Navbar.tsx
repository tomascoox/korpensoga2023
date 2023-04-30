import Link from 'next/link'
import { useState, useEffect, useRef } from 'react'

const Navbar = () => {
    const [scrollY, setScrollY] = useState(0)
    const [showFixedNavbar, setShowFixedNavbar] = useState(false)
    const navbarRef = useRef<HTMLDivElement>(null)
    const [navbarSystemHeight, setNavbarSystemHeight] = useState(0)
    const [isSmallScreen, setIsSmallScreen] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY
            setScrollY(currentScrollY)

            if (!showFixedNavbar && currentScrollY >= navbarSystemHeight) {
                setShowFixedNavbar(true)
            } else if (showFixedNavbar && currentScrollY < navbarSystemHeight) {
                setShowFixedNavbar(false)
            }
        }

        window.addEventListener('scroll', handleScroll)
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [navbarSystemHeight, showFixedNavbar])

    useEffect(() => {
        if (navbarRef.current) {
            const navbarOffsetHeight = navbarRef.current.offsetHeight
            const topStripeOffsetHeight = (navbarRef.current.querySelector('.bg-gray-200') as HTMLDivElement)?.offsetHeight || 0
            const mainNavOffsetHeight = (navbarRef.current.querySelector('.main-nav') as HTMLDivElement)?.offsetHeight || 0
            const navbarSystemOffsetHeight = navbarOffsetHeight + topStripeOffsetHeight + mainNavOffsetHeight
            setNavbarSystemHeight(navbarSystemOffsetHeight)
        }
    }, [])

    useEffect(() => {
        const handleResize = () => {
            setIsSmallScreen(window.innerWidth < 768)
        }

        handleResize()
        window.addEventListener('resize', handleResize)
        return () => {
            window.removeEventListener('resize', handleResize)
        }
    }, [])

    const MenuItems = ({ hiddenItems = [] }: { hiddenItems?: string[] }) => (
        <ul className="flex space-x-6">
            {!hiddenItems.includes('korpensoga') && (
                <li>
                    <Link href="/korpensoga">Korpens Öga</Link>
                </li>
            )}
            {!hiddenItems.includes('kontakt') && (
                <li>
                    <Link href="/kontakt">Kontakt</Link>
                </li>
            )}
            {!hiddenItems.includes('lankar') && (
                <li>
                    <Link href="/lankar">Länkar</Link>
                </li>
            )}
            {!hiddenItems.includes('bildgalleri') && (
                <li>
                    <Link href="/bildgalleri">Bildgalleri</Link>
                </li>
            )}
            {!hiddenItems.includes('nyheter') && (
                <li>
                    <Link href="/nyheter">Nyheter</Link>
                </li>
            )}
            {!hiddenItems.includes('english') && (
                <li>
                    <Link href="/english">English</Link>
                </li>
            )}
        </ul>
    )

    return (
        <>
            <div ref={navbarRef}>
                <div>
                    <div className="text-white text-xs bg-gray-700 flex items-center justify-between px-3 py-2">
                        <div>070-668 00 68</div>
                        <div>Kundomdömen</div>
                        <div>Kontakta oss</div>
                    </div>
                    <header className={`bg-white border-b w-full ${showFixedNavbar ? 'hidden' : 'absolute'}`}>
                        <div className="mx-auto px-3 py-2">
                            <nav className="flex items-center justify-between">
                                <div>
                                    <Link href="/">Logo</Link>
                                </div>
                                <MenuItems hiddenItems={isSmallScreen ? ['bildgalleri', 'nyheter', 'english'] : []} />
                            </nav>
                        </div>
                    </header>
                </div>
            </div>

            <header
                className={`bg-white border-b fixed top-0 left-0 w-full transition-transform duration-300 ${
                    showFixedNavbar ? 'translate-y-0' : '-translate-y-full'
                }`}
            >
                <div className="container mx-auto px-4 py-2">
                    <nav className="flex items-center justify-between">
                        <div>
                            <Link href="/">Logo</Link>
                        </div>
                        <MenuItems hiddenItems={isSmallScreen ? ['bildgalleri', 'nyheter', 'english'] : []} />
                    </nav>
                </div>
            </header>

            {isSmallScreen ? (
                <div className="w-full fixed bottom-0 bg-white border-t">
                    <div className="container mx-auto px-4 py-2">
                        <nav className="flex items-center justify-around">
                            <MenuItems hiddenItems={['korpensoga', 'kontakt', 'lankar']} />
                        </nav>
                    </div>
                </div>
            ) : (
                ''
            )}
        </>
    )
}

export default Navbar
