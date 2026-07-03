// components/ContactForm.tsx - অংশ ১
'use client';

import { useState } from 'react';
import { MessageSquare, Send, Loader2 } from 'lucide-react';

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [result, setResult] = useState("");

  const onSubmit = async (event: any) => {
    event.preventDefault();
    setIsSubmitting(true);
    setResult("");

    const formData = new FormData(event.target);
    // আপনার অফিশিয়াল অ্যাক্সেস কি এখানে ইনজেক্ট করা হয়েছে
    formData.append("access_key", "4d60af6f-9310-47e1-8940-10ff9ea3ae85");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();
      
      if (data.success) {
        setResult("Success");
        event.target.reset(); // ফর্ম খালি করে দেবে
      } else {
        setResult("Error");
      }
    } catch (error) {
      setResult("Error");
    } finally {
      setIsSubmitting(false);
    }
  };
// components/ContactForm.tsx - অংশ ২
  return (
    <section id="contact" className="bg-gradient-to-br from-gray-900 to-gray-950 border border-gray-800 rounded-3xl p-8 md:p-12 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[200px] h-[200px] bg-blue-500/5 blur-3xl pointer-events-none" />
      
      <div className="max-w-xl mx-auto space-y-4 text-center">
        <MessageSquare className="w-10 h-10 text-blue-400 mx-auto" />
        <h2 className="text-3xl font-bold tracking-tight">Let's build something epic together</h2>
        <p className="text-gray-400 text-sm">
          Have an exciting project idea, looking for a full-stack developer, or just want to say hi? Drop me a message below!
        </p>
      </div>

      <form onSubmit={onSubmit} className="max-w-xl mx-auto mt-8 space-y-4 text-left">
        <div>
          <label className="block text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">Your Name</label>
          <input 
            type="text" 
            name="name" 
            required 
            placeholder="John Doe"
            className="w-full bg-gray-950 border border-gray-800 rounded-xl px-4 py-3 text-gray-100 placeholder-gray-600 focus:outline-none focus:border-blue-500/50 transition-colors text-sm"
          />
        </div>

        <div>
          <label className="block text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">Email Address</label>
          <input 
            type="email" 
            name="email" 
            required 
            placeholder="john@example.com"
            className="w-full bg-gray-950 border border-gray-800 rounded-xl px-4 py-3 text-gray-100 placeholder-gray-600 focus:outline-none focus:border-blue-500/50 transition-colors text-sm"
          />
        </div>

        <div>
          <label className="block text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">Your Message</label>
          <textarea 
            name="message" 
            rows={4} 
            required 
            placeholder="Tell me about your project..."
            className="w-full bg-gray-950 border border-gray-800 rounded-xl px-4 py-3 text-gray-100 placeholder-gray-600 focus:outline-none focus:border-blue-500/50 transition-colors text-sm resize-none"
          />
        </div>

        {/* সাকসেস এবং এরর মেসেজ অ্যালার্ট */}
        {result === "Success" && (
          <div className="p-4 rounded-xl text-sm font-medium bg-emerald-500/10 border border-emerald-500/20 text-emerald-400">
            🎉 Thank you! Your message has been sent directly to my email inbox.
          </div>
        )}
        {result === "Error" && (
          <div className="p-4 rounded-xl text-sm font-medium bg-rose-500/10 border border-rose-500/20 text-rose-400">
            ❌ Something went wrong or Network Blocked. Please check your internet and try again.
          </div>
        )}

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full py-3.5 rounded-xl bg-white text-gray-950 font-semibold hover:bg-gray-200 transition-all flex items-center justify-center gap-2 text-sm disabled:opacity-50"
        >
          {isSubmitting ? (
            <>
              <Loader2 className="w-4 h-4 animate-spin" /> Sending Message...
            </>
          ) : (
            <>
              <Send className="w-4 h-4" /> Send Message
            </>
          )}
        </button>
      </form>
    </section>
  );
}
