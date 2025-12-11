"use client";
import { useEffect, useState } from "react";
import { NavbarDemo } from "./components/Navbar";
import AboutMe from "./components/About";
import Experience from "./components/Experience";
import Hero from "./components/Hero";
import Contact from "./components/Contact";
import { FeaturesSection } from "./components/Features";
import SocialIcons from "./components/SocialIcon";
import Footer from "./components/Footer";

export default function Home() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <main className=" bg-[#161616]">
        <div className="fixed top-0 left-0 w-full z-50 ">
          <NavbarDemo />
        </div>
        <Hero />
        <AboutMe />
        <Experience />
        <FeaturesSection />
        <Contact />
        <SocialIcons />
        <Footer />
      </main>
    </>
  );
}
