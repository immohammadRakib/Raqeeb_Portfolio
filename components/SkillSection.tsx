// components/SkillsSection.tsx
'use strict';
'use client';

import { Code2 } from 'lucide-react';

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
        {skills.map((skill) => {
          let skillIcon = null;
          const nameLower = skill.name.toLowerCase();

          // কাঁচের মতো শার্প অফিশিয়াল SVG লোগো লজিক
          if (nameLower.includes('next.js') || nameLower.includes('nextjs')) {
            skillIcon = <svg className="w-5 h-5 fill-current text-white" viewBox="0 0 24 24" xmlns="http://w3.org"><path d="M12 0a12 12 0 1 0 12 12A12.013 12.013 0 0 0 12 0zm6.662 19.35l-6.23-7.525L12 11.417V19.5h1.226v-6.138l5.437 6.643a8.88 8.88 0 0 0 1.954-1.343l-.355-1.162zM12 4.5a.75.75 0 0 0-.75.75v5.828l1.371 1.657V5.25A.75.75 0 0 0 12 4.5zm0-3.5a11 11 0 1 1-11 11 11 11 0 0 1 11-11z"/></svg>;
          } else if (nameLower.includes('typescript') || nameLower.includes('ts')) {
            skillIcon = <svg className="w-5 h-5 fill-current text-[#3178C6]" viewBox="0 0 24 24" xmlns="http://w3.org"><path d="M0 0h24v24H0V0zm21.6 19.462V12.1h-2.154v7.362H21.6zM12.923 12.1H6.154v2.154h2.23V19.46h2.308v-5.207h2.23V12.1z"/></svg>;
          } else if (nameLower.includes('tailwind')) {
            skillIcon = <svg className="w-5 h-5 fill-current text-[#06B6D4]" viewBox="0 0 24 24" xmlns="http://w3.org"><path d="M12 6.036c-2.402 0-4.623.764-6.444 2.056C4.437 10.364 4.14 12.87 5.2 14.8c1.35 2.455 4.314 3.164 6.8 2.055 2.127-.95 3.993-2.735 5.564-4.623.364-.436.364-1.028 0-1.464C16.143 8.91 14.187 7.027 12 6.036zm0-5.885c-2.402 0-4.623.764-6.444 2.056C4.437 4.544 4.14 7.05 5.2 8.98c1.35 2.454 4.314 3.164 6.8 2.055 2.127-.95 3.993-2.736 5.564-4.624.364-.436.364-1.027 0-1.464C16.143 3.09 14.187 1.207 12 .151z"/></svg>;
          } else if (nameLower.includes('node')) {
            skillIcon = <svg className="w-5 h-5 fill-current text-[#339933]" viewBox="0 0 24 24" xmlns="http://w3.org"><path d="M12 1.608L2.35 7.182v11.144L12 23.892l9.65-5.566V7.182zm4.332 14.161c-.2.33-.53.58-.91.7a3.483 3.483 0 0 1-2.46-.22l-.12-.07v1.52l.11.06a2.272 2.272 0 0 0 1.62.15c.24-.07.45-.23.57-.45a1.26 1.26 0 0 0-.25-1.57c-.36-.3-.82-.5-1.3-.6l-.6-.11a2.522 2.522 0 0 1-1.78-2.18c0-.52.14-1 .4-1.39.23-.33.56-.58.94-.7a3.303 3.303 0 0 1 2.37.19l.11.06v-1.1l-.11-.06a4.415 4.415 0 0 0-3.14-.26c-.49.14-.92.46-1.2.9a3.52 3.52 0 0 0-.46 2.36c.1.66.42 1.27.92 1.7a3.7 3.7 0 0 0 2.22.8c.3.03.58.12.83.27.2.14.3.37.28.6a1.143 1.143 0 0 1-.3.8z"/></svg>;
          } else if (nameLower.includes('mongo')) {
            skillIcon = <svg className="w-5 h-5 fill-current text-[#47A248]" viewBox="0 0 24 24" xmlns="http://w3.org"><path d="M12 .03a.53.53 0 0 0-.2.03C10 1 6.33 5.3 6.33 10.15c0 4.16 2.45 6.78 5.43 7.82V23.5a.5.5 0 0 0 .5.5.5.5 0 0 0 .5-.5v-5.53c2.94-1.05 5.35-3.66 5.35-7.82 0-4.85-3.66-9.13-5.46-10.1a.57.57 0 0 0-.45-.02zm0 1.57c1.36.85 4.3 4.54 4.3 8.55 0 3.35-1.8 5.46-4.3 6.35zm0 14.9v-13.3c2.16.85 3.3 3.1 3.3 6.65 0 3.3-1.14 5.75-3.3 6.65z"/> </svg>;
          } else if (nameLower.includes('postgres')) {
            skillIcon = <svg className="w-5 h-5 fill-current text-[#4169E1]" viewBox="0 0 24 24" xmlns="http://w3.org"><path d="M12 0C5.372 0 0 5.372 0 12s5.372 12 12 12 12-5.372 12-12S18.628 0 12 0zm5.122 16.234c-.76.76-1.862 1.138-3.314 1.138h-3.1v3.134H8.384V5.374h5.108c1.45 0 2.532.374 3.254 1.118.72.744 1.082 1.832 1.082 3.268 0 1.16-.2 2.052-.6 2.664-.4.612-1.002 1.014-1.802 1.206.942.22 1.632.66 2.072 1.32.44.66.66 1.61.66 2.852 0 1.48-.344 2.568-1.032 3.352z"/></svg>;
          } else if (nameLower.includes('git')) {
            skillIcon = <svg className="w-5 h-5 fill-current text-[#F05032]" viewBox="0 0 24 24" xmlns="http://w3.org"><path d="M23.546 10.93L13.07.452a1.436 1.436 0 0 0-2.032 0l-2.11 2.108 3.016 3.017a1.439 1.439 0 0 1 2.034.024 1.438 1.438 0 0 1 .016 2.015l-3.02 3.02a1.442 1.442 0 0 1-1.921.111l-2.613-2.615v4.257l2.842 2.842a1.44 1.44 0 0 0 2.035 0l10.233-10.23a1.442 1.442 0 0 0 0-2.036zM3.469 11.45a1.442 1.442 0 0 0 0 2.036l2.122 2.12a1.44 1.44 0 0 0 2.035 0l2.124-2.123v-4.07L7.636 7.298a1.44 1.44 0 0 0-2.035 0L3.47 11.45z"/></svg>;
          } else {
            skillIcon = <Code2 className="w-5 h-5 text-gray-400 group-hover:text-blue-400 transition-colors" />;
          }

          return (
            <div 
              key={skill._id} 
              className="group bg-gray-900/40 border border-gray-800/80 p-5 rounded-2xl hover:border-blue-500/40 hover:bg-gray-900/80 transition-all duration-300 transform hover:-translate-y-1 flex items-center gap-4"
            >
              <div className="w-10 h-10 rounded-xl bg-gray-950 flex items-center justify-center border border-gray-800 group-hover:border-blue-500/30 transition-colors shadow-inner">
                {skillIcon}
              </div>
              <div>
                <p className="font-semibold text-gray-200 group-hover:text-blue-400 transition-colors">{skill.name}</p>
                <span className="text-xs text-gray-500 uppercase tracking-wider block mt-0.5">{skill.category}</span>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
