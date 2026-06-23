import Image from "next/image";
import Link from "next/link";

export default function FounderCTA() {
  return (
    <section className="bg-black py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <div
          className="
          bg-white/5
          backdrop-blur-xl
          border
          border-white/10
          hover:border-purple-500/30
          hover:shadow-[0_0_60px_rgba(168,85,247,0.15)]
          transition-all
          duration-500
          rounded-3xl
          p-8 md:p-12
        "
        >
          <div className="grid md:grid-cols-2 gap-10 items-center">
            {/* Left Side */}
            <div>
              <p className="text-purple-400 uppercase tracking-[0.3em] mb-4">
                Meet The Founder
              </p>

              <h2 className="text-white text-4xl md:text-5xl font-bold">
                Aditya Chandiramani
              </h2>

              <p className="text-zinc-400 mt-6 text-lg leading-relaxed">
                Building BIZENIX to help students, freelancers and entrepreneurs
                connect, collaborate and grow through technology.
              </p>

              <Link
                href="/founder"
                className="
                inline-block
                mt-8
                px-8
                py-4
                rounded-full
                bg-white
                text-black
                font-semibold
                hover:scale-105
                transition
              "
              >
                View Journey →
              </Link>
            </div>

            {/* Right Side */}
            <div className="flex justify-center">
              <Image
                src="/profile.jpeg"
                alt="Aditya Chandiramani"
                width={320}
                height={320}
                priority
                className="rounded-3xl object-cover border border-white/10 max-w-[320px] w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}