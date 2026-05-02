import { motion } from "framer-motion";
import Section from "../components/Section";
import Container from "../components/Container";

const featuredProjects = [
  {
    title: "AI Image Generator",
    description: "Real-time AI image generation tool built with FastAPI + React.",
    tech: ["React", "FastAPI", "AI"],
    link: "https://github.com/aneferez",
  },
  {
    title: "Invoice Generator",
    description: "Dynamic PDF invoice system with automation & custom layouts.",
    tech: ["React", "PDF", "Automation"],
    link: "https://github.com/aneferez",
  },
  {
    title: "Portfolio Website",
    description: "Modern animated portfolio with GitHub integration.",
    tech: ["React", "Tailwind", "Framer Motion"],
    link: "https://github.com/aneferez",
  },
];

const staggerContainer = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.95 },
  show: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.4 },
  },
};

const Featured = () => {
  return (
    <Section id="featured">
      <Container>

        <h2 className="text-3xl font-bold mb-10 text-center">
          Featured Projects
        </h2>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {featuredProjects.map((project, i) => (
            <motion.a
              key={i}
              href={project.link}
              target="_blank"
              rel="noreferrer"
              variants={scaleIn}
              whileHover={{ scale: 1.05 }}
              className="p-6 rounded-2xl bg-gradient-to-br from-purple-500/10 via-pink-500/10 to-blue-500/10 border border-gray-200 dark:border-gray-800 backdrop-blur-xl hover:shadow-2xl transition"
            >
              <h3 className="text-xl font-semibold mb-2">
                {project.title}
              </h3>

              <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {project.tech.map((t, idx) => (
                  <span
                    key={idx}
                    className="text-xs px-2 py-1 rounded-full bg-gray-200 dark:bg-zinc-800"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </motion.a>
          ))}
        </motion.div>

      </Container>
    </Section>
  );
};

export default Featured;