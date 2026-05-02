import { motion } from "framer-motion";

const ProjectCard = ({ repo }) => {
  return (
    <motion.a
      href={repo.html_url}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ scale: 1.02 }}
      className="p-6 rounded-2xl border border-gray-200 dark:border-gray-800 hover:shadow-lg transition group"
    >
      {/* Project Name */}
      <h3 className="text-lg font-semibold group-hover:text-blue-600 dark:group-hover:text-blue-400 transition">
        {repo.name}
      </h3>

      {/* Description */}
      <p className="mt-3 text-sm text-gray-600 dark:text-gray-400 line-clamp-3">
        {repo.description || "No description available"}
      </p>

      {/* Language & Stars */}
      <div className="mt-4 flex items-center justify-between text-sm">
        {repo.language && (
          <span className="text-gray-500 dark:text-gray-500">
            {repo.language}
          </span>
        )}

        <span className="flex items-center gap-1">
          ⭐ {repo.stargazers_count}
        </span>
      </div>
    </motion.a>
  );
};

export default ProjectCard;