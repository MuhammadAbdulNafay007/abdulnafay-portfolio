"use client";

import { motion } from "framer-motion";
import { experienceData } from "@/data/experience";
import { Briefcase, BookOpen } from "lucide-react";

export function Experience() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, x: -20 },
    show: { opacity: 1, x: 0 },
  };

  const workExperience = experienceData.filter((e) => e.type === "work");
  const education = experienceData.filter((e) => e.type === "education");

  return (
    <section id="experience" className="py-20 relative overflow-hidden">
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
            JOURNEY
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground text-balance">
            Experience & Education
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent rounded-full mx-auto mt-6" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Work Experience */}
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-foreground mb-8 flex items-center gap-2">
              <Briefcase className="w-6 h-6 text-primary" />
              Work Experience
            </h3>

            <div className="space-y-8 relative before:absolute before:left-0 before:top-0 before:bottom-0 before:w-0.5 before:bg-gradient-to-b before:from-primary before:to-accent">
              {workExperience.map((exp, index) => (
                <motion.div
                  key={exp.id}
                  variants={item}
                  className="relative pl-8"
                >
                  {/* Timeline dot */}
                  <div className="absolute left-0 top-1 w-4 h-4 rounded-full bg-primary border-4 border-background transform -translate-x-1.75" />

                  <motion.div
                    whileHover={{ x: 5 }}
                    className="p-6 rounded-lg bg-card border border-border hover:border-primary/50 transition-all duration-300 group"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-2">
                      <div>
                        <h4 className="text-lg font-bold text-foreground">
                          {exp.title}
                        </h4>
                        <p className="text-primary font-semibold text-sm mt-0.5">
                          {exp.company}
                        </p>
                      </div>
                      <span className="text-xs font-medium text-muted-foreground whitespace-nowrap">
                        {exp.startDate} — {exp.endDate}
                      </span>
                    </div>

                    {exp.location && (
                      <p className="text-xs text-muted-foreground mb-3">
                        📍 {exp.location}
                      </p>
                    )}

                    <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                      {exp.description}
                    </p>

                    {exp.skills && (
                      <div className="flex flex-wrap gap-2">
                        {exp.skills.map((skill) => (
                          <span
                            key={skill}
                            className="px-2 py-1 rounded-md bg-primary/10 text-primary text-xs font-medium"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    )}
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Education */}
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-foreground mb-8 flex items-center gap-2">
              <BookOpen className="w-6 h-6 text-accent" />
              Education
            </h3>

            <div className="space-y-8 relative before:absolute before:left-0 before:top-0 before:bottom-0 before:w-0.5 before:bg-gradient-to-b before:from-accent before:to-primary">
              {education.map((edu, index) => (
                <motion.div
                  key={edu.id}
                  variants={item}
                  className="relative pl-8"
                >
                  {/* Timeline dot */}
                  <div className="absolute left-0 top-1 w-4 h-4 rounded-full bg-accent border-4 border-background transform -translate-x-1.75" />

                  <motion.div
                    whileHover={{ x: 5 }}
                    className="p-6 rounded-lg bg-card border border-border hover:border-accent/50 transition-all duration-300 group"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-2">
                      <div>
                        <h4 className="text-lg font-bold text-foreground">
                          {edu.title}
                        </h4>
                        <p className="text-accent font-semibold text-sm mt-0.5">
                          {edu.company}
                        </p>
                      </div>
                      <span className="text-xs font-medium text-muted-foreground whitespace-nowrap">
                        {edu.startDate} — {edu.endDate}
                      </span>
                    </div>

                    {edu.location && (
                      <p className="text-xs text-muted-foreground mb-3">
                        📍 {edu.location}
                      </p>
                    )}

                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {edu.description}
                    </p>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
