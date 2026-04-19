"use client";

import { motion } from "framer-motion";
import { projectsData } from "@/data/projects";
import { Github, ExternalLink } from "lucide-react";
import Image from "next/image";

export function Projects() {
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
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <section id="projects" className="py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
            PORTFOLIO
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground text-balance">
            Featured Projects
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Explore some of my recent projects showcasing my skills in full-stack development, UI/UX design, and problem-solving.
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent rounded-full mx-auto mt-6" />
        </motion.div>

        {/* Featured Projects */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mb-20"
        >
          {projectsData.filter((p) => p.featured).map((project, index) => (
            <motion.div
              key={project.id}
              variants={item}
              className={`mb-12 grid md:grid-cols-2 gap-8 items-center ${
                index % 2 === 1 ? "md:auto-cols-fr" : ""
              }`}
            >
              {/* Alternate layout */}
              {index % 2 === 0 ? (
                <>
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="relative group rounded-lg overflow-hidden h-64 md:h-72"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 z-10 group-hover:opacity-0 transition-opacity duration-300" />
                    <div className="w-full h-full bg-muted flex items-center justify-center text-muted-foreground font-semibold">
                      {project.title}
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 }}
                    className="space-y-4"
                  >
                    <div>
                      <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold mb-3">
                        {project.category}
                      </span>
                      <h3 className="text-2xl md:text-3xl font-bold text-foreground">
                        {project.title}
                      </h3>
                    </div>

                    <p className="text-muted-foreground leading-relaxed">
                      {project.longDescription}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 rounded-full bg-secondary/20 text-secondary-foreground text-xs font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="flex gap-4 pt-4">
                      <motion.a
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-6 py-2 rounded-lg border border-primary text-primary hover:bg-primary/10 transition-all duration-300 font-semibold"
                      >
                        <Github className="w-4 h-4" />
                        Code
                      </motion.a>
                      <motion.a
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-6 py-2 rounded-lg bg-gradient-to-r from-primary to-accent text-primary-foreground hover:shadow-lg hover:shadow-primary/50 transition-all duration-300 font-semibold"
                      >
                        <ExternalLink className="w-4 h-4" />
                        Live Demo
                      </motion.a>
                    </div>
                  </motion.div>
                </>
              ) : (
                <>
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 }}
                    className="space-y-4"
                  >
                    <div>
                      <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold mb-3">
                        {project.category}
                      </span>
                      <h3 className="text-2xl md:text-3xl font-bold text-foreground">
                        {project.title}
                      </h3>
                    </div>

                    <p className="text-muted-foreground leading-relaxed">
                      {project.longDescription}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 rounded-full bg-secondary/20 text-secondary-foreground text-xs font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="flex gap-4 pt-4">
                      <motion.a
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-6 py-2 rounded-lg border border-primary text-primary hover:bg-primary/10 transition-all duration-300 font-semibold"
                      >
                        <Github className="w-4 h-4" />
                        Code
                      </motion.a>
                      <motion.a
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-6 py-2 rounded-lg bg-gradient-to-r from-primary to-accent text-primary-foreground hover:shadow-lg hover:shadow-primary/50 transition-all duration-300 font-semibold"
                      >
                        <ExternalLink className="w-4 h-4" />
                        Live Demo
                      </motion.a>
                    </div>
                  </motion.div>

                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="relative group rounded-lg overflow-hidden h-64 md:h-72 order-first md:order-last"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 z-10 group-hover:opacity-0 transition-opacity duration-300" />
                    <div className="w-full h-full bg-muted flex items-center justify-center text-muted-foreground font-semibold">
                      {project.title}
                    </div>
                  </motion.div>
                </>
              )}
            </motion.div>
          ))}
        </motion.div>

        {/* All Projects Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <h3 className="text-2xl font-bold text-foreground mb-8">Other Projects</h3>
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {projectsData.filter((p) => !p.featured).map((project) => (
              <motion.div
                key={project.id}
                variants={item}
                whileHover={{ y: -5 }}
                className="group rounded-lg border border-border bg-card p-6 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10"
              >
                <span className="inline-block px-2 py-1 rounded-md bg-primary/10 text-primary text-xs font-semibold mb-3">
                  {project.category}
                </span>
                <h4 className="text-lg font-bold text-foreground mb-2">
                  {project.title}
                </h4>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-1 mb-4">
                  {project.technologies.slice(0, 3).map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 rounded-md bg-secondary/20 text-secondary-foreground text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="px-2 py-1 text-xs text-muted-foreground">
                      +{project.technologies.length - 3}
                    </span>
                  )}
                </div>

                <div className="flex gap-3 pt-4 border-t border-border">
                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center w-9 h-9 rounded-lg border border-primary text-primary hover:bg-primary/10 transition-all duration-300"
                    aria-label="GitHub repository"
                  >
                    <Github className="w-4 h-4" />
                  </motion.a>
                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center w-9 h-9 rounded-lg border border-accent text-accent hover:bg-accent/10 transition-all duration-300"
                    aria-label="Live demo"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </motion.a>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
