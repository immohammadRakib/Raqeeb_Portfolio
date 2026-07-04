
"use strict";
"use client";

import { Code2 } from "lucide-react";
import { motion } from "framer-motion";

interface Skill {
  _id: string;
  name: string;
  category: string;
}

export default function SkillsSection({ skills }: { skills: Skill[] }) {
  return (
    <section className="space-y-8">
      <div className="flex items-center gap-3 border-b border-gray-800 pb-4">
        <Code2 className="text-blue-400 w-6 h-6" />
        <h2 className="text-3xl font-bold tracking-tight">Core Competencies</h2>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {skills.map((skill, index) => {
          

          return (
            <motion.div
              key={skill._id}
              
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                type: "spring",
                stiffness: 100,
                damping: 15,
                delay: index * 0.05,
              }}
              
              whileHover={{
                scale: 1.04,
                rotateX: 4,
                rotateY: -4,
                z: 10,
              }}
              className="group bg-gray-900/30 border border-gray-800/80 p-5 rounded-2xl flex flex-col justify-center items-center text-center cursor-pointer transition-all duration-300 shadow-md hover:border-blue-500/40 hover:shadow-blue-500/5"
              style={{ transformStyle: "preserve-3d" }}
            >
        
              <div
                style={{ transform: "translateZ(20px)" }}
                className="space-y-2"
              >
                <p className="font-extrabold text-xl bg-gradient-to-r from-white via-gray-100 to-gray-400 bg-clip-text text-transparent group-hover:from-blue-400 group-hover:to-cyan-400 transition-colors duration-300">
                  {skill.name}
                </p>
                <span className="text-xs text-gray-500 uppercase tracking-widest block font-semibold">
                  {skill.category}
                </span>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
