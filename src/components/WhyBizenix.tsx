export default function WhyBizenix() {
  const features = [
    {
      title: "Student First",
      description:
        "Built specifically for students looking to learn, earn and grow."
    },
    {
      title: "AI Powered",
      description:
        "Leverage modern AI tools to improve productivity and creativity."
    },
    {
      title: "Community Driven",
      description:
        "Connect with entrepreneurs, freelancers and future founders."
    }
  ];

  return (
    <section className="bg-black py-32 px-6">
      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-16">
          <p className="text-purple-400 uppercase tracking-[0.3em]">
            Why Bizenix
          </p>

          <h2 className="text-white text-5xl font-bold mt-4">
            Designed For Growth
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">

          {features.map((feature) => (
            <div
              key={feature.title}
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
              <h3 className="text-white text-2xl font-bold">
                {feature.title}
              </h3>

              <p className="text-zinc-400 mt-4">
                {feature.description}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}