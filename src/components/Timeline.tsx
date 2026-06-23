const experiences = [
  {
    title: "Founder",
    company: "BIZENIX",
    description:
      "Building a platform connecting students, freelancers and entrepreneurs."
  },
  {
    title: "Data Analyst Intern",
    company: "SkillFied"
  },
  {
    title: "Data Analyst Intern",
    company: "BONAF"
  },
  {
    title: "Intern",
    company: "Basant Nihalani & Co"
  }
];

export default function Timeline() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-4xl mx-auto">

        <h2 className="text-5xl font-bold mb-16 text-white">
          Experience
        </h2>

        <div className="space-y-10">

          {experiences.map((item) => (
            <div
              key={item.company}
              className="border-l-2 border-purple-500 pl-6"
            >
              <h3 className="text-2xl font-semibold text-white">
                {item.title}
              </h3>

              <p className="text-purple-400">
                {item.company}
              </p>

              <p className="text-zinc-400 mt-2">
                {item.description}
              </p>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}