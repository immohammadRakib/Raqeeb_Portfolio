// app/page.tsx - অংশ ১
import { client } from '../sanity/lib/client';
import AnimatedSection from '../components/AnimatedSection';
import ProjectSection from '../components/ProjectSection';
import ContactForm from '../components/ContactForm';
import Footer from '../components/Footer';


import { ExternalLink, Code2, Briefcase, MessageSquare, Server, Layout, Database } from 'lucide-react';

async function getPortfolioData() {
  try {
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
  } catch (error) {
    return { projects: [], skills: [] };
  }
}
export default async function HomePage() {
  const { projects, skills } = await getPortfolioData();

  const defaultSkills = skills.length > 0 ? skills : [
    { _id: 's1', name: 'Next.js', category: 'Frontend' },
    { _id: 's2', name: 'TypeScript', category: 'Frontend' },
    { _id: 's3', name: 'Tailwind CSS', category: 'Frontend' },
    { _id: 's4', name: 'Node.js', category: 'Backend' },
    { _id: 's5', name: 'Express.js', category: 'Backend' },
    { _id: 's6', name: 'MongoDB', category: 'Database' },
    { _id: 's7', name: 'PostgreSQL', category: 'Database' },
    { _id: 's8', name: 'Git & GitHub', category: 'Tools' },
  ];

  const defaultProjects = projects.length > 0 ? projects : [
    {
      _id: 'p1',
      title: 'ApexCommerce - FullStack E-Commerce',
      description: 'A premium digital marketplace featuring secure Stripe payments, comprehensive admin dashboards, real-time inventory tracking, and lightning-fast server-side rendering.',
      tags: ['Next.js', 'TypeScript', 'Tailwind', 'Stripe', 'MongoDB'],
      githubLink: 'https://github.com',
      liveLink: 'https://github.com'
    },
    {
      _id: 'p2',
      title: 'DevPulse - Collaborative Workspace',
      description: 'An interactive productivity platform built for remote developers. It includes dynamic kanban boards, live chat via WebSockets, and encrypted file sharing spaces.',
      tags: ['Next.js', 'Socket.io', 'Node.js', 'PostgreSQL'],
      githubLink: 'https://github.com',
      liveLink: 'https://github.com'
    },
    {
      _id: 'p3',
      title: 'SaaSify - Analytics Dashboard AI',
      description: 'A sleek data analytics application that integrates with OpenAI APIs to generate smart chart insights, financial predictive modeling, and user activity mapping tools.',
      tags: ['Next.js', 'Recharts', 'OpenAI SDK', 'Tailwind'],
      githubLink: 'https://github.com',
      liveLink: 'https://github.com'
    }
  ];

  const services = [
    {
      icon: <Layout className="w-6 h-6 text-blue-400" />,
      title: "Frontend Engineering",
      desc: "Crafting highly reactive, accessible, and fluid user interfaces with polished state management and custom Framer Motion interactive layouts."
    },
    {
      icon: <Server className="w-6 h-6 text-emerald-400" />,
      title: "Robust Backends & APIs",
      desc: "Architecting scalable server-side logical layers, handling secure JWT authentications, webhooks, and modern relational/non-relational datasets."
    },
    {
      icon: <Database className="w-6 h-6 text-purple-400" />,
      title: "Database Architecture",
      desc: "Designing secure dynamic data structures, handling fast content query pipelines via schemas, optimizing caching strategies, and asset CDNs."
    }
  ];

  return (
    <main className="min-h-screen bg-[#030712] text-gray-100 selection:bg-blue-500/30 overflow-x-hidden relative">
      <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] rounded-full bg-blue-500/10 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[20%] right-[-10%] w-[600px] h-[600px] rounded-full bg-purple-500/10 blur-[150px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6 py-20 space-y-32 relative z-10">
        
        {/* ১. About Me (Hero Section) */}
               {/* ১. About Me (Hero Section) */}
        <AnimatedSection>
          <header className="grid md:grid-cols-12 gap-12 items-center min-h-[50vh]">
            
            {/* বাম পাশ: টেক্সট এবং বাটন (md:col-span-7) */}
            <div className="space-y-6 max-w-3xl md:col-span-7 order-2 md:order-1 text-center md:text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 text-xs font-medium text-blue-400 bg-blue-500/10 rounded-full border border-blue-500/20 mx-auto md:mx-0">
                <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" /> Available for new opportunities
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight bg-gradient-to-r from-white via-gray-200 to-gray-500 bg-clip-text text-transparent">
                Md Abdur Rahman Raqeeb
              </h1>
              <p className="text-lg text-gray-400 leading-relaxed">
                Hello! I am a passionate Full-Stack Engineer focused on pushing the boundaries of what is possible on the web. I specialize in weaving clean code structures, solid databases, and modern interactive animations into seamless real-world digital experiences.
              </p>
              
              {/* বাটন গ্রুপ */}
              <div className="flex flex-wrap gap-4 pt-4 justify-center md:justify-start">
                <a href="#projects" className="px-6 py-3 rounded-xl bg-blue-600 text-white font-medium hover:bg-blue-500 transition-all shadow-lg shadow-blue-600/20 hover:scale-[1.02]">
                  View Projects
                </a>
                
                {/* রেজুমে বাটন (আলাদা ট্যাবে ওপেন হবে) */}
                <a 
                  href="https://drive.google.com/file/d/14AI7-r_E6jAcrrk_ThTt07qLTgLKAJaF/view" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="px-6 py-3 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-medium hover:from-purple-500 hover:to-indigo-500 transition-all shadow-lg shadow-purple-600/20 hover:scale-[1.02]"
                >
                  View Resume ↗
                </a>

                <a href="#contact" className="px-6 py-3 rounded-xl bg-gray-900 border border-gray-800 text-gray-300 font-medium hover:bg-gray-800 transition-all hover:scale-[1.02]">
                  Get In Touch
                </a>
              </div>
            </div>

            {/* ডান পাশ: অ্যানিমেটেড রাউন্ড ফটো সেকশন (md:col-span-5) */}
            <div className="md:col-span-5 order-1 md:order-2 flex justify-center items-center">
              <div className="relative w-64 h-64 sm:w-72 sm:h-72 group flex items-center justify-center">
                
                {/* পিছনের নিয়ন গ্লো এবং রোটেটিং বর্ডার অ্যানিমেশন */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-blue-500 via-purple-500 to-pink-500 animate-spin [animation-duration:8s] opacity-70 blur-[2px] group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* একটু বড় পালস গ্লো ইফেক্ট */}
                <div className="absolute inset-[-8px] rounded-full bg-blue-500/20 blur-xl animate-pulse -z-10 group-hover:bg-purple-500/30 transition-colors" />

                {/* মেইন ইমেজ কন্টেইনার */}
                <div className="absolute inset-[3px] rounded-full bg-[#030712] overflow-hidden flex items-center justify-center">
                  {/* আপনার ইমেজ না থাকা পর্যন্ত এটি একটি চমৎকার প্লেসহোল্ডার ডামি অ্যাভাটার দেখাবে */}
                  <img 
                    src="/dp.jpg" 
                    alt="Md Abdur Rahman Raqeeb"
                    className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500 ease-out"
                  />
                </div>
                
              </div>
            </div>

          </header>
        </AnimatedSection>


        {/* ২. Services Section */}
        <AnimatedSection>
          <section className="space-y-8">
            <div className="flex items-center gap-3 border-b border-gray-800 pb-4">
              <h2 className="text-3xl font-bold tracking-tight">Services I Provide</h2>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {services.map((service, index) => (
                <div key={index} className="bg-gray-900/30 border border-gray-800/80 p-6 rounded-2xl space-y-4 hover:border-gray-700 transition-colors">
                  <div className="w-12 h-12 rounded-xl bg-gray-900 flex items-center justify-center border border-gray-800">
                    {service.icon}
                  </div>
                  <h3 className="text-lg font-bold text-gray-200">{service.title}</h3>
                  <p className="text-sm text-gray-400 leading-relaxed">{service.desc}</p>
                </div>
              ))}
            </div>
          </section>
        </AnimatedSection>
        {/* ৩. Skills Section */}
              {/* ৩. Skills Section (With Icons & Neon Glow) */}
        <AnimatedSection delay={0.1}>
          <section className="space-y-8">
            <div className="flex items-center gap-3 border-b border-gray-800 pb-4">
              <Code2 className="text-blue-400 w-6 h-6" />
              <h2 className="text-3xl font-bold tracking-tight">Core Competencies</h2>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {defaultSkills.map((skill: any) => {
                // স্কিলের নাম অনুযায়ী কাস্টম SVG লোগো সিলেক্ট করার লজিক
                let skillIcon = null;
                const nameLower = skill.name.toLowerCase();

                if (nameLower.includes('next.js') || nameLower.includes('nextjs')) {
                  skillIcon = <svg className="w-6 h-6 fill-current text-white" viewBox="0 0 24 24" xmlns="http://w3.org"><path d="M18.663 19.349l-6.23-7.525L12 11.417V19.5h1.226v-6.138l5.437 6.643a8.882 8.882 0 0 0 1.954-1.343l-.001-1.026zM12 4.5a.75.75 0 0 0-.75.75v5.828l1.371 1.657V5.25A.75.75 0 0 0 12 4.5zM12 0a12 12 0 1 0 12 12A12.014 12.014 0 0 0 12 0zm0 22.5a10.5 10.5 0 1 1 10.5-10.5A10.511 10.511 0 0 1 12 22.5z"/></svg>;
                } else if (nameLower.includes('typescript') || nameLower.includes('ts')) {
                  skillIcon = <svg className="w-6 h-6 fill-current text-blue-400" viewBox="0 0 24 24" xmlns="http://w3.org"><path d="M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0zm17.363 9.42c1.396 0 2.585.344 3.565 1.031l-1.332 2.164c-.664-.473-1.422-.72-2.18-.72-.942 0-1.528.435-1.528 1.112 0 1.66 4.707 1.636 4.707 5.215 0 2.222-1.742 3.826-4.636 3.826-1.633 0-3.14-.54-4.116-1.42l1.242-2.223c.895.688 1.983 1.096 2.925 1.096 1.06 0 1.696-.496 1.696-1.187 0-1.89-4.707-1.644-4.707-5.222 0-2.073 1.633-3.896 4.634-3.896zm-9.356.16v2.12H6.182v10.11H3.143v-10.11H.153V9.58z"/></svg>;
                } else if (nameLower.includes('tailwind')) {
                  skillIcon = <svg className="w-6 h-6 fill-current text-cyan-400" viewBox="0 0 24 24" xmlns="http://w3.org"><path d="M12 6.036c-2.402 0-4.623.764-6.444 2.056C4.437 10.364 4.14 12.87 5.2 14.8c1.35 2.455 4.314 3.164 6.8 2.055 2.127-.95 3.993-2.735 5.564-4.623.364-.436.364-1.028 0-1.464C16.143 8.91 14.187 7.027 12 6.036zm0-5.885c-2.402 0-4.623.764-6.444 2.056C4.437 6.473 4.14 8.98 5.2 10.91c1.35 2.454 4.314 3.164 6.8 2.055 2.127-.95 3.993-2.736 5.564-4.624.364-.436.364-1.027 0-1.464C16.143 4.98 14.187 3.097 12 .151z"/></svg>;
                } else if (nameLower.includes('node')) {
                  skillIcon = <svg className="w-6 h-6 fill-current text-green-500" viewBox="0 0 24 24" xmlns="http://w3.org"><path d="M12 0L2.35 5.57v11.12L12 22.25l9.65-5.56V5.57zm4.33 14.16c-.2.33-.53.58-.91.7a3.48 3.48 0 0 1-2.46-.22l-.12-.07V15.7l.11.06a2.27 2.27 0 0 0 1.62.15c.24-.07.45-.23.57-.45a1.26 1.26 0 0 0-.25-1.57c-.36-.3-.82-.5-1.3-.6l-.6-.11A2.52 2.52 0 0 1 11.23 11a2.38 2.38 0 0 1 .4-1.39c.23-.33.56-.58.94-.7a3.3 3.3 0 0 1 2.37.19l.11.06v-1.1l-.11-.06a4.41 4.41 0 0 0-3.14-.26c-.49.14-.92.46-1.2.9a3.52 3.52 0 0 0-.46 2.36c.1.66.42 1.27.92 1.7a3.7 3.7 0 0 0 2.22.8c.3.03.58.12.83.27.2.14.3.37.28.6a1.14 1.14 0 0 1-.3.8z"/></svg>;
                } else if (nameLower.includes('mongo')) {
                  skillIcon = <svg className="w-6 h-6 fill-current text-emerald-500" viewBox="0 0 24 24" xmlns="http://w3.org"><path d="M12 .03a.53.53 0 0 0-.2.03C10 1 6.33 5.3 6.33 10.15c0 4.16 2.45 6.78 5.43 7.82V23.5a.5.5 0 0 0 .5.5.5.5 0 0 0 .5-.5v-5.53c2.94-1.05 5.35-3.66 5.35-7.82 0-4.85-3.66-9.13-5.46-10.1a.57.57 0 0 0-.45-.02zM12 1.6c1.36.85 4.3 4.54 4.3 8.55 0 3.35-1.8 5.46-4.3 6.35zm0 14.9v-13.3c2.16.85 3.3 3.1 3.3 6.65 0 3.3-1.14 5.75-3.3 6.65z"/></svg>;
                } else if (nameLower.includes('postgres')) {
                  skillIcon = <svg className="w-6 h-6 fill-current text-blue-500" viewBox="0 0 24 24" xmlns="http://w3.org"><path d="M12 0C5.37 0 0 5.37 0 12s5.37 12 12 12 12-5.37 12-12S18.63 0 12 0zm5.12 16.23c-.76.76-1.86 1.14-3.31 1.14h-3.1v3.13H8.38V5.37h5.11c1.45 0 2.53.37 3.25 1.12.72.74 1.08 1.83 1.08 3.27 0 1.16-.2 2.05-.6 2.66-.4.61-1 1.01-1.8 1.21.94.22 1.63.66 2.07 1.32.44.66.66 1.61.66 2.85 0 1.48-.34 2.57-1.03 3.36z"/></svg>;
                } else if (nameLower.includes('git')) {
                  skillIcon = <svg className="w-6 h-6 fill-current text-orange-600" viewBox="0 0 24 24" xmlns="http://w3.org"><path d="M23.546 10.93L13.07.452a1.436 1.436 0 0 0-2.032 0l-2.11 2.108 3.016 3.017a1.439 1.439 0 0 1 2.034.024 1.438 1.438 0 0 1 .016 2.015l-3.02 3.02a1.442 1.442 0 0 1-1.921.111l-2.613-2.615v4.257l2.842 2.842a1.44 1.44 0 0 0 2.035 0l10.233-10.23a1.442 1.442 0 0 0 0-2.036zM3.469 11.45a1.442 1.442 0 0 0 0 2.036l2.122 2.12a1.44 1.44 0 0 0 2.035 0l2.124-2.123v-4.07L7.636 7.298a1.44 1.44 0 0 0-2.035 0L3.47 11.45z"/></svg>;
                } else {
                  // কোনো লোগো না মিললে ডিফল্ট কোড ব্র্যাকেট লোগো দেখাবে
                  skillIcon = <Code2 className="w-6 h-6 text-gray-400 group-hover:text-blue-400" />;
                }

                return (
                  <div 
                    key={skill._id} 
                    className="group bg-gray-900/40 border border-gray-800/80 p-5 rounded-2xl hover:border-blue-500/40 hover:bg-gray-900/80 transition-all duration-300 transform hover:-translate-y-1 flex items-center gap-4"
                  >
                    {/* লোগো কন্টেইনার */}
                    <div className="w-10 h-10 rounded-xl bg-gray-950 flex items-center justify-center border border-gray-800 group-hover:border-blue-500/30 transition-colors shadow-inner">
                      {skillIcon}
                    </div>
                    
                    {/* স্কিল টেক্সট */}
                    <div>
                      <p className="font-semibold text-gray-200 group-hover:text-blue-400 transition-colors">{skill.name}</p>
                      <span className="text-xs text-gray-500 uppercase tracking-wider block mt-0.5">{skill.category}</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </section>
        </AnimatedSection>


        {/* ৪. Projects Section */}
        <AnimatedSection>
          <ProjectSection projects={defaultProjects} />
        </AnimatedSection>

        {/* ৫. Contact Section */}
        <AnimatedSection>
           <ContactForm />
        </AnimatedSection>
          </div> {/* max-w-5xl কন্টেইনার ডিব এর ক্লোজিং */}
      
      {/* নতুন ফুটার সেকশনটি এখানে বসল (max-w-5xl ডিব এর বাইরে কিন্তু মেইনের ভেতরে) */}
      <Footer />
      {/* </div> */}
    </main>
  );
}
