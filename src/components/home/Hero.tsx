"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export function Hero() {
  return (
    <section className="relative h-[90vh] min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=2500"
          alt="Mountain Sunrise"
          fill
          className="object-cover opacity-80"
          priority
          unoptimized
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white/70 via-white/40 to-white pointer-events-none" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-8"
        >
          <motion.h1 
            className="text-4xl md:text-5xl lg:text-7xl font-serif font-bold tracking-tight text-gray-900 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Break Free From the <span className="text-[var(--color-accent)] italic">Mental Prison</span> Holding You Back and Rebuild Your Life
          </motion.h1>

          <motion.p 
            className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Coach Traveas Claypool helps individuals break destructive thinking patterns, rebuild their mindset, and create a new direction in life through a proven four-step transformation framework.
          </motion.p>

          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <Link 
              href="/product-page/shifting-your-mindset-to-change-your-life-collection-bundle"
              className="px-8 py-4 bg-[var(--color-accent)] text-white font-semibold rounded-sm hover:bg-[var(--color-accent-hover)] transition-all transform hover:-translate-y-1 shadow-lg w-full sm:w-auto text-center"
            >
              LEARN MORE
            </Link>
            <Link 
              href="/challenges"
              className="px-8 py-4 bg-transparent border border-[var(--color-accent)] text-[var(--color-accent)] font-semibold rounded-sm hover:bg-[var(--color-accent)] hover:text-black transition-all w-full sm:w-auto text-center glass"
            >
              APPLY FOR TRANSFORMATION
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
