import Image from "next/image";
import Counter from "@/components/Counter";

export default function FounderPage() {
  const stats = [
    { value: "5+", label: "Projects Built" },
    { value: "5", label: "Professional Experiences" },
    { value: "2", label: "Degrees" },
    { value: "1", label: "Startup Founded" },
  ];

  const projects = [
    {
      title: "BIZENIX Platform Development",
      desc: "Building an ecosystem where students, freelancers and entrepreneurs can connect, collaborate and grow.",
    },
    {
      title: "Smart Attendance Tracker",
      desc: "Developed a smart attendance management solution focused on efficiency and automation.",
    },
    {
      title: "Urban Waste Management Study",
      desc: "Research and analysis project focused on identifying waste management challenges and improvements.",
    },
    {
      title: "Logistics Analytics & Optimization",
      desc: "Worked on logistics datasets and operational reporting to improve business efficiency.",
    },
    {
      title: "Algorithm & Data Structures Repository",
      desc: "Collection of optimized algorithms and data structures implemented in Python.",
    },
  ];

  return (
    <main className="min-h-screen bg-black text-white">

      {/* HERO */}
      <section className="min-h-screen flex items-center justify-center px-6 relative overflow-hidden">

        <div className="absolute top-20 left-20 w-96 h-96 bg-purple-700/20 blur-[120px] rounded-full" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-violet-500/10 blur-[120px] rounded-full" />

        <div className="max-w-7xl mx-auto grid md:grid-cols-[1.3fr_1fr] gap-16 items-center relative z-10">

          <div>

            <p className="text-purple-400 uppercase tracking-[0.3em]">
              Founder
            </p>

            <h1 className="font-black mt-6 leading-[0.9]">
              <span className="block text-6xl md:text-8xl">
                Aditya
              </span>

              <span className="block text-5xl md:text-7xl text-zinc-300">
                Chandiramani
              </span>
            </h1>

            <p className="text-zinc-400 text-xl mt-8 max-w-2xl">
              Founder of BIZENIX | BCA @ Navrachana University |
              B.Sc. Management & Data Analytics @ IIT Madras
            </p>

            <div className="flex flex-wrap gap-4 mt-10">
              <a
                href="https://linkedin.com/in/adityachandiramani"
                target="_blank"
                className="px-6 py-3 rounded-full bg-white text-black font-semibold"
              >
                LinkedIn
              </a>

              <a
                href="https://github.com/aditya-v-1312"
                target="_blank"
                className="px-6 py-3 rounded-full border border-white/20"
              >
                GitHub
              </a>

              <a
                href="/"
                className="px-6 py-3 rounded-full border border-purple-500/50 text-purple-400"
              >
                BIZENIX
              </a>
            </div>
          </div>

          <div className="relative flex justify-center">

            <Image
              src="/profile.jpeg"
              alt="Aditya Chandiramani"
              width={500}
              height={500}
              priority
              className="rounded-3xl object-cover border border-white/10"
            />

            <div className="absolute -bottom-6 -left-6 bg-zinc-900 border border-white/10 rounded-2xl px-5 py-4">
              <p className="text-sm text-zinc-400">Currently</p>
              <p className="font-semibold">Building BIZENIX 🚀</p>
            </div>

          </div>
        </div>
      </section>

      {/* MY JOURNEY */}
      <section className="py-32 px-6">
        <div className="max-w-5xl mx-auto">

          <h2 className="text-5xl font-bold mb-10">
            My Journey
          </h2>

          <p className="text-zinc-400 text-xl leading-relaxed">
            I have always been fascinated by the intersection of
            technology, business and problem solving.

            While pursuing my BCA at Navrachana University and
            B.Sc. in Management & Data Analytics at IIT Madras,
            I realized that many talented students struggled to
            find opportunities, collaborators and guidance.

            That realization eventually became BIZENIX —
            a platform designed to help ambitious people learn,
            collaborate and build together.
          </p>

        </div>
      </section>

      {/* IMPACT */}
<section className="py-20 px-6 bg-white/[0.02]">
  <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-6">

    {stats.map((stat) => (
      <div
        key={stat.label}
        className="
          border
          border-white/10
          rounded-3xl
          p-8
          text-center
          hover:border-purple-500/40
          hover:shadow-[0_0_40px_rgba(168,85,247,0.2)]
          transition-all
          duration-500
        "
      >
        <h3 className="text-5xl font-black text-purple-400 transition-all duration-500 hover:scale-110">

          {stat.label === "Projects Built" && (
            <Counter end={5} suffix="+" />
          )}

          {stat.label === "Professional Experiences" && (
            <Counter end={5} />
          )}

          {stat.label === "Degrees" && (
            <Counter end={2} />
          )}

          {stat.label === "Startup Founded" && (
            <Counter end={1} />
          )}

        </h3>

        <p className="text-zinc-400 mt-3">
          {stat.label}
        </p>
      </div>
    ))}

  </div>
</section>

      {/* EDUCATION */}
      <section className="py-32 px-6">
        <div className="max-w-6xl mx-auto">

          <h2 className="text-5xl font-bold mb-16">
            Education
          </h2>

          <div className="grid md:grid-cols-2 gap-8">

            <div
  className="
  p-8
  rounded-3xl
  border
  border-white/10
  hover:border-purple-500/40
  hover:shadow-[0_0_50px_rgba(168,85,247,0.25)]
  transition-all
  duration-500
  "
>
              <h3 className="text-2xl font-semibold">
                Navrachana University
              </h3>

              <p className="text-zinc-400 mt-4">
                Bachelor of Computer Applications (BCA)
              </p>
            </div>

            <div
  className="
  p-8
  rounded-3xl
  border
  border-white/10
  hover:border-purple-500/40
  hover:shadow-[0_0_50px_rgba(168,85,247,0.25)]
  transition-all
  duration-500
  "
>
              <h3 className="text-2xl font-semibold">
                IIT Madras
              </h3>

              <p className="text-zinc-400 mt-4">
                B.Sc. in Management & Data Analytics
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* EXPERIENCE */}
      <section className="py-32 px-6 bg-white/[0.02]">
        <div className="max-w-5xl mx-auto">

          <h2 className="text-5xl font-bold mb-16">
            Experience
          </h2>

          <div className="space-y-12">

            {[
              {
                role: "Founder — BIZENIX",
                desc: "Building an ecosystem where students can learn, collaborate and build ventures together.",
              },
              {
                role: "Data Analyst — SkillFied Mentor",
                desc: "Worked on analytics, reporting and data-driven decision-making initiatives.",
              },
              {
                role: "Data Analyst Intern — BONAF",
                desc: "Supported reporting, analytics and business intelligence workflows.",
              },
              {
                role: "Intern — Basant Nihalani & Co",
                desc: "Assisted with analytical tasks and business operations.",
              },
              {
                role: "Logistics Intern — SoCoTrans Congo",
                desc: "Managed documentation, compliance processes and logistics operations.",
              },
            ].map((item) => (
              <div
                key={item.role}
                className="border-l-2 border-purple-500 pl-8"
              >
                <h3 className="text-2xl font-semibold">
                  {item.role}
                </h3>

                <p className="text-zinc-400 mt-3">
                  {item.desc}
                </p>
              </div>
            ))}

          </div>

        </div>
      </section>

      {/* CURRENTLY BUILDING */}
      <section className="py-32 px-6">
        <div className="max-w-5xl mx-auto">

          <h2 className="text-5xl font-bold mb-10">
            Currently Building
          </h2>

          <div className="grid md:grid-cols-2 gap-6">

            <div className="border border-white/10 rounded-3xl p-8">
              BIZENIX Platform Development
            </div>

            <div className="border border-white/10 rounded-3xl p-8">
              Student Collaboration Network
            </div>

            <div className="border border-white/10 rounded-3xl p-8">
              Entrepreneurship Initiatives
            </div>

            <div className="border border-white/10 rounded-3xl p-8">
              Data Analytics Projects
            </div>

          </div>

        </div>
      </section>

      {/* PROJECTS */}
      <section className="py-32 px-6 bg-white/[0.02]">
        <div className="max-w-6xl mx-auto">

          <h2 className="text-5xl font-bold mb-16">
            Featured Projects
          </h2>

          <div className="grid md:grid-cols-2 gap-8">

            {projects.map((project) => (
              <div
                key={project.title}
                className="p-8 rounded-3xl border border-white/10"
              >
                <h3 className="text-2xl font-semibold">
                  {project.title}
                </h3>

                <p className="text-zinc-400 mt-4">
                  {project.desc}
                </p>
              </div>
            ))}

          </div>

        </div>
      </section>

      {/* CERTIFICATIONS */}
      <section className="py-32 px-6">
        <div className="max-w-6xl mx-auto">

          <h2 className="text-5xl font-bold mb-16">
            Certifications
          </h2>

          <div className="grid md:grid-cols-2 gap-8">

            <div className="border border-white/10 rounded-3xl p-8">
              <h3 className="text-2xl font-semibold">
                AWS Academy Graduate
              </h3>

              <p className="text-zinc-400 mt-3">
                Cloud Foundations
              </p>
            </div>

            <div className="border border-white/10 rounded-3xl p-8">
              <h3 className="text-2xl font-semibold">
                AWS Academy Graduate
              </h3>

              <p className="text-zinc-400 mt-3">
                Cloud Security Foundations
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* LEADERSHIP */}
      <section className="py-32 px-6 bg-white/[0.02]">
        <div className="max-w-5xl mx-auto">

          <h2 className="text-5xl font-bold mb-16">
            Leadership & Community
          </h2>

          <div className="space-y-8">

            <div>
              <h3 className="text-2xl font-semibold">
                Head — BCA@NUV Committee
              </h3>

              <p className="text-zinc-400 mt-2">
                Led departmental initiatives, student engagement
                activities and events.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-semibold">
                LinkedIn & Personal Branding Workshop
              </h3>

              <p className="text-zinc-400 mt-2">
                Organized and coordinated a workshop focused on
                networking and personal branding.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* WHY BIZENIX */}
      <section className="py-32 px-6">
        <div className="max-w-5xl mx-auto">

          <h2 className="text-5xl font-bold mb-10">
            Why I Started BIZENIX
          </h2>

          <p className="text-zinc-400 text-xl leading-relaxed">
            Many talented students, freelancers and aspiring
            entrepreneurs possess the skills and ambition to
            create meaningful work but often lack opportunities,
            collaborators and guidance.

            <br />
            <br />

            BIZENIX was created to bridge that gap by building
            an ecosystem where people can learn, collaborate
            and build ventures together.
          </p>

        </div>
      </section>

      {/* CONTACT */}
      <section className="py-32 px-6 border-t border-white/10">
        <div className="max-w-5xl mx-auto text-center">

          <h2 className="text-5xl font-bold">
            Let's Connect
          </h2>

          <p className="text-zinc-400 text-xl mt-6">
            Open to collaborations, internships,
            entrepreneurship opportunities and networking.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mt-10">

            <a
              href="https://linkedin.com/in/adityachandiramani"
              target="_blank"
              className="px-6 py-3 rounded-full bg-white text-black"
            >
              LinkedIn
            </a>

            <a
              href="https://github.com/aditya-v-1312"
              target="_blank"
              className="px-6 py-3 rounded-full border border-white/20"
            >
              GitHub
            </a>

            <a
              href="https://instagram.com/bizenix.in"
              target="_blank"
              className="px-6 py-3 rounded-full border border-white/20"
            >
              Instagram
            </a>

          </div>

        </div>
      </section>

    </main>
  );
}