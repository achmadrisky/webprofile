"use client";
import { motion } from "framer-motion";
import {
  FaGithub,
  FaInstagram,
  FaTwitter,
  FaLinkedin,
  FaTiktok,
  FaPinterest,
} from "react-icons/fa";

export default function SocialIcons() {
  const icons = [
    {
      icon: <FaLinkedin />,
      link: "https://www.linkedin.com/in/achmad-risky-1b5467325/",
    },
    { icon: <FaInstagram />, link: "https://www.instagram.com/achriskyy/" },
    { icon: <FaTwitter />, link: "https://x.com/achriskyy" },
    { icon: <FaTiktok />, link: "https://www.tiktok.com/@achrsky" },
    { icon: <FaPinterest />, link: "https://id.pinterest.com/achmadrisky" },
    { icon: <FaGithub />, link: "https://github.com/achmadrisky" },
  ];

  return (
    <>
      {/* Desktop Sidebar */}
      <div className="hidden lg:flex fixed left-8 bottom-0 flex-col items-center space-y-6 text-gray-400 ps-5">
        {icons.map((item, i) => (
          <motion.a
            key={i}
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2, duration: 0.3 }}
            whileHover={{ scale: 1.5, rotate: 5, color: "#6366f1" }} // indigo-500
            className="transition-colors text-3xl"
          >
            {item.icon}
          </motion.a>
        ))}
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 96 }}
          transition={{ delay: icons.length * 0.2, duration: 0.6 }}
          className="w-[1px] bg-gray-600 mt-6"
        ></motion.div>
      </div>

      {/* Mobile */}
      <div className="flex lg:hidden justify-center space-x-6 text-gray-400 p-5">
        {icons.map((item, i) => (
          <motion.a
            key={i}
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.2, duration: 0.6 }}
            whileHover={{ scale: 1.3, rotate: -5, color: "#6366f1" }}
            className="transition-colors text-3xl"
          >
            {item.icon}
          </motion.a>
        ))}
      </div>
    </>
  );
}
