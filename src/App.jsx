import ThemeToggle from "./components/ThemeToggle";
import Container from "./components/Container";
import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";
import Featured from "./sections/Featured";

const App = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-100 dark:from-black dark:to-zinc-900 text-black dark:text-white transition-colors duration-300">

      {/* Navbar */}
      <header className="fixed top-0 w-full z-50 backdrop-blur-md bg-white/70 dark:bg-black/70 border-b border-gray-200 dark:border-gray-800">
        <Container>
          <div className="flex justify-between items-center py-4">
            <h1 className="text-lg font-semibold">
              Aneruth
            </h1>

            <nav className="flex items-center gap-6">
              <a href="#projects" className="text-sm hover:opacity-70 transition">
                Projects
              </a>

              <a href="#contact" className="text-sm hover:opacity-70 transition">
                Contact
              </a>

              <ThemeToggle />
            </nav>
          </div>
        </Container>
      </header>

      {/* Spacer for fixed navbar */}
      <div className="h-20" />

      {/* Main Content */}
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Featured />
        <Navbar /> {/* ✅ ONLY HERE */}
        <Contact /> {/* ✅ ONLY HERE */}
      </main>

    </div>
  );
};

export default App;