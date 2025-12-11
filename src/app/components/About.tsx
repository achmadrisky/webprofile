"use client";
import { motion } from "framer-motion";

export default function AboutMe() {
  return (
    <>
      {/* About Me Section */}
      <section
        id="About"
        className="flex items-center justify-center text-gray-300 p-10 md:p-20"
      >
        <div className="max-w-6xl grid md:grid-cols-2 gap-12 items-start">
          {/* Text Section */}
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative flex items-center gap-4 text-2xl md:text-3xl font-bold text-white mb-8"
            >
              <span className="text-indigo-400 font-mono">01.</span> About Me
              <span className="flex-1 h-[1px] bg-gray-600"></span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="leading-relaxed mb-6"
            >
              Hello! My name is{" "}
              <span className="text-indigo-400">Achmad Risky</span> and I enjoy
              creating things that live on the internet. I specialize in
              building exceptional digital experiences and accessible products
              for the web. 🚀
            </motion.p>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="leading-relaxed mb-6"
            >
              Here are a few technologies I have been working with recently:
            </motion.p>

            {/* Tech List */}
            <ul className="grid grid-cols-2 gap-2 text-sm font-mono text-indigo-300">
              <li>▸ JavaScript (ES6+)</li>
              <li>▸ TypeScript</li>
              <li>▸ React</li>
              <li>▸ Next.js</li>
              <li>▸ Node.js</li>
              <li>▸ Laravel</li>
            </ul>
          </div>

          {/* Image Section */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative w-64 h-64 mx-auto rounded-lg overflow-hidden border-2 border-indigo-400 shadow-lg"
          >
            <img
              src="/img/achmadrisky.png"
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>
      </section>

      {/* Cards Section */}
      <div className="max-w-6xl mx-auto px-10 md:px-20 md:ml-75 pb-16">
        <motion.h4
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="relative flex items-center gap-4 text-2xl md:text-3xl font-bold text-white mb-8"
        >
          <span className="flex-1 h-[1px] bg-gray-600"></span>Activities that I
          like
          <span className="flex-1 h-[1px] bg-gray-600"></span>
        </motion.h4>
        <motion.ul
          initial="hidden"
          whileInView="visible"
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { staggerChildren: 0.2, duration: 0.6 },
            },
          }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-10"
        >
          {/* Card 1 */}
          <motion.li
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0 },
            }}
            className="card bg-[#112240] text-gray-300 shadow-lg rounded-2xl transform transition duration-300 ease-in-out hover:scale-105 hover:shadow-indigo-500/30"
          >
            <figure className="flex justify-center pt-8">
              <img
                src="./programer.svg"
                alt="UI/UX Design"
                className="w-20 h-20 m-4"
              />
            </figure>
            <div className="card-body items-center text-center px-6 pb-8">
              <h2 className="card-title text-indigo-400 mb-2">Playing Games</h2>
              <p className="text-sm leading-relaxed">
                I play competitive games, like valorant, counter-strike 2, and
                another survival game like minecraft.
              </p>
            </div>
          </motion.li>

          {/* Card 2 */}
          <motion.li
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0 },
            }}
            className="card bg-[#112240] text-gray-300 shadow-lg rounded-2xl transform transition duration-300 ease-in-out hover:scale-105 hover:shadow-indigo-500/30"
          >
            <figure className="flex justify-center pt-8">
              <img
                src="./web.svg"
                alt="Web Development"
                className="w-20 h-20 m-4"
              />
            </figure>
            <div className="card-body items-center text-center px-6 pb-8">
              <h2 className="card-title text-indigo-400 mb-2">Watch a Movie</h2>
              <p className="text-sm leading-relaxed">
                I have seen a lot movie, but if you wanna talk something I like,
                its a "La La Land 2016".
              </p>
            </div>
          </motion.li>

          {/* Card 3 */}
          <motion.li
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0 },
            }}
            className="card bg-[#112240] text-gray-300 shadow-lg rounded-2xl transform transition duration-300 ease-in-out hover:scale-105 hover:shadow-indigo-500/30"
          >
            <figure className="flex justify-center pt-8">
              <img
                src="./photoshoot.svg"
                alt="Photography"
                className="w-20 h-20 m-4"
              />
            </figure>
            <div className="card-body items-center text-center px-6 pb-8">
              <h2 className="card-title text-indigo-400 mb-2">Photography</h2>
              <p className="text-sm leading-relaxed">
                I dont have a professional camera yet, but I enjoy capturing
                moments using my phone Leica camera.
              </p>
            </div>
          </motion.li>
        </motion.ul>
      </div>
    </>
  );
}
