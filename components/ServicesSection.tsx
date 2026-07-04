// components/ServicesSection.tsx
'use strict';
'use client';

import { ReactNode } from 'react';

interface Service {
  icon: ReactNode;
  title: string;
  desc: string;
}

export default function ServicesSection({ services }: { services: Service[] }) {
  return (
    <section className="space-y-8">
      <div className="flex items-center gap-3 border-b border-gray-800 pb-4">
        <h2 className="text-3xl font-bold tracking-tight">Services I Provide</h2>
      </div>
      
      <div className="grid md:grid-cols-3 gap-6">
        {services.map((service, index) => (
          <div 
            key={index} 
            className="group bg-gray-900/30 border border-gray-800/80 p-6 rounded-2xl space-y-4 hover:border-gray-700 hover:bg-gray-900/50 transition-all duration-300 transform hover:-translate-y-1"
          >
            {/* আইকন কন্টেইনার */}
            <div className="w-12 h-12 rounded-xl bg-gray-950 flex items-center justify-center border border-gray-800 group-hover:border-gray-700 transition-colors shadow-inner">
              {service.icon}
            </div>
            
            {/* টেক্সট কন্টেন্ট */}
            <h3 className="text-lg font-bold text-gray-200 group-hover:text-blue-400 transition-colors">
              {service.title}
            </h3>
            <p className="text-sm text-gray-400 leading-relaxed">
              {service.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
