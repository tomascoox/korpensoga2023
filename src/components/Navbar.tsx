import Image from 'next/image'
import Link from 'next/link'
import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const useObserveElement = (elementRef: React.RefObject<HTMLElement>, callback: (entry: IntersectionObserverEntry) => void) => {
    useEffect(() => {
        const element = elementRef.current
        const observer = new IntersectionObserver(
            ([entry]) => {
                callback(entry)
            },
            {
                threshold: 0,
            }
        )

        if (element) observer.observe(element)

        return () => {
            if (element) observer.unobserve(element)
        }
    }, [elementRef, callback])
}

const Navbar = () => {
    // Setup variables
    const [showScrollUpNavbar, setShowScrollUpNavbar] = useState(false)
    const navbarRef = useRef<HTMLDivElement>(null)
    const [navbarSystemHeight, setNavbarSystemHeight] = useState(0)
    const [showBottomMenu, setShowBottomMenu] = useState(false)

    // Toggle bottommenu & Framer Motion-settings
    const toggleBottomMenu = () => {
        setShowBottomMenu(prevShowBottomMenu => !prevShowBottomMenu)
    }

    // Check scroll and height of navbar-system and set variable showFixedNavbar accordingly
    const handleIntersection = (entry: IntersectionObserverEntry) => {
        const isIntersecting = entry.isIntersecting
        setShowScrollUpNavbar(!isIntersecting)
        setNavbarSystemHeight(isIntersecting ? navbarRef.current?.offsetHeight || 0 : 0)
    }

    useObserveElement(navbarRef, handleIntersection)

    const topStripeRef = useRef<HTMLDivElement>(null)
    const mainNavRef = useRef<HTMLDivElement>(null)
    const ctaButtonRef = useRef<HTMLDivElement>(null)

    // Calculate navbar-system height on page-load and on subsequent resizing
    useEffect(() => {
        const calculateNavbarSystemHeight = (topStripe: HTMLElement | null, mainNav: HTMLElement | null, ctaButton: HTMLElement | null) => {
            const topStripeOffsetHeight = topStripe ? topStripe.offsetHeight : 0
            const mainNavOffsetHeight = mainNav ? mainNav.offsetHeight : 0
            const ctaButtonOffsetHeight = ctaButton ? ctaButton.offsetHeight : 0

            let navbarSystemOffsetHeight = topStripeOffsetHeight + mainNavOffsetHeight + ctaButtonOffsetHeight

            return navbarSystemOffsetHeight
        }

        const handleResize = () => {
            const navbarSystemOffsetHeight = calculateNavbarSystemHeight(topStripeRef.current, mainNavRef.current, ctaButtonRef.current)
            setNavbarSystemHeight(navbarSystemOffsetHeight)
        }

        handleResize()
        window.addEventListener('resize', handleResize)

        return () => {
            window.removeEventListener('resize', handleResize)
        }
    }, [])

    // Create logo-html
    const Logo = () => (
        <Link href="/" className="flex items-center h-full pl-12 pr-12 sm:border-r">
            <div className="flex items-center w-[150px] h-full" style={{ overflow: 'hidden' }}>
                <Image src="/korpens-logotype-black.svg" alt="Logo" width={300} height={150} />
            </div>
        </Link>
    )

    // Create menuitems-html
    const MenuItems = () => (
        <div className="flex items-center justify-center px-14 w-full text-sm uppercase leading-none border-t sm:border-none py-3 sm:py-0">
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

    // Create call-to-action-html
    const CallToAction = () => (
        <div className="cta-button hidden xl:flex items-center h-full bg-[#352929] text-xl uppercase leading-none px-10 text-white font-bold">
            <div>BOKA&nbsp;TUR</div>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="ml-2 w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
            </svg>
        </div>
    )

    const BottomNav = () => (
        <div className="relative">
            <div className="lg:hidden flex justify-between bg-gray-700 fixed bottom-0 h-[45px] w-full text-white z-30">
                <div className="bg-[#352929] px-4 flex justify-center items-center font-bold text-sm">BOKA&nbsp;TUR</div>
                <div className="flex flex-grow justify-start items-center col-span-2 ml-2 font-bold text-sm">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3"
                        />
                    </svg>
                    070-668 00 68
                </div>
                <div className="bg-[#352929] w-[40px] grid justify-center items-center cursor-pointer" onClick={toggleBottomMenu}>
                    {!showBottomMenu && (
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="w-6 h-6"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                        </svg>
                    )}
                    {showBottomMenu && (
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="w-6 h-6"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    )}
                </div>
            </div>
        </div>
    )

    const BottomMenu = () => {
        return (
            <motion.div
                key="bottommenu"
                initial={{ y: '100%' }}
                animate={{ y: 0 }}
                exit={{ y: '100%' }}
                transition={{ duration: 0.3, ease: 'easeOut' }}
                className={`fixed left-0 top-[${navbarSystemHeight}px] w-full h-screen bg-white p-4 z-20`}
            >
                {navbarSystemHeight}
                <MenuItems />
            </motion.div>
        )
    }

    return (
        <>
            <div ref={navbarRef}>
                {/* Navbar first instance - This one sits at the top and moves with the page-scroll */}
                <div>
                    <div>
                        {/* Top-stripe */}
                        <div className="top-stripe hidden text-white text-base leading-none font-serif bg-gray-700 md:flex items-center justify-between px-6 py-4">
                            <div className="font-sans font-bold">070-668 00 68</div>
                            <div>Kundomdömen</div>
                            <div>Kontakta oss</div>
                        </div>
                        {/* Main-navbar */}
                        <header className={`main-nav z-50 bg-white h-[100px] sm:h-[70px] xl:h-[100px] w-full sticky top-0 shadow-md`}>
                            <div className="mx-auto flex flex-col sm:flex-row items-center justify-between absolute inset-0">
                                <Logo />
                                <MenuItems />
                                <CallToAction />
                            </div>
                        </header>
                    </div>
                </div>
                {/* Navbar second instance - This one appears in an animation from the top when user has scrolled as far as the height of the first instance of navbar above */}
                <header
                    className={`z-50 bg-white fixed top-0 left-0 h-[100px] sm:h-[70px] xl:h-[100px] w-full transition-transform duration-500 ${
                        showScrollUpNavbar ? 'translate-y-0 shadow-md' : '-translate-y-full'
                    }`}
                >
                    <div className="mx-auto flex flex-col sm:flex-row items-center justify-between absolute inset-0">
                        <Logo />
                        <MenuItems />
                        <CallToAction />
                    </div>
                </header>
            </div>


            {/* Bottom-nav which appears on small screens */}
            <BottomNav />
            {/* <BottomMenu /> */}
            <AnimatePresence>{showBottomMenu && <BottomMenu />}</AnimatePresence>
        </>
    )
}

export default Navbar
