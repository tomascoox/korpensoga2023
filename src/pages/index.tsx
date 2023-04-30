import Head from 'next/head'
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'

export default function Home() {
    return (
        <>
            <Head>
                <title>korpensoga.com</title>
                <meta name="description" content="Adventure Tours - Guided horse tours in the mountains of northern Sweden" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Navbar />

            <div className="mt-[50px] md:mt-[50px]">
                <Hero />
            </div>
            <main className="container mx-auto px-4 mt-[36px] md:mt-[36px] mb-4">
                <div className="prose prose-lg">
                    <h1>Welcome to Korpensoga</h1>
                    <h2>Underrubrik</h2>
                    <p>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores tempora perspiciatis officia consequatur modi quos rerum,
                        sed alias! Sed architecto culpa repudiandae maxime magni minima tempore animi, expedita incidunt ducimus fugit sit assumenda
                        pariatur neque natus asperiores, officia recusandae. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores tempora
                        perspiciatis officia consequatur modi quos rerum, sed alias! Sed architecto culpa repudiandae maxime magni minima tempore
                        animi, expedita incidunt ducimus fugit sit assumenda pariatur neque natus asperiores, officia recusandae.
                    </p>
                    <h2>Underrubrik</h2>
                    <p>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores tempora perspiciatis officia consequatur modi quos rerum,
                        sed alias! Sed architecto culpa repudiandae maxime magni minima tempore animi, expedita incidunt ducimus fugit sit assumenda
                        pariatur neque natus asperiores, officia recusandae. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores tempora
                        perspiciatis officia consequatur modi quos rerum, sed alias! Sed architecto culpa repudiandae maxime magni minima tempore
                        animi, expedita incidunt ducimus fugit sit assumenda pariatur neque natus asperiores, officia recusandae.
                    </p>
                </div>
            </main>
        </>
    )
}
