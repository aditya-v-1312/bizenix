"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden flex items-center justify-center bg-black">

      {/* Gradient Orbs */}
      <div className="absolute top-20 left-20 w-96 h-96 bg-purple-700/30 blur-[120px] rounded-full" />
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-violet-500/20 blur-[120px] rounded-full" />

      {/* Grid Background */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.05) 1px, transparent 1px)",
          backgroundSize: "50px 50px",
        }}
      />

      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10 max-w-5xl text-center px-6"
      >
        <p className="text-purple-400 uppercase tracking-[0.4em] mb-6">
          Student Entrepreneurship Platform
        </p>

        <h1 className="text-white text-6xl md:text-8xl font-black leading-none">
          BIZENIX
        </h1>

        <p className="text-zinc-400 text-lg md:text-2xl mt-8 max-w-3xl mx-auto">
          Build your network. Find opportunities.
          Launch your next venture.
        </p>

        <div className="flex flex-col md:flex-row gap-4 justify-center mt-10">
          <button className="px-8 py-4 rounded-full bg-white text-black font-semibold">
            Explore Platform
          </button>

          <a
            href="/founder"
            className="px-8 py-4 rounded-full border border-white/20 text-white"
          >
            Meet The Founder
          </a>
        </div>
      </motion.div>
    </section>
  );
}

<section className="py-32 px-6">
  <div className="max-w-5xl mx-auto">

    <h2 className="text-5xl font-bold mb-12">
      Experience
    </h2>

    <div className="space-y-8">

      <div className="border-l-2 border-purple-500 pl-6">
        <h3 className="text-2xl font-semibold">
          Founder — BIZENIX
        </h3>

        <p className="text-zinc-400">
          Building a platform connecting students,
          freelancers and entrepreneurs.
        </p>
      </div>

      <div className="border-l-2 border-purple-500 pl-6">
        <h3 className="text-2xl font-semibold">
          Data Analyst Intern
        </h3>

        <p className="text-zinc-400">
          Worked on analytics, research and reporting.
        </p>
      </div>

    </div>
  </div>
</section>