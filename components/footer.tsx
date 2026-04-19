"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail, ExternalLink } from "lucide-react";
import { portfolioData } from "@/data/portfolio";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 10 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <footer className="bg-card border-t border-border py-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="space-y-8"
        >
          {/* Main Footer Content */}
          <div className="grid md:grid-cols-3 gap-12">
            {/* Brand */}
            <motion.div variants={item} className="space-y-4">
              <h3 className="text-xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Muhammad Abdul Nafay
              </h3>
              <p className="text-muted-foreground text-sm">
                Full Stack Web Developer specializing in MERN stack and Laravel. Building beautiful, functional web applications.
              </p>
            </motion.div>

            {/* Quick Links */}
            <motion.div variants={item} className="space-y-4">
              <h4 className="font-semibold text-foreground">Quick Links</h4>
              <ul className="space-y-2">
                {[
                  { name: "Home", href: "#home" },
                  { name: "About", href: "#about" },
                  { name: "Projects", href: "#projects" },
                  { name: "Contact", href: "#contact" },
                ].map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-muted-foreground hover:text-primary transition-colors duration-200 text-sm"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Social Links */}
            <motion.div variants={item} className="space-y-4">
              <h4 className="font-semibold text-foreground">Connect</h4>
              <div className="flex gap-3">
                <motion.a
                  whileHover={{ y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  href={portfolioData.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-muted hover:bg-primary hover:text-primary-foreground flex items-center justify-center transition-all duration-300"
                  aria-label="GitHub"
                >
                  <Github className="w-5 h-5" />
                </motion.a>
                <motion.a
                  whileHover={{ y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  href={portfolioData.links.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-muted hover:bg-primary hover:text-primary-foreground flex items-center justify-center transition-all duration-300"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-5 h-5" />
                </motion.a>
                <motion.a
                  whileHover={{ y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  href={portfolioData.links.email}
                  className="w-10 h-10 rounded-full bg-muted hover:bg-primary hover:text-primary-foreground flex items-center justify-center transition-all duration-300"
                  aria-label="Email"
                >
                  <Mail className="w-5 h-5" />
                </motion.a>
              </div>
            </motion.div>
          </div>

          {/* Divider */}
          <motion.div variants={item} className="h-px bg-border" />

          {/* Bottom Footer */}
          <motion.div
            variants={item}
            className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted-foreground"
          >
            <div>
              © {currentYear} Muhammad Abdul Nafay. All rights reserved.
            </div>
            <div className="flex gap-4">
              <a href="#" className="hover:text-primary transition-colors">
                Privacy Policy
              </a>
              <span>•</span>
              <a href="#" className="hover:text-primary transition-colors">
                Terms of Service
              </a>
            </div>
          </motion.div>

          {/* Made with love */}
          <motion.div
            variants={item}
            className="text-center text-xs text-muted-foreground"
          >
            Made with{" "}
            <span className="text-primary animate-pulse">♥</span>{" "}
            using Next.js, React & Tailwind CSS
          </motion.div>
        </motion.div>
      </div>
    </footer>
  );
}
