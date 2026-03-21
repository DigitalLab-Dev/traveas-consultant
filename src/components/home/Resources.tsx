"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function Resources() {
  return (
    <section className="relative py-24 overflow-hidden border-t border-gray-200 bg-white">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1528819622765-d6bcf132f793?auto=format&fit=crop&q=80&w=2000"
          alt="Chess Strategy"
          fill
          className="object-cover opacity-10"
          unoptimized
        />
        <div className="absolute inset-0 bg-gradient-to-t from-white via-white/80 to-white/95 pointer-events-none" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Header */}
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-6"
          >
            Empower. Awaken. <span className="text-[var(--color-accent)] italic">Reconnect.</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-700 max-w-2xl mx-auto"
          >
            My purpose is to empower and awaken people to reconnect with their dreams and purpose in life.
          </motion.p>
        </div>

        {/* Resources Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left: Workbook / Graphic */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative flex justify-center"
          >
            {/* Decorative circles */}
            <div className="absolute w-64 h-64 bg-[var(--color-accent)]/20 rounded-full blur-[80px]" />
            <div className="relative w-full max-w-md aspect-[4/5] overflow-hidden rounded-md shadow-lg border border-gray-200">
              <Image
                src="https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&q=80&w=800"
                alt="Empowerment and Awakening"
                fill
                className="object-cover"
                unoptimized
              />
            </div>
          </motion.div>

          {/* Right: Links */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-10"
          >
            <div>
              <h3 className="text-3xl font-serif font-bold text-gray-900 mb-4">Hold Your Dreams</h3>
              <p className="text-gray-600">Resources for every stage of self-discovery.</p>
            </div>

            <div className="space-y-6">
              {/* Resource 1 */}
              <Link href="/book-online" className="block group bg-white border border-gray-200 rounded-md p-6 hover:shadow-md hover:border-gray-300 transition-all w-full relative overflow-hidden">
                <div className="flex justify-between items-center relative z-10">
                  <div>
                    <h4 className="text-xl font-bold text-gray-900 mb-1">1:1 Coaching</h4>
                    <p className="text-sm text-gray-500">Personalized guidance for your journey</p>
                  </div>
                  <ArrowRight className="w-6 h-6 text-[var(--color-accent)] group-hover:translate-x-2 transition-transform" />
                </div>
                <div className="absolute left-0 bottom-0 w-full h-1 bg-[var(--color-accent)] transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
              </Link>

              {/* Resource 2 */}
              <div className="block group bg-gray-50 border border-gray-200 rounded-md p-6 w-full relative overflow-hidden opacity-70">
                <div className="flex justify-between items-center relative z-10">
                  <div>
                    <h4 className="text-xl font-bold text-gray-900 mb-1">Online Courses</h4>
                    <p className="text-sm text-[var(--color-accent)] font-medium">Coming Soon</p>
                  </div>
                </div>
              </div>

              {/* Resource 3 */}
              <a href="https://www.facebook.com/groups/4053055011389669" target="_blank" rel="noopener noreferrer" className="block group bg-white border border-gray-200 rounded-md p-6 hover:shadow-md hover:border-gray-300 transition-all w-full relative overflow-hidden">
                <div className="flex justify-between items-center relative z-10">
                  <div>
                    <h4 className="text-xl font-bold text-gray-900 mb-1">Join Our Facebook Community</h4>
                    <p className="text-sm text-gray-500">Connect with others on the same path</p>
                  </div>
                  <ArrowRight className="w-6 h-6 text-[var(--color-accent)] group-hover:translate-x-2 transition-transform" />
                </div>
                <div className="absolute left-0 bottom-0 w-full h-1 bg-[var(--color-accent)] transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
              </a>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
