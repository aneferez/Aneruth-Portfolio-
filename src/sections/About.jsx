import Section from "../components/Section";
import Container from "../components/Container";

const About = () => {
  return (
    <Section>
      <Container>
        <div className="max-w-3xl">

          {/* Title */}
          <h2 className="text-3xl md:text-4xl font-bold">
            About Me
          </h2>

          {/* Story */}
          <p className="mt-6 text-gray-600 dark:text-gray-400 leading-relaxed">
            I'm a Full Stack Developer with a background in MCA, focused on
            building clean, scalable, and user-friendly applications.
            I enjoy turning complex ideas into simple, intuitive interfaces.
          </p>

          <p className="mt-4 text-gray-600 dark:text-gray-400 leading-relaxed">
            My journey started with curiosity about how web apps work, and it
            evolved into building real-world projects using React, APIs, and
            modern frontend tools. I focus on writing maintainable code and
            creating smooth user experiences.
          </p>

          <p className="mt-4 text-gray-600 dark:text-gray-400 leading-relaxed">
            Currently, I'm exploring advanced UI systems, performance
            optimization, and building projects that feel like real products
            rather than demos.
          </p>

        </div>
      </Container>
    </Section>
  );
};

export default About;