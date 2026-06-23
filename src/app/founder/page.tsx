import Image from "next/image";

export default function FounderPage() {
  return (
    <main className="min-h-screen bg-black text-white">

      <section className="min-h-screen flex items-center justify-center px-6">

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">

          <div>
            <p className="text-purple-400 uppercase tracking-[0.3em]">
              Founder
            </p>

            <h1 className="text-6xl md:text-8xl font-black mt-6">
              Aditya
              <br />
              Chandiramani
            </h1>

            <p className="text-zinc-400 text-xl mt-8">
              Founder of BIZENIX,
              Data Science Student,
              Builder and Entrepreneur.
            </p>

            <div className="flex gap-4 mt-10">
              <a
                href="https://linkedin.com"
                className="px-6 py-3 rounded-full bg-white text-black"
              >
                LinkedIn
              </a>

              <a
                href="/"
                className="px-6 py-3 rounded-full border border-white/20"
              >
                BIZENIX
              </a>
            </div>
          </div>

          <div className="flex justify-center">
            <Image
              src="/profile.jpeg"
              alt="Aditya"
              width={450}
              height={450}
              className="rounded-3xl"
            />
          </div>

        </div>

      </section>

    </main>
  );
}