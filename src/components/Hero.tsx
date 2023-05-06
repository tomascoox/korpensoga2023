import Image from 'next/image'

const HeroImage = () => {
    return (
        <div className="w-full h-[250px] md:h-[600px] lg:h-[800px] xl:h-[800px] 2xl:h-[800px] relative">
            <Image alt="Hero" src="/Hast-profil-fran-vanster-smaller.jpg" fill style={{ objectFit: 'cover' }} className="lg:clip-path-heroClip" />
            <div className="absolute w-full h-full flex flex-col items-center justify-center text-white">
                <div className='text-center font-bebas-neue text-5xl md:text-8xl lg:text-7xl xl:text-8xl'>UPPLEVELSER I FJÄRRAN</div>
                <div className='text-center font-serif text-lg md:text-2xl lg:text-2xl xl:text-3xl'>Oförglömliga turer i den svenska fjällvärlden</div>
            </div>
        </div>
    )
}

export default HeroImage
