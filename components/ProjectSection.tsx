// components/ProjectSection.tsx - অংশ ১
'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Briefcase, X } from 'lucide-react';
import { urlFor } from '../sanity/lib/image';

interface Project {
  _id: string;
  title: string;
  description: string;
  tags: string[];
  githubLink?: string;
  liveLink?: string;
  image?: any;
}

export default function ProjectSection({ projects }: { projects: Project[] }) {
  const [showAll, setShowAll] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  // প্রথম ২টি প্রজেক্ট ফিল্টার করে রাখার লজিক
  const visibleProjects = showAll ? projects : projects.slice(0, 2);

  return (
    <section id="projects" className="space-y-8 relative">
      <div className="flex items-center gap-3 border-b border-gray-800 pb-4">
        <Briefcase className="text-purple-400 w-6 h-6" />
        <h2 className="text-3xl font-bold tracking-tight">Selected Projects</h2>
      </div>

      {/* একটার নিচে একটা (Vertical Stack) লেআউট */}
      <div className="flex flex-col gap-6 max-w-3xl mx-auto w-full">
        {visibleProjects.map((project) => {
          const imageUrl = project.image ? urlFor(project.image).url() : null;

          return (
            <motion.div
              key={project._id}
              layoutId={`card-${project._id}`}
              onClick={() => setSelectedProject(project)}
              whileHover={{ scale: 1.01, y: -2 }}
              transition={{ type: 'spring', stiffness: 300, damping: 25 }}
              className="group bg-gray-900/20 border border-gray-800/80 rounded-2xl flex flex-col md:flex-row overflow-hidden cursor-pointer hover:border-purple-500/30 transition-all shadow-lg min-h-[200px]"
            >
              {/* বাম পাশে ছবি (যদি আপলোড করা থাকে) */}
              {imageUrl && (
                <div className="w-full md:w-64 h-48 md:h-auto overflow-hidden bg-gray-950 border-b md:border-b-0 md:border-r border-gray-800 relative flex-shrink-0">
                  <img 
                    src={imageUrl} 
                    alt={project.title} 
                    className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-500"
                  />
                </div>
              )}

              {/* ডান পাশে টেক্সট কন্টেন্ট */}
              <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-gray-100 group-hover:text-purple-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed line-clamp-3">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 pt-1">
                    {project.tags?.map((tag) => (
                      <span key={tag} className="text-xs bg-gray-900 border border-gray-800 text-purple-300 px-2.5 py-1 rounded-lg">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-gray-800/40" onClick={(e) => e.stopPropagation()}>
                  <span className="text-xs text-purple-400/70 font-medium group-hover:text-purple-400 transition-colors">
                    Click for details →
                  </span>
                  
                  <div className="flex items-center gap-4">
                    {project.githubLink && (
                      <a href={project.githubLink} target="_blank" rel="noreferrer" className="text-gray-400 hover:text-white transition-colors">
                        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" xmlns="http://w3.org">
                          <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
                        </svg>
                      </a>
                    )}
                    {project.liveLink && (
                      <a href={project.liveLink} target="_blank" rel="noreferrer" className="text-purple-400 hover:text-purple-300 transition-colors">
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Show More / Show Less বাটন */}
      {projects.length > 2 && (
        <div className="text-center pt-6">
          <button
            onClick={() => setShowAll(!showAll)}
            className="px-6 py-2.5 rounded-xl bg-gray-900 border border-gray-800 text-gray-300 font-medium hover:bg-gray-800 hover:text-white transition-all text-sm hover:scale-[1.02] active:scale-[0.98]"
          >
            {showAll ? 'Show Less ↑' : `Show More (${projects.length - 2}+) ↓`}
          </button>
        </div>
      )}

      {/* পপ-আপ ডিটেইলস মোডাল (Modal Animation) */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="absolute inset-0 bg-black/80 backdrop-blur-md"
            />

            <motion.div
              layoutId={`card-${selectedProject._id}`}
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: 'spring', duration: 0.5 }}
              className="bg-[#0b0f19] border border-gray-800 w-full max-w-2xl rounded-3xl overflow-hidden relative z-10 shadow-2xl flex flex-col max-h-[90vh]"
            >
              {/* ক্লোজ বাটন */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 p-2 rounded-full bg-gray-900/80 border border-gray-800 text-gray-400 hover:text-white hover:bg-gray-800 transition-colors z-20"
              >
                <X className="w-5 h-5" />
              </button>

              {/* মোডালের ভেতরের ইমেজ */}
              {selectedProject.image && (
                <div className="w-full h-64 bg-gray-950 relative">
                  <img 
                    src={urlFor(selectedProject.image).url()} 
                    alt={selectedProject.title} 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0b0f19] to-transparent" />
                </div>
              )}

              {/* মোডাল টেক্সট কন্টেন্ট এরিয়া */}
              <div className="p-6 md:p-8 space-y-6 overflow-y-auto flex-1">
                <div className="space-y-2">
                  <span className="text-xs font-semibold text-purple-400 uppercase tracking-widest block">Project Detail Overview</span>
                  <h3 className="text-2xl md:text-3xl font-extrabold text-gray-100">
                    {selectedProject.title}
                  </h3>
                  <p className="text-gray-300 text-base leading-relaxed pt-2 whitespace-pre-line">
                    {selectedProject.description}
                    {/* components/ProjectSection.tsx এর পপ-আপ ডেসক্রিপশনের নিচে এটি বসান */}
<p className="text-gray-300 text-base leading-relaxed pt-2 whitespace-pre-line">
  {selectedProject.description}
</p>

{/* যদি প্রজেক্টটি DevPulse হয় তবে এর ভেতরের স্পেশাল আর্কিটেকচার হাইলাইট করার জন্য */}
{selectedProject.title.includes('DevPulse') && (
  <div className="mt-4 space-y-3 bg-gray-950/50 border border-gray-800/80 p-4 rounded-xl text-sm">
    <h4 className="font-bold text-purple-400">⚡ Core Architectural Highlights:</h4>
    <ul className="list-disc pl-4 space-y-1.5 text-gray-400">
      <li><strong className="text-gray-300">Granular RBAC System:</strong> Strict route restrictions separating <span className="text-blue-400">Contributors</span> (create/view/own-update) and <span className="text-purple-400">Maintainers</span> (global edit/delete/workflow state changes).</li>
      <li><strong className="text-gray-300">Raw SQL Architecture:</strong> Zero ORMs or query builders used. Relational mapping resolved programmatically via app-level batch data mapping to bypass SQL JOIN footprints.</li>
      <li><strong className="text-gray-300">Secure Token Flow:</strong> Fully encrypted authorization headers deploying signed stateless JSON Web Tokens alongside salted bcrypt credentials hashing.</li>
    </ul>
  </div>
)}

                  </p>
                </div>

                <div className="space-y-2">
                  <h4 className="text-sm font-semibold text-gray-400">Technologies Used:</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.tags?.map((tag) => (
                      <span key={tag} className="text-xs bg-purple-500/10 border border-purple-500/20 text-purple-300 px-3 py-1 rounded-lg font-medium">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* মোডালের ভেতরের সোর্স কোড ও লাইভ ডেমো বাটন */}
                <div className="flex space-x-4 pt-6 border-t border-gray-800/80">
                  {selectedProject.githubLink && (
                    <a
                      href={selectedProject.githubLink}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-medium rounded-xl bg-gray-900 border border-gray-800 text-gray-300 hover:bg-gray-800 hover:text-white transition-colors"
                    >
                      <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" xmlns="http://w3.org">
                        <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
                      </svg>
                      Source Code
                    </a>
                  )}
                  {selectedProject.liveLink && (
                    <a
                      href={selectedProject.liveLink}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-medium rounded-xl bg-purple-600 text-white hover:bg-purple-500 transition-colors shadow-lg shadow-purple-600/20"
                    >
                      <ExternalLink className="w-4 h-4" /> Live Preview
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
