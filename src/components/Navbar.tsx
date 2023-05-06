import Image from 'next/image'
import Link from 'next/link'
import { useState, useEffect, useRef } from 'react'

const Navbar = () => {
    const [showFixedNavbar, setShowFixedNavbar] = useState(false)
    const navbarRef = useRef<HTMLDivElement>(null)
    const [navbarSystemHeight, setNavbarSystemHeight] = useState(0)
    const [isSmallScreen, setIsSmallScreen] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY
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
        const calculateNavbarSystemHeight = () => {
            if (navbarRef.current) {
                const navbar = navbarRef.current
                const topStripe = navbar.querySelector('.top-stripe') as HTMLDivElement
                const mainNav = navbar.querySelector('.main-nav') as HTMLDivElement
                const ctaButton = navbar.querySelector('.cta-button') as HTMLDivElement

                const topStripeOffsetHeight = topStripe ? topStripe.offsetHeight : 0
                const mainNavOffsetHeight = mainNav ? mainNav.offsetHeight : 0
                const ctaButtonOffsetHeight = ctaButton ? ctaButton.offsetHeight : 0

                let navbarSystemOffsetHeight = topStripeOffsetHeight + mainNavOffsetHeight

                return navbarSystemOffsetHeight
            }
            return 0
        }

        const handleResize = () => {
            const navbarSystemOffsetHeight = calculateNavbarSystemHeight()
            setNavbarSystemHeight(navbarSystemOffsetHeight)
            setIsSmallScreen(window.innerWidth < 1020)
        }

        handleResize()
        window.addEventListener('resize', handleResize)

        return () => {
            window.removeEventListener('resize', handleResize)
        }
    }, [])

    const Logo = () => (
        <Link href="/" className="flex items-center h-full pl-12 pr-12 border-r">
            <div className="flex items-center w-[150px] h-full" style={{ overflow: 'hidden' }}>
                <Image src="/korpens-logotype-black.svg" alt="Logo" width={300} height={150} />
            </div>
        </Link>
    )

    const MenuItems = () => (
        <div className="flex items-center justify-center px-14 w-full text-sm uppercase leading-none">
            <ul className="flex justify-around w-full">
                <li>
                    <Link href="/korpensoga">Korpens&nbsp;Öga</Link>
                </li>
                <li>
                    <Link href="/kontakt">Kontakt</Link>
                </li>
                <li className="hidden lg:block">
                    <Link href="/lankar">Länkar</Link>
                </li>
                <li className="hidden lg:block">
                    <Link href="/bildgalleri">Bildgalleri</Link>
                </li>
                <li className="hidden lg:block">
                    <Link href="/nyheter">Nyheter</Link>
                </li>
                <li className="hidden lg:block">
                    <Link href="/english">English</Link>
                </li>
            </ul>
        </div>
    )

    const CallToAction = () => (
        <div className="cta-button hidden xl:flex items-center h-full bg-slate-400 text-xl uppercase leading-none px-10">
            <div>BOKA&nbsp;TUR</div>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="ml-2 w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
            </svg>
        </div>
    )

    return (
        <>
            {/* Navbar first instance */}
            <div ref={navbarRef} style={{ minHeight: navbarSystemHeight }}>
                <div>
                    {/* Top-stripe */}
                    <div className="top-stripe hidden text-white text-base leading-none font-serif bg-gray-700 md:flex items-center justify-between px-6 py-4">
                        <div className="font-sans font-bold">070-668 00 68</div>
                        <div>Kundomdömen</div>
                        <div>Kontakta oss</div>
                    </div>
                    {/* Main-navbar */}
                    <header className={`main-nav z-50 bg-white h-[70px] xl:h-[100px] w-full ${showFixedNavbar ? 'hidden' : 'relative'}`}>
                        <div className="mx-auto flex items-center justify-between absolute inset-0">
                            <Logo />
                            <MenuItems />
                            <CallToAction />
                        </div>
                    </header>
                </div>
            </div>
            {/* Navbar second instance */}
            <header
                className={`z-50 bg-white fixed top-0 left-0 h-[70px] xl:h-[100px] w-full transition-transform duration-500 ${
                    showFixedNavbar ? 'translate-y-0' : '-translate-y-full'
                }`}
            >
                <div className="mx-auto flex items-center justify-between absolute inset-0">
                    <Logo />
                    <MenuItems />
                    <CallToAction />
                </div>
            </header>
        </>
    )
}

export default Navbar
