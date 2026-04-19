"use client";

import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolio";
import { Code2, Zap, Globe } from "lucide-react";

export function About() {
  const features = [
    {
      icon: Code2,
      title: "Clean Code",
      description: "Writing maintainable, scalable code following best practices and SOLID principles.",
    },
    {
      icon: Zap,
      title: "High Performance",
      description: "Optimizing applications for speed and efficiency across all devices and networks.",
    },
    {
      icon: Globe,
      title: "Web Expertise",
      description: "Full-stack development with expertise in modern technologies and frameworks.",
    },
  ];

  return (
    <section id="about" className="py-20 relative overflow-hidden">
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
            ABOUT ME
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground text-balance">
            Passionate Developer, Innovative Thinker
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent rounded-full mx-auto mt-6" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left side - Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <p className="text-muted-foreground text-lg leading-relaxed">
              I'm a passionate Full Stack Web Developer with expertise in MERN stack and Laravel. 
              My journey in web development began with a curiosity about how things work on the web, 
              and has evolved into a professional pursuit of building beautiful, functional applications.
            </p>

            <p className="text-muted-foreground text-lg leading-relaxed">
              With hands-on experience from internships at leading tech companies and continuous learning, 
              I've developed a strong foundation in both frontend and backend technologies. I take pride in 
              creating user-centric solutions that are not just functionally correct but also aesthetically pleasing.
            </p>

            <p className="text-muted-foreground text-lg leading-relaxed">
              I believe in the power of clean code, responsive design, and performant applications. 
              When I'm not coding, you can find me exploring new technologies, contributing to open-source, 
              or sharing knowledge with the community.
            </p>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="mt-8 px-8 py-3 rounded-lg font-semibold bg-primary text-primary-foreground hover:shadow-lg hover:shadow-primary/50 transition-all duration-300"
            >
              Let's Connect
            </motion.button>
          </motion.div>

          {/* Right side - Features */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  viewport={{ once: true }}
                  className="p-6 rounded-lg bg-card border border-border hover:border-primary/50 transition-all duration-300 group hover:shadow-lg"
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg text-foreground mb-2">
                        {feature.title}
                      </h3>
                      <p className="text-muted-foreground">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
