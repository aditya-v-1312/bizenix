"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden flex items-center justify-center bg-black">

      {/* Animated Background Orbs */}
      <motion.div
        animate={{
          x: [0, 60, 0],
          y: [0, -40, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-20 left-20 w-[500px] h-[500px] bg-purple-700/30 blur-[150px] rounded-full"
      />

      <motion.div
        animate={{
          x: [0, -60, 0],
          y: [0, 40, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-20 right-20 w-[500px] h-[500px] bg-violet-500/20 blur-[150px] rounded-full"
      />

      {/* Grid Background */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.05) 1px, transparent 1px)",
          backgroundSize: "50px 50px",
        }}
      />

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 80 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 1,
          ease: "easeOut",
        }}
        className="relative z-10 max-w-6xl text-center px-6"
      >

        {/* Badge */}
        <div className="inline-flex items-center gap-2 border border-white/10 bg-white/5 backdrop-blur-md rounded-full px-5 py-2 mb-8">
          <span className="w-2 h-2 bg-purple-500 rounded-full animate-pulse"></span>
          <span className="text-sm text-zinc-300">
            Student Entrepreneurship Platform
          </span>
        </div>

        {/* Heading */}
        <h1
          className="
          text-6xl
          md:text-8xl
          lg:text-9xl
          font-black
          leading-none
          bg-gradient-to-r
          from-purple-400
          via-white
          to-purple-500
          bg-clip-text
          text-transparent
          "
        >
          BIZENIX
        </h1>

        {/* Subtitle */}
        <p className="text-zinc-400 text-lg md:text-2xl mt-8 max-w-3xl mx-auto leading-relaxed">
          Connecting ambitious students, freelancers and entrepreneurs
          through technology, opportunities and innovation.
        </p>

        {/* Buttons */}
        <div className="flex flex-col md:flex-row gap-5 justify-center mt-12">

          <a
  href="#services"
  className="
  px-8
  py-4
  rounded-full
  bg-white
  text-black
  font-semibold
  transition-all
  duration-300
  hover:scale-105
  hover:shadow-[0_0_40px_rgba(255,255,255,0.35)]
  "
>
  Get Started
</a>

          <Link
            href="/founder"
            className="
            px-8
            py-4
            rounded-full
            border
            border-white/20
            text-white
            transition-all
            duration-300
            hover:border-purple-500
            hover:bg-white/5
            "
          >
            Meet The Founder
          </Link>

        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto mt-20">

          <div>
            <h3 className="text-white text-3xl font-bold">100+</h3>
            <p className="text-zinc-500 text-sm mt-2">
              Students
            </p>
          </div>

          <div>
            <h3 className="text-white text-3xl font-bold">20+</h3>
            <p className="text-zinc-500 text-sm mt-2">
              Projects
            </p>
          </div>

          <div>
            <h3 className="text-white text-3xl font-bold">∞</h3>
            <p className="text-zinc-500 text-sm mt-2">
              Opportunities
            </p>
          </div>

        </div>

        {/* Scroll Indicator */}
        <motion.div
          animate={{
            y: [0, 10, 0],
          }}
          transition={{
            repeat: Infinity,
            duration: 1.5,
          }}
          className="mt-16 text-zinc-500 text-sm"
        >
          ↓ Scroll to Explore
        </motion.div>

      </motion.div>

    </section>
  );
}