// app/page.tsx
import { client } from '../sanity/lib/client';
import AnimatedSection from '../components/animateSection';
import { ExternalLink, Code2, Briefcase, MessageSquare } from 'lucide-react';

async function getPortfolioData() {
  const projects = await client.fetch(`*[_type == "project"]{
    _id,
    title,
    description,
    tags,
    githubLink,
    liveLink
  }`);

  const skills = await client.fetch(`*[_type == "skill"]{
    _id,
    name,
    category
  }`);

  return { projects, skills };
}

export default async function HomePage() {
  const { projects, skills } = await getPortfolioData();

  const demoSkills = skills.length > 0 ? skills : [
    { _id: '1', name: 'Next.js', category: 'Frontend' },
    { _id: '2', name: 'TypeScript', category: 'Frontend' },
    { _id: '3', name: 'Node.js', category: 'Backend' },
    { _id: '4', name: 'MongoDB', category: 'Database' },
  ];

  return (
    <main className="min-h-screen bg-[#030712] text-gray-100 selection:bg-blue-500/30 overflow-x-hidden relative">
      <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] rounded-full bg-blue-500/10 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[20%] right-[-10%] w-[600px] h-[600px] rounded-full bg-purple-500/10 blur-[150px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6 py-20 space-y-32 relative z-10">
        
        {/* About Me */}
        <AnimatedSection>
          <header className="space-y-6 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 text-xs font-medium text-blue-400 bg-blue-500/10 rounded-full border border-blue-500/20">
              <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" /> Available for projects
            </div>
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight bg-gradient-to-r from-white via-gray-200 to-gray-500 bg-clip-text text-transparent">
              Md Abdur Rahman Raqeeb
            </h1>
            <p className="text-xl text-gray-400 leading-relaxed">
              I build scalable full-stack web applications with high-fidelity interactions. Focused on performance, clean structure, and seamless user experiences.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <a href="#projects" className="px-6 py-3 rounded-xl bg-blue-600 text-white font-medium hover:bg-blue-500 transition-all shadow-lg shadow-blue-600/20 hover:scale-[1.02]">
                View My Work
              </a>
              <a href="#contact" className="px-6 py-3 rounded-xl bg-gray-900 border border-gray-800 text-gray-300 font-medium hover:bg-gray-800 transition-all hover:scale-[1.02]">
                Let's Talk
              </a>
            </div>
          </header>
        </AnimatedSection>

        {/* Skills */}
        <AnimatedSection delay={0.2}>
          <section className="space-y-8">
            <div className="flex items-center gap-3 border-b border-gray-800 pb-4">
              <Code2 className="text-blue-400 w-6 h-6" />
              <h2 className="text-3xl font-bold tracking-tight">Core Competencies</h2>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {demoSkills.map((skill: any) => (
                <div 
                  key={skill._id} 
                  className="group bg-gray-900/40 border border-gray-800/80 p-5 rounded-2xl hover:border-blue-500/40 hover:bg-gray-900/80 transition-all duration-300 transform hover:-translate-y-1"
                >
                  <p className="font-semibold text-gray-200 group-hover:text-blue-400 transition-colors">{skill.name}</p>
                  <span className="text-xs text-gray-500 uppercase tracking-wider block mt-1">{skill.category}</span>
                </div>
              ))}
            </div>
          </section>
        </AnimatedSection>

        {/* Projects */}
        <AnimatedSection>
          <section id="projects" className="space-y-8">
            <div className="flex items-center gap-3 border-b border-gray-800 pb-4">
              <Briefcase className="text-purple-400 w-6 h-6" />
              <h2 className="text-3xl font-bold tracking-tight">Selected Projects</h2>
            </div>
            {projects.length === 0 ? (
              <div className="text-center py-12 bg-gray-900/20 border border-dashed border-gray-800 rounded-2xl">
                <p className="text-gray-500 italic">No projects deployed yet. Add them seamlessly via Sanity Dashboard!</p>
              </div>
            ) : (
              <div className="grid md:grid-cols-2 gap-6">
                {projects.map((project: any) => (
                  <div 
                    key={project._id} 
                    className="group bg-gray-900/30 border border-gray-800 p-6 rounded-2xl flex flex-col justify-between space-y-6 hover:border-purple-500/30 transition-all duration-300"
                  >
                    <div className="space-y-4">
                      <h3 className="text-xl font-bold text-gray-100 group-hover:text-purple-400 transition-colors">{project.title}</h3>
                      <p className="text-gray-400 text-sm leading-relaxed line-clamp-3">{project.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {project.tags?.map((tag: string) => (
                          <span key={tag} className="text-xs bg-gray-900 border border-gray-800 text-purple-300 px-2.5 py-1 rounded-lg">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="flex space-x-4 pt-4 border-t border-gray-800/60">
                      {project.githubLink && (
                        <a href={project.githubLink} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 text-sm text-gray-400 hover:text-white transition-colors">
                          <Github className="w-4 h-4" /> Code
                        </a>
                      )}
                      {project.liveLink && (
                        <a href={project.liveLink} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 text-sm text-purple-400 hover:text-purple-300 transition-colors">
                          <ExternalLink className="w-4 h-4" /> Live Demo
                        </a>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </section>
        </AnimatedSection>

        {/* Contact */}
        <AnimatedSection>
          <section id="contact" className="bg-gradient-to-br from-gray-900 to-gray-950 border border-gray-800 rounded-3xl p-8 md:p-12 text-center space-y-6 relative overflow-hidden">
            <MessageSquare className="w-10 h-10 text-blue-400 mx-auto" />
            <h2 className="text-3xl font-bold tracking-tight">Let's build something epic together</h2>
            <p className="text-gray-400 max-w-xl mx-auto">
              Whether you have a fully-formed idea or just want to chat about tech stack optimization, drop me a message.
            </p>
            <div className="pt-4">
              <a href="mailto:your-email@example.com" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white text-gray-950 font-semibold hover:bg-gray-200 transition-all">
                Send an Email ↗
              </a>
            </div>
          </section>
        </AnimatedSection>

      </div>
    </main>
  );
}
