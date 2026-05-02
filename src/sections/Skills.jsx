import Section from "../components/Section";
import Container from "../components/Container";

const skills = [
  {
    category: "Frontend",
    items: ["React", "JavaScript", "HTML", "CSS", "Tailwind", "MUI", "Angular (Basic)"],
  },
  {
    category: "Backend",
    items: ["Node.js", "MongoDB (Basic)", "REST APIs"],
  },
];

const Skills = () => {
  return (
    <Section>
      <Container>

        <h2 className="text-3xl md:text-4xl font-bold">
          Skills
        </h2>

        <div className="mt-10 grid md:grid-cols-2 gap-8">

          {skills.map((group, index) => (
            <div
              key={index}
              className="p-6 rounded-2xl border border-gray-200 dark:border-gray-800 hover:shadow-lg transition"
            >
              <h3 className="text-xl font-semibold mb-4">
                {group.category}
              </h3>

              <div className="flex flex-wrap gap-3">
                {group.items.map((skill, i) => (
                  <span
                    key={i}
                    className="px-4 py-2 rounded-xl bg-gray-100 dark:bg-gray-900 text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>

            </div>
          ))}

        </div>

      </Container>
    </Section>
  );
};

export default Skills;