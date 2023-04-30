import Image from 'next/image'

const HeroImage = () => {
    return (
        <div className="w-full h-[230px] md:h-[400px] lg:h-[500px] xl:h-[650px] 2xl:h-[900px] relative">
            <Image
                alt="Hero"
                src="/Hast-profil-fran-vanster-smaller.jpg"
                fill
                style={{ objectFit: 'cover', clipPath: 'polygon(0 0, 100% 0, 100% 80%, 0 100%)' }}
            />
            <div className='absolute w-full h-full flex items-center justify-center font-bebas-neue text-white font-bold text-4xl md:text-6xl lg:text-8xl xl:text-9xl'>
                UPPLEVELSER I FJÄRRAN
            </div>
        </div>
    )
}

export default HeroImage
