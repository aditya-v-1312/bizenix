const projects = [
  "BIZENIX Platform",
  "AI Business Manager",
  "Urban Waste Study",
  "Logistics Optimization"
];

export default function Projects() {
  return (
    <section className="py-24 px-6">

      <div className="max-w-6xl mx-auto">

        <h2 className="text-white text-5xl font-bold mb-12">
          Projects
        </h2>

        <div className="grid md:grid-cols-2 gap-6">

          {projects.map((project) => (
            <div
              key={project}
              className="
              bg-white/5
              border
              border-white/10
              backdrop-blur-xl
              rounded-3xl
              p-8
              hover:scale-105
              hover:border-purple-500/50
              hover:shadow-[0_0_40px_rgba(168,85,247,0.25)]
              transition-all
              duration-300
              "
            >
              <h3 className="text-white text-2xl">
                {project}
              </h3>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}