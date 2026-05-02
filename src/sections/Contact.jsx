import { useRef, useState } from "react";
import { motion } from "framer-motion";
import Section from "../components/Section";
import Container from "../components/Container";

const Contact = () => {
  const formRef = useRef();
  const [status, setStatus] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("Form submitted (EmailJS later)");
    formRef.current.reset();
  };

  return (
    <Section id="contact" className="bg-transparent">
      <Container>
        <div className="max-w-2xl mx-auto text-center">

          {/* Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            Let’s Connect
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-gray-600 dark:text-gray-400 mb-10"
          >
            Have an idea, opportunity, or just want to say hi?
          </motion.p>

          {/* Gradient Border */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="relative p-[1px] rounded-2xl bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500"
          >
            {/* Card */}
            <div className="p-8 rounded-2xl bg-white/80 dark:bg-zinc-900/80 backdrop-blur-xl shadow-xl transition-all">

              <form
                ref={formRef}
                onSubmit={handleSubmit}
                className="flex flex-col gap-6"
              >

                {/* Name */}
                <div className="relative">
                  <input
                    type="text"
                    name="user_name"
                    required
                    placeholder=" "
                    className="peer w-full p-4 pt-6 rounded-xl bg-white/70 dark:bg-zinc-800/70 border border-gray-300 dark:border-gray-700 text-black dark:text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                  />
                  <label className="absolute left-4 top-4 text-gray-500 dark:text-gray-400 transition-all
                    peer-focus:top-2 peer-focus:text-sm peer-focus:text-purple-500
                    peer-valid:top-2 peer-valid:text-sm">
                    Your Name
                  </label>
                </div>

                {/* Email */}
                <div className="relative">
                  <input
                    type="email"
                    name="user_email"
                    required
                    placeholder=" "
                    className="peer w-full p-4 pt-6 rounded-xl bg-white/70 dark:bg-zinc-800/70 border border-gray-300 dark:border-gray-700 text-black dark:text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                  />
                  <label className="absolute left-4 top-4 text-gray-500 dark:text-gray-400 transition-all
                    peer-focus:top-2 peer-focus:text-sm peer-focus:text-purple-500
                    peer-valid:top-2 peer-valid:text-sm">
                    Your Email
                  </label>
                </div>

                {/* Message */}
                <div className="relative">
                  <textarea
                    name="message"
                    rows="4"
                    required
                    placeholder=" "
                    className="peer w-full p-4 pt-6 rounded-xl bg-white/70 dark:bg-zinc-800/70 border border-gray-300 dark:border-gray-700 text-black dark:text-white focus:outline-none focus:ring-2 focus:ring-purple-500 resize-none"
                  />
                  <label className="absolute left-4 top-4 text-gray-500 dark:text-gray-400 transition-all
                    peer-focus:top-2 peer-focus:text-sm peer-focus:text-purple-500
                    peer-valid:top-2 peer-valid:text-sm">
                    Your Message
                  </label>
                </div>

                {/* Button */}
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  type="submit"
                  className="mt-4 py-3 rounded-xl font-semibold text-white bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 hover:opacity-90 transition"
                >
                  Send Message
                </motion.button>

              </form>

              {status && (
                <p className="mt-4 text-sm opacity-70 text-center">
                  {status}
                </p>
              )}
            </div>
          </motion.div>

        </div>
      </Container>
    </Section>
  );
};

export default Contact;