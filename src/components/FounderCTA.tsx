import Link from "next/link";

export default function FounderCTA() {
  return (
    <section className="bg-black py-24 px-6">
      <div className="max-w-5xl mx-auto">

        <div className="
          rounded-3xl
          bg-white/5
          border
          border-white/10
          backdrop-blur-xl
          p-12
          text-center
        ">

          <h2 className="text-white text-5xl font-bold">
            Meet The Founder
          </h2>

          <p className="text-zinc-400 mt-6 text-lg">
            Learn more about Aditya Chandiramani,
            the vision behind Bizenix.
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
            "
          >
            View Journey →
          </Link>

        </div>
      </div>
    </section>
  );
}