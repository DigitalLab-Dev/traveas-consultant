"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export function Hero() {
  return (
    <section className="relative min-h-[90vh] lg:min-h-[700px] flex items-center bg-gradient-to-br from-gray-50 via-[var(--color-accent)]/5 to-gray-200 overflow-hidden pt-24 pb-12 lg:pt-32 lg:pb-24">
      {/* Unified Global Gradient Background */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        {/* Soft atmospheric glowing orbs */}
        <div className="absolute -top-1/4 -right-1/4 w-[1000px] h-[1000px] rounded-full bg-[var(--color-accent)]/10 blur-[120px]" />
        <div className="absolute -bottom-1/4 -left-1/4 w-[800px] h-[800px] rounded-full bg-[var(--color-accent)]/10 blur-[130px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8 pb-12 lg:pb-0 z-20"
          >
            <div>
              <motion.h1
                className="text-4xl md:text-5xl lg:text-7xl font-serif font-bold tracking-tight text-gray-900 leading-tight"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Break Free From the <span className="text-[var(--color-accent)] italic">Mental Prison</span>
              </motion.h1>
              <div className="h-1 w-20 bg-[var(--color-accent)] mt-6 mb-8" />
            </div>

            <div className="space-y-6 text-gray-700 leading-relaxed text-lg">
              <p>
                From facing incarceration three times to becoming a certified John Maxwell Leadership Coach, Traveas Claypool lived the reality many feel trapped in today.
              </p>
              <p className="text-xl text-gray-900 font-medium border-l-4 border-[var(--color-accent)] pl-6 py-2 my-8 bg-white/40 backdrop-blur-sm rounded-r-md">
                The real prison wasn't just the physical walls around him. The real prison was the belief system shaping his thoughts, decisions, and actions.
              </p>
              <p>
                Today, Coach Traveas helps individuals break destructive thinking patterns, rebuild their mindset, and create a new direction in life through his proven Mental Freedom Method.
              </p>
            </div>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 pt-4"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <Link
                href="/product-page/shifting-your-mindset-to-change-your-life-collection-bundle"
                className="px-8 py-4 bg-gray-900 text-white font-semibold rounded-sm hover:bg-gray-800 transition-colors text-center shadow-md w-full sm:w-auto"
              >
                Learn More
              </Link>
              <Link
                href="/application-page"
                className="px-8 py-4 bg-white/60 backdrop-blur-sm border border-[var(--color-accent)] text-[var(--color-accent)] font-semibold rounded-sm hover:bg-[var(--color-accent)] hover:text-white transition-all w-full sm:w-auto text-center shadow-sm"
              >
                Apply For Transformation
              </Link>
            </motion.div>
          </motion.div>

          {/* Image Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative w-full h-[500px] lg:h-[700px] pointer-events-none flex items-end justify-center lg:justify-end"
          >
            <Image
              src="/assets/coach-claypool-main.png"
              alt="Coach Traveas Claypool"
              fill
              className="object-contain object-bottom relative z-10 drop-shadow-2xl pointer-events-auto"
              priority
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
