"use client";

import { motion } from "framer-motion";
import { ChevronDown, Github, Linkedin, Mail, ExternalLink } from "lucide-react";
import { portfolioData } from "@/data/portfolio";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col items-center justify-center relative pt-20 overflow-hidden"
    >
      {/* Background elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/20 rounded-full blur-3xl opacity-20" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-accent/20 rounded-full blur-3xl opacity-20" />
      </div>

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="text-center max-w-4xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        {/* Profile Image */}
        <motion.div
          variants={item}
          className="mb-8 flex justify-center"
        >
          <div className="relative w-32 h-32 sm:w-40 sm:h-40">
            <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent rounded-full opacity-75 blur-xl" />
            <div className="relative w-32 h-32 sm:w-40 sm:h-40 rounded-full bg-gradient-to-br from-primary to-accent p-1 flex items-center justify-center">
              <div className="w-full h-full rounded-full bg-background flex items-center justify-center text-5xl font-bold text-primary">
                MN
              </div>
            </div>
          </div>
        </motion.div>

        {/* Name and Title */}
        <motion.div variants={item}>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tighter text-balance">
            <span className="text-foreground">{portfolioData.name}</span>
          </h1>
        </motion.div>

        <motion.div variants={item}>
          <p className="text-xl sm:text-2xl font-semibold text-primary mt-2 text-balance">
            {portfolioData.subtitle}
          </p>
        </motion.div>

        {/* Role / Title */}
        <motion.p
          variants={item}
          className="text-base sm:text-lg text-muted-foreground mt-4 max-w-2xl mx-auto text-balance"
        >
          {portfolioData.title} specializing in building modern web applications with MERN stack and Laravel.
        </motion.p>

        {/* Bio */}
        <motion.p
          variants={item}
          className="text-sm sm:text-base text-muted-foreground mt-6 max-w-2xl mx-auto leading-relaxed text-balance"
        >
          {portfolioData.bio}
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          variants={item}
          className="flex flex-col sm:flex-row gap-4 justify-center mt-10"
        >
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href={portfolioData.links.email}
            className="px-8 py-3 rounded-lg font-semibold bg-gradient-to-r from-primary to-accent text-primary-foreground hover:shadow-lg hover:shadow-primary/50 transition-shadow duration-300 flex items-center justify-center gap-2 group"
          >
            Get in Touch
            <Mail className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
          </motion.a>

          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href={portfolioData.resume}
            download
            className="px-8 py-3 rounded-lg font-semibold border-2 border-primary text-primary hover:bg-primary/10 transition-all duration-300 flex items-center justify-center gap-2 group"
          >
            Download CV
            <ExternalLink className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
          </motion.a>
        </motion.div>

        {/* Social Links */}
        <motion.div
          variants={item}
          className="flex justify-center gap-4 mt-12"
        >
          <motion.a
            whileHover={{ y: -5 }}
            href={portfolioData.links.github}
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 rounded-full bg-muted hover:bg-primary hover:text-primary-foreground flex items-center justify-center transition-all duration-300"
            aria-label="GitHub"
          >
            <Github className="w-5 h-5" />
          </motion.a>
          <motion.a
            whileHover={{ y: -5 }}
            href={portfolioData.links.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 rounded-full bg-muted hover:bg-primary hover:text-primary-foreground flex items-center justify-center transition-all duration-300"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-5 h-5" />
          </motion.a>
          <motion.a
            whileHover={{ y: -5 }}
            href={portfolioData.links.email}
            className="w-12 h-12 rounded-full bg-muted hover:bg-primary hover:text-primary-foreground flex items-center justify-center transition-all duration-300"
            aria-label="Email"
          >
            <Mail className="w-5 h-5" />
          </motion.a>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
      >
        <button
          onClick={() => {
            document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
          }}
          className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
          aria-label="Scroll to about section"
        >
          <span className="text-xs font-medium">Scroll to explore</span>
          <ChevronDown className="w-5 h-5" />
        </button>
      </motion.div>
    </section>
  );
}
