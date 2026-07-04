// components/Footer.tsx
'use client';

import { motion } from 'framer-motion';
import { Mail, MapPin, Code2 } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="border-t border-gray-900 bg-[#030712]/80 backdrop-blur-xl py-16 mt-32 relative overflow-hidden">
      {/* ব্যাকগ্রাউন্ড নিয়ন গ্লো */}
      <div className="absolute bottom-0 left-1/4 w-[400px] h-[150px] rounded-full bg-blue-500/5 blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[150px] rounded-full bg-purple-500/5 blur-[100px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6 grid grid-cols-1 md:grid-cols-12 gap-10 relative z-10">
        
        {/* কলাম ১: ব্র্যান্ডিং ও ডেসক্রিপশন */}
        <div className="md:col-span-5 space-y-4 text-center md:text-left">
          <h3 className="text-lg font-bold bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent tracking-wide">
            Md Abdur Rahman Rakib - Full-Stack Engineer
          </h3>
          <p className="text-sm text-gray-400 leading-relaxed max-w-sm">
            Full-Stack Software Engineer specializing in Next.js architectures, clean computational layouts, and robust fluid interactive designs.
          </p>
        </div>

        {/* কলাম ২: কন্টাক্ট ও লোকেশন ইনফো */}
        <div className="md:col-span-4 space-y-4 text-center md:text-left">
          <h4 className="text-xs font-semibold text-gray-400 uppercase tracking-widest border-b border-gray-800/60 pb-2">
            Get In Touch
          </h4>
          <ul className="space-y-3 text-sm text-gray-400">
            <li className="flex items-center justify-center md:justify-start gap-2.5 hover:text-blue-400 transition-colors">
              <Mail className="w-4 h-4 text-blue-400 flex-shrink-0" />
              <a href="mailto:your-email@example.com">rakiblp6@gmail.com</a>
            </li>
            <li className="flex items-center justify-center md:justify-start gap-2.5 text-gray-400">
              <MapPin className="w-4 h-4 text-emerald-400 flex-shrink-0" />
              <span>Sylhet, Bangladesh</span>
            </li>
          </ul>
        </div>

        {/* কলাম ৩: সোশ্যাল নেটওয়ার্কস লিংক (শার্প এবং ১০০% এরর-ফ্রি SVG) */}
        <div className="md:col-span-3 space-y-4 text-center md:text-left">
          <h4 className="text-xs font-semibold text-gray-400 uppercase tracking-widest border-b border-gray-800/60 pb-2">
            Social Networks
          </h4>
          <div className="flex items-center justify-center md:justify-start gap-3">
            
            {/* ফেসবুক বাটন */}
            <motion.a
              href="https://web.facebook.com/Abdur404Rahman"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, y: -2 }}
              className="w-10 h-10 rounded-xl bg-gray-900 border border-gray-800 flex items-center justify-center text-gray-400 hover:text-[#1877F2] hover:border-[#1877F2]/30 transition-all"
            >
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" xmlns="http://w3.org">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </motion.a>

            {/* গিটহাব বাটন */}
            <motion.a
              href="https://github.com/immohammadrakib"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, y: -2 }}
              className="w-10 h-10 rounded-xl bg-gray-900 border border-gray-800 flex items-center justify-center text-gray-400 hover:text-white hover:border-gray-700 transition-all"
            >
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" xmlns="http://w3.org">
                <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
              </svg>
            </motion.a>

            {/* লিঙ্কডইন বাটন */}
            <motion.a
              href="https://www.linkedin.com/in/immohammadrakib/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, y: -2 }}
              className="w-10 h-10 rounded-xl bg-gray-900 border border-gray-800 flex items-center justify-center text-gray-400 hover:text-[#0A66C2] hover:border-[#0A66C2]/30 transition-all"
            >
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" xmlns="http://w3.org">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </motion.a>

          </div>
        </div>

      </div>

      {/* নিচের বেসলাইন সাব-ফুটার */}
      <div className="max-w-5xl mx-auto px-6 mt-16 pt-8 border-t border-gray-950/40 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left relative z-10">
        <p className="text-xs text-gray-500">
          © {new Date().getFullYear()} Md Abdur Rahman Rakib. All rights reserved.
        </p>
        <p className="text-xs text-gray-600 flex items-center gap-1.5 justify-center" suppressHydrationWarning>
          <Code2 className="w-3.5 h-3.5" /> Built with Next.js, Sanity & Tailwind
        </p>
      </div>
    </footer>
  );
}
