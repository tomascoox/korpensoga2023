import Image from 'next/image'

const HeroImage = () => {
    return (
        <div className="w-full h-[400px] md:h-[600px] lg:h-[800px] xl:h-[800px] 2xl:h-[800px] relative">
            <Image
                alt="Hero"
                src="/Hast-profil-fran-vanster-smaller.jpg"
                fill
                style={{ objectFit: 'cover' }}
                className="lg:clip-path-heroClip"
            />
            <div className='absolute w-full h-full flex items-center justify-center font-bebas-neue text-white text-3xl md:text-5xl lg:text-7xl xl:text-8xl'>
                UPPLEVELSER I FJÄRRAN
            </div>
        </div>
    )
}

export default HeroImage
