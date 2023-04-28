import Head from 'next/head'

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
      <Head>
        <title>korpensoga.com</title>
        <meta name="description" content="Adventure Tours - Guided horse tours in the mountains of northern Sweden" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="p-6 bg-white max-w-4xl mx-auto rounded-xl shadow-md space-y-6">
        <h1 className="text-4xl font-bold text-center">
          Välkommen till Korpens Öga
        </h1>
        <p className="text-lg text-center">
          Här bygger vi en ny fantastisk sida till Korpens Öga.
        </p>
      </main>
    </div>
  )
}
