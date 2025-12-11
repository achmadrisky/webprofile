"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="pb-40 flex items-start justify-start pt-40 text-white">
      <div className="max-w-5xl pl-10 md:pl-60">
        {/* Intro Text */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-indigo-400 font-mono text-sm md:text-base mb-4"
        >
          Hi, my name is
        </motion.p>

        {/* Big Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-4xl md:text-6xl font-extrabold mb-2"
        >
          Achmad Risky
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-2xl md:text-4xl font-semibold text-gray-600 mb-6"
        >
          I build things for the web.
        </motion.h2>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="text-gray-400 max-w-xl mb-8"
        >
          I am a software engineer specializing in building exceptional digital
          experiences. Currently, I am focused on building accessible,
          human-centered products. My goal is to create solutions that not only
          solve problems, but also feel intuitive and enjoyable for people to
          use. I believe that great digital products should combine clean
          design, strong performance, and seamless interactivity.
        </motion.p>

        {/* CTA Button */}
        <motion.a
          href="https://www.linkedin.com/in/achmad-risky-1b5467325/"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="inline-block px-6 py-3 border border-indigo-400 text-indigo-400 rounded-md font-mono text-sm hover:bg-indigo-400 hover:text-black transition-colors"
        >
          Check out my LinkedIn!
        </motion.a>
      </div>
    </section>
  );
}
