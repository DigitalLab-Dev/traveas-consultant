"use client";

import { motion } from "framer-motion";

export function Newsletter() {
  return (
    <section className="py-24 bg-gray-100 relative overflow-hidden border-y border-gray-200">
      {/* Background abstract element lightly applied */}
      <div 
        className="absolute inset-0 opacity-[0.03] bg-cover bg-center pointer-events-none mix-blend-multiply"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1550684848-fac1c5b4e853?auto=format&fit=crop&q=80&w=2000')" }}
      />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-gray-900 mb-6 leading-tight max-w-3xl mx-auto">
            Empowering your mind isn't a one-time process; it's a lifelong journey of <span className="text-[var(--color-accent)] italic">growth and transformation.</span>
          </h2>
          
          <p className="text-xl text-gray-600 mb-10">
            Get weekly lessons, motivation, and self-care tips delivered straight to your inbox.
          </p>
          
          <form className="flex flex-col sm:flex-row gap-4 max-w-2xl mx-auto" onSubmit={(e) => e.preventDefault()}>
            <input 
              type="email" 
              placeholder="Enter your email address" 
              className="flex-grow px-6 py-4 bg-white border border-gray-300 text-gray-900 rounded-sm focus:outline-none focus:border-[var(--color-accent)] focus:ring-1 focus:ring-[var(--color-accent)] transition-all placeholder:text-gray-400 shadow-sm"
              required
            />
            <button 
              type="submit"
              className="px-8 py-4 bg-gray-900 text-white font-semibold rounded-sm hover:bg-gray-800 transition-colors whitespace-nowrap shadow-md"
            >
              I want to subscribe
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
