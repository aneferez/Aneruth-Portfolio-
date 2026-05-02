import { motion } from "framer-motion";
import Container from "../components/Container";

const Hero = () => {

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/resume.pdf";
    link.setAttribute("download", "Aneruth_Resume.pdf");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className="py-24 md:py-32">
      <Container>
        <div className="max-w-4xl mx-auto text-center">

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-6xl font-bold leading-tight"
          >
            Building{" "}
            <span className="bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 bg-clip-text text-transparent">
              fast, scalable
            </span>{" "}
            web experiences
          </motion.h1>

          {/* Subtext */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-6 text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto"
          >
            Full-stack developer focused on clean architecture, performance, and building products that actually scale.
          </motion.p>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mt-10 flex justify-center gap-4 flex-wrap"
          >

            {/* Projects */}
            <a
              href="#projects"
              className="px-6 py-3 rounded-xl bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 text-white font-semibold hover:opacity-90 transition"
            >
              View Projects
            </a>

            {/* View Resume */}
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-xl border border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-zinc-800 transition"
            >
              View Resume
            </a>

            {/* Download Resume (FORCED) */}
            <button
              onClick={handleDownload}
              className="px-6 py-3 rounded-xl border border-purple-500 text-purple-500 hover:bg-purple-500 hover:text-white transition"
            >
              Download Resume
            </button>

          </motion.div>

        </div>
      </Container>
    </section>
  );
};

export default Hero;