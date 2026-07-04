import { client } from "../sanity/lib/client";
import AnimatedSection from "../components/AnimatedSection";
import ProjectSection from "../components/ProjectSection";
import ContactForm from "../components/ContactForm";
import Footer from "../components/Footer";
import SkillsSection from "../components/SkillSection";
import ServicesSection from "../components/ServicesSection";
import HeroSection from "../components/HeroSection";

import {
  ExternalLink,
  Code2,
  Briefcase,
  MessageSquare,
  Server,
  Layout,
  Database,
} from "lucide-react";

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

  const defaultSkills =
    skills.length > 0
      ? skills
      : [
          { _id: "s1", name: "Next.js", category: "Frontend" },
          { _id: "s2", name: "TypeScript", category: "Frontend" },
          { _id: "s3", name: "Tailwind CSS", category: "Frontend" },
          { _id: "s4", name: "Node.js", category: "Backend" },
          { _id: "s5", name: "Express.js", category: "Backend" },
          { _id: "s7", name: "PostgreSQL", category: "Database" },
          { _id: "s8", name: "Git & GitHub", category: "Tools" },
          { _id: "s6", name: "Prisma ORM", category: "Database" },
        ];

  const defaultProjects =
    projects.length > 0
      ? projects
      : [
          {
            _id: "p2",
            title: "DevPulse - Collaborative Issue Tracker",
            description:
              "A secure backend infrastructure engineered for software engineering teams to track internal bugs and feature workflows. Implemented robust authorization guards supporting granular role-based access control (RBAC) across multiple tiers using custom Node/Express APIs. Handled relational data persistence entirely using Raw PostgreSQL query pipelines (Zero ORMs/JOINs) optimized with application-level entity batching.",
            tags: [
              "Node.js",
              "TypeScript",
              "Express.js",
              "PostgreSQL",
              "JWT",
              "Bcrypt",
            ],
            githubLink: "https://github.com/immohammadRakib/Assignment_2",
            liveLink: "https://assignment-2-nxjx.onrender.com/",
          },
          {
            _id: "p1",
            title: "SCHOOLING - Course Platform",
            description:
              "An educational platform where users can explore diverse courses, access detailed descriptions via protected private routes, and download course curriculum PDFs. It features a premium subscription model requiring user authentication with smart redirection logic back to the intended premium content after a successful login.",
            tags: ["React", "Firebase", "Node.js", "Express.js", "MongoDB"],
            githubLink: "https://github.com/immohammadRakib",
            liveLink: "https://fire-router-context.web.app",
          },
        ];

  const services = [
    {
      icon: <Layout className="w-6 h-6 text-blue-400" />,
      title: "Frontend Engineering",
      desc: "Crafting highly reactive, accessible, and fluid user interfaces with polished state management and custom Framer Motion interactive layouts.",
    },
    {
      icon: <Server className="w-6 h-6 text-emerald-400" />,
      title: "Robust Backends & APIs",
      desc: "Architecting scalable server-side logical layers, handling secure JWT authentications, webhooks, and modern relational/non-relational datasets.",
    },
    {
      icon: <Database className="w-6 h-6 text-purple-400" />,
      title: "Database Architecture",
      desc: "Designing secure dynamic data structures, handling fast content query pipelines via schemas, optimizing caching strategies, and asset CDNs.",
    },
  ];

  return (
    <main className="min-h-screen bg-[#030712] text-gray-100 selection:bg-blue-500/30 overflow-x-hidden relative">
      <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] rounded-full bg-blue-500/10 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[20%] right-[-10%] w-[600px] h-[600px] rounded-full bg-purple-500/10 blur-[150px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6 py-20 space-y-32 relative z-10">
        {/* ১. About Me (Hero Section) */}
        {/* ১. About Me (Hero Section) */}
        {/* ১. About Me / Hero Section (Imported Component) */}
        <AnimatedSection>
          <HeroSection />
        </AnimatedSection>

        {/* ২. Services Section */}
        {/* ২. Services Section (Imported Component) */}
        <AnimatedSection>
          <ServicesSection services={services} />
        </AnimatedSection>

        {/* ৩. Skills Section */}
        {/* ৩. Skills Section (With Icons & Neon Glow) */}
        {/* ৩. Skills Section (Imported Component) */}
        <AnimatedSection delay={0.1}>
          <SkillsSection skills={defaultSkills} />
        </AnimatedSection>

        {/* ৪. Projects Section */}
        <AnimatedSection>
          <ProjectSection projects={defaultProjects} />
        </AnimatedSection>

        {/* ৫. Contact Section */}
        <AnimatedSection>
          <ContactForm />
        </AnimatedSection>
      </div>

      <Footer />
      {/* </div> */}
    </main>
  );
}
