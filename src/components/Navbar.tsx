"use client";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-xl bg-black/20 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-8 py-5 flex justify-between items-center">
        <h1 className="text-white text-2xl font-bold">
          BIZENIX
        </h1>

        <div className="hidden md:flex gap-8 text-white">
          <a href="#services">Services</a>
          <a href="#about">About</a>
          <a href="/founder">Founder</a>
        </div>
      </div>
    </nav>
  );
}