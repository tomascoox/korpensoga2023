import Head from 'next/head'
import Navbar from '@/components/Navbar'

export default function Home() {
    return (
        <>
            <Head>
                <title>korpensoga.com</title>
                <meta name="description" content="Adventure Tours - Guided horse tours in the mountains of northern Sweden" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Navbar />
            <main className="container mx-auto mt-20 md:mt-16">
                {/* Add your main content here */}
                <h1 className="text-3xl font-bold mb-4">Welcome to Korpensoga</h1>
                <p className="text-lg text-gray-700 mb-4">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores tempora perspiciatis officia consequatur modi quos rerum, sed
                    alias! Sed architecto culpa repudiandae maxime magni minima tempore animi, expedita incidunt ducimus fugit sit assumenda pariatur
                    neque natus asperiores, officia recusandae, nesciunt facilis. Cumque est ex inventore reprehenderit doloremque officia possimus
                    ducimus in, laborum corrupti. Ut, dolorum delectus deleniti blanditiis id at assumenda. Laudantium, ipsam blanditiis at laborum
                    odio itaque. Non incidunt iste facilis quibusdam officiis rerum voluptatibus qui officia maiores commodi saepe porro dolor et,
                    aspernatur voluptates id deleniti quisquam recusandae tempora enim? Repellendus error perferendis mollitia velit? Facere omnis
                    pariatur quibusdam. Consectetur autem ad ab veniam enim, accusamus perspiciatis earum tempore alias non, porro voluptatum quae nam
                    debitis odio hic dolor voluptas nulla architecto necessitatibus voluptatibus cupiditate dignissimos! Aut minima, aliquid inventore
                    modi ullam exercitationem cum corporis consectetur ipsam ea, sunt ratione. Pariatur natus magni animi sequi maxime voluptas
                    sapiente quibusdam illum, repudiandae facere. Nobis, explicabo quod recusandae quas vero consequuntur odit! Saepe neque dolor
                    cumque nam laborum magni autem voluptatum harum asperiores animi explicabo minima cupiditate eum veritatis illum consectetur,
                    porro illo iure nemo nihil velit repellat excepturi quod. Placeat dicta officia a excepturi labore, deserunt consectetur.
                    Incidunt, explicabo?
                </p>
                <p className="text-lg text-gray-700 mb-4">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores tempora perspiciatis officia consequatur modi quos rerum, sed
                    alias! Sed architecto culpa repudiandae maxime magni minima tempore animi, expedita incidunt ducimus fugit sit assumenda pariatur
                    neque natus asperiores, officia recusandae, nesciunt facilis. Cumque est ex inventore reprehenderit doloremque officia possimus
                    ducimus in, laborum corrupti. Ut, dolorum delectus deleniti blanditiis id at assumenda. Laudantium, ipsam blanditiis at laborum
                    odio itaque. Non incidunt iste facilis quibusdam officiis rerum voluptatibus qui officia maiores commodi saepe porro dolor et,
                    aspernatur voluptates id deleniti quisquam recusandae tempora enim? Repellendus error perferendis mollitia velit? Facere omnis
                    pariatur quibusdam. Consectetur autem ad ab veniam enim, accusamus perspiciatis earum tempore alias non, porro voluptatum quae nam
                    debitis odio hic dolor voluptas nulla architecto necessitatibus voluptatibus cupiditate dignissimos! Aut minima, aliquid inventore
                    modi ullam exercitationem cum corporis consectetur ipsam ea, sunt ratione. Pariatur natus magni animi sequi maxime voluptas
                    sapiente quibusdam illum, repudiandae facere. Nobis, explicabo quod recusandae quas vero consequuntur odit! Saepe neque dolor
                    cumque nam laborum magni autem voluptatum harum asperiores animi explicabo minima cupiditate eum veritatis illum consectetur,
                    porro illo iure nemo nihil velit repellat excepturi quod. Placeat dicta officia a excepturi labore, deserunt consectetur.
                    Incidunt, explicabo?
                </p>
            </main>
        </>
    )
}
