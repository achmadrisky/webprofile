// components/Contact.tsx
"use client";

import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section
      id="contact"
      className="text-white flex flex-col items-center justify-center px-6 py-32"
    >
      {/* Title */}
      <h2 className="relative flex items-center gap-4 text-2xl md:text-3xl font-bold text-white mb-12">
        <span className="text-indigo-400 font-mono">04.</span>
        <span>Get In Touch</span>
        <span className="h-[1px] w-24 bg-gray-600"></span>
      </h2>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-xl text-center"
      >
        <p className="text-gray-400 mb-8">
          I’m currently open to new opportunities. Whether you have a question
          or just want to say hi, my inbox is always open. I’ll try my best to
          get back to you!
        </p>

        {/* CTA Button */}
        <a
          href="mailto:riskyachmad021@gmail.com"
          className="inline-block px-6 py-3 border border-indigo-400 text-indigo-400 rounded-md font-mono text-sm hover:bg-indigo-400 hover:text-black transition-colors"
        >
          Say Hello
        </a>
      </motion.div>
    </section>
  );
}
