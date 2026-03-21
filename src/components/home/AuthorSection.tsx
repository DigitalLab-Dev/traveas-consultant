"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export function AuthorSection() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div>
              <h2 className="text-3xl md:text-5xl font-serif font-bold text-gray-900 mb-2">
                From Incarceration to Transformation
              </h2>
              <div className="h-1 w-20 bg-[var(--color-accent)] mt-6 mb-8" />
            </div>

            <div className="space-y-6 text-gray-700 leading-relaxed text-lg">
              <p>
                Before becoming a mindset transformation coach, Traveas Claypool lived the reality many people feel trapped in today.
              </p>
              <p>
                He sold drugs. He was incarcerated three times. And he found himself repeating destructive patterns that seemed impossible to escape.
              </p>
              <p className="text-xl text-gray-900 font-medium border-l-4 border-[var(--color-accent)] pl-6 py-2 my-8 bg-gray-50 rounded-r-md">
                The real prison wasn't just the physical walls around him. The real prison was the belief system shaping his thoughts, decisions, and actions.
              </p>
              <p>
                That realization started a journey of rebuilding his mindset, his discipline, and ultimately his life. Through that process, he developed a structured system designed to help others break the same destructive thinking patterns and rebuild their future.
              </p>
              <p className="font-serif italic text-gray-900 text-xl">
                Today that system is known as the Four Steps to Freeing Your Mind from Incarceration.
              </p>
            </div>

            <div className="pt-6 space-y-4">
              <div className="flex flex-col gap-2">
                <span className="flex items-center gap-3 text-[var(--color-accent)] font-medium">
                  <span className="w-2 h-2 rounded-full bg-[var(--color-accent)]" /> 
                  Certified John Maxwell Leadership Coach
                </span>
                <span className="flex items-center gap-3 text-[var(--color-accent)] font-medium">
                  <span className="w-2 h-2 rounded-full bg-[var(--color-accent)]" /> 
                  Creator of the Four Steps to Freeing Your Mind from Incarceration
                </span>
                <span className="flex items-center gap-3 text-[var(--color-accent)] font-medium">
                  <span className="w-2 h-2 rounded-full bg-[var(--color-accent)]" /> 
                  Founder of the Mental Freedom Method
                </span>
              </div>
            </div>
            
            <div className="pt-4 flex flex-col sm:flex-row gap-4">
              <Link
                href="/product-page/shifting-your-mindset-to-change-your-life-collection-bundle"
                className="px-6 py-3 bg-gray-900 text-white font-semibold rounded-sm hover:bg-gray-800 transition-colors text-center shadow-md"
              >
                Click Here to Learn More
              </Link>
            </div>
          </motion.div>

          {/* Image Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative lg:absolute lg:top-0 lg:right-0 lg:bottom-0 lg:w-1/2 h-[500px] lg:h-auto overflow-hidden pointer-events-none"
          >
            {/* Minimal glowing backdrop for light mode */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-[var(--color-accent)]/10 rounded-full blur-[80px] pointer-events-none" />
            
            <Image
              src="/assets/coach-claypool-main.png"
              alt="Coach Traveas Claypool"
              fill
              className="object-cover object-[center_top] relative z-10 drop-shadow-xl pointer-events-auto"
              priority
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
