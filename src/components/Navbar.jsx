import { motion } from "framer-motion";
import ThemeToggle from "./ThemeToggle";
import Container from "./Container";

const Navbar = () => {
  return (
    <motion.header
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 w-full z-50 backdrop-blur-md bg-white/70 dark:bg-black/70 border-b border-gray-200 dark:border-gray-800"
    >
      <Container>
        <div className="flex justify-between items-center py-4">

          {/* Logo */}
          <h1 className="text-lg font-semibold">
            Aneruth
          </h1>

          {/* Navigation */}
          <nav className="flex items-center gap-6 text-sm">

            <a href="#featured" className="hover:opacity-70 transition">
              Featured
            </a>

            <a href="#projects" className="hover:opacity-70 transition">
              Projects
            </a>

            <a href="#contact" className="hover:opacity-70 transition">
              Contact
            </a>

            <ThemeToggle />
          </nav>

        </div>
      </Container>
    </motion.header>
  );
};

export default Navbar;