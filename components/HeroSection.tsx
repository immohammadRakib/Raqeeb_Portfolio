// components/HeroSection.tsx
'use strict';
'use client';

export default function HeroSection() {
  return (
    <header className="grid md:grid-cols-12 gap-12 items-center min-h-[50vh]">
      
      {/* বাম পাশ: টেক্সট এবং বাটন (md:col-span-7) */}
      <div className="space-y-6 max-w-3xl md:col-span-7 order-2 md:order-1 text-center md:text-left">
        <div className="inline-flex items-center gap-2 px-3 py-1 text-xs font-medium text-blue-400 bg-blue-500/10 rounded-full border border-blue-500/20 mx-auto md:mx-0">
          <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" /> Available for new opportunities
        </div>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight bg-gradient-to-r from-white via-gray-200 to-gray-500 bg-clip-text text-transparent">
          Md Abdur Rahman Rakib
        </h1>
        <p className="text-lg text-gray-400 leading-relaxed">
          Hello! I am a passionate Full-Stack Engineer focused on pushing the boundaries of what is possible on the web. I specialize in weaving clean code structures, 
          solid databases, and seamless real-world digital experiences.
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
            <img 
              src="/dp.jpg" 
              alt="Md Abdur Rahman Rakib"
              className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500 ease-out"
            />
          </div>
          
        </div>
      </div>

    </header>
  );
}
