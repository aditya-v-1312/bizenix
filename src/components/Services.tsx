export default function Services() {
  const services = [
    "Freelancing",
    "Networking",
    "Marketplace",
    "AI Tools",
  ];

  return (
    <section
      id="services"
      className="bg-black text-white py-32 px-6"
    >
      <div className="max-w-7xl mx-auto">

        <h2 className="text-5xl font-bold text-center mb-16">
          What We Offer
        </h2>

        <div className="grid md:grid-cols-4 gap-6">

          {services.map((item) => (
            <div
              key={item}
              className="
              bg-white/5
              backdrop-blur-xl
              border
              border-white/10
              rounded-3xl
              p-8
              hover:scale-105
              transition
              "
            >
              <h3 className="text-2xl font-semibold">
                {item}
              </h3>

              <p className="text-zinc-400 mt-4">
                Coming soon on the Bizenix ecosystem.
              </p>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}