import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Section from "../components/Section";
import Container from "../components/Container";
import { fetchRepos } from "../api/github";

const staggerContainer = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
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

const Projects = () => {
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    fetchRepos().then(setRepos);
  }, []);

  return (
    <Section id="projects">
      <Container>

        <h2 className="text-3xl font-bold mb-10 text-center">
          All Projects
        </h2>

        {repos.length === 0 && (
          <p className="text-center opacity-60">Loading projects...</p>
        )}

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {repos.map((repo) => (
            <motion.a
              key={repo.id}
              href={repo.url}
              target="_blank"
              rel="noreferrer"
              variants={scaleIn}
              whileHover={{ scale: 1.04 }}
              className="p-6 rounded-2xl border border-gray-200 dark:border-gray-800 bg-white/60 dark:bg-zinc-900/60 backdrop-blur-xl hover:shadow-xl transition"
            >
              <h3 className="text-lg font-semibold mb-2 line-clamp-1">
                {repo.name}
              </h3>

              <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 line-clamp-2">
                {repo.description}
              </p>

              <div className="flex justify-between text-xs opacity-70">
                <span>{repo.language}</span>
                <span>⭐ {repo.stars}</span>
              </div>
            </motion.a>
          ))}
        </motion.div>

      </Container>
    </Section>
  );
};

export default Projects;