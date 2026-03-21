"use client";

import { motion } from "framer-motion";
import { CheckCircle2, ArrowRight } from "lucide-react";
import Link from "next/link";

const STEPS = [
  {
    num: "01",
    title: "Understand Your Paradigm",
    desc: "Identify the hidden beliefs and mental patterns that have been shaping your decisions and behavior. Many of these patterns were formed years ago and continue influencing life choices without awareness.",
  },
  {
    num: "02",
    title: "Set Intentional Direction",
    desc: "Define a clear vision for the life you want to create and begin aligning your daily actions with that direction. Intentional thinking creates purpose and forward movement.",
  },
  {
    num: "03",
    title: "Shift Your Thought Patterns",
    desc: "Learn to recognize negative thought cycles and replace them with constructive thinking patterns that support progress and resilience.",
  },
  {
    num: "04",
    title: "Reinforce the Transformation",
    desc: "Practice gratitude and mental discipline that strengthen your new mindset and help sustain longterm personal change.",
  },
];

const OUTCOMES = [
  "Clearer personal direction",
  "Greater emotional discipline",
  "Freedom from destructive thinking cycles",
  "Stronger confidence and self-control",
  "A renewed vision for their future",
];

const AUDIENCE = [
  "feel stuck in destructive life patterns",
  "want genuine personal transformation",
  "are ready to confront their mindset honestly",
  "are serious about rebuilding their future",
];

const PROGRAM_FEATURES = [
  "Weekly 30-minute coaching sessions",
  "Guided mindset and awareness exercises",
  "Personal reflection and growth discussions",
  "Accountability and progress tracking",
];

export function Framework() {
  return (
    <section className="py-24 bg-gray-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Intro */}
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-6">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-serif font-bold text-gray-900 leading-tight"
          >
            Many People Feel <span className="text-[var(--color-accent)] italic">Mentally Stuck</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-600 text-lg leading-relaxed"
          >
            Many individuals want change but feel trapped in repeating cycles. They struggle with negative thinking, poor decisions, lack of direction, or habits that keep pulling them backward. The problem is rarely a lack of potential. The problem is often the unseen mental programming that influences daily decisions. Until those patterns are recognized and shifted, meaningful change becomes difficult.
          </motion.p>
        </div>

        {/* 4-Step Framework */}
        <div className="mb-24">
          <h3 className="text-2xl md:text-4xl font-serif font-bold text-center text-gray-900 mb-12">The 4-Step Mind Liberation Framework</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {STEPS.map((step, index) => (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-8 rounded-md shadow-sm border border-gray-100 hover:shadow-md hover:-translate-y-2 transition-all duration-300 relative overflow-hidden group border-t-4 border-t-[var(--color-accent)]"
              >
                <div className="text-[var(--color-accent)] text-5xl font-serif font-bold opacity-10 absolute -right-2 top-4 group-hover:scale-110 transition-transform">
                  {step.num}
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-4 relative z-10">{step.title}</h4>
                <p className="text-gray-600 text-sm leading-relaxed relative z-10">{step.desc}</p>
              </motion.div>
            ))}
          </div>
          <p className="text-center text-gray-500 mt-12 italic">
            Coach Traveas guides clients through a structured four-step transformation process designed to help individuals break limiting beliefs and rebuild their mindset.
          </p>
        </div>

        {/* Info Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
          {/* How it Works */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-white p-8 rounded-md border border-gray-200 shadow-sm"
          >
            <h4 className="text-[var(--color-accent)] font-serif text-xl mb-6">How the Program Works</h4>
            <p className="text-gray-600 text-sm mb-6">The program is designed to guide individuals step-by-step through the mindset transformation process. Participants receive:</p>
            <ul className="space-y-3">
              {PROGRAM_FEATURES.map((feature, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-gray-700">
                  <CheckCircle2 className="w-5 h-5 text-[var(--color-accent)] shrink-0" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            <p className="text-gray-500 text-xs mt-6 border-t border-gray-100 pt-4">This structure ensures that transformation is not just theoretical — it becomes a consistent practice.</p>
          </motion.div>

          {/* Outcomes */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="bg-white p-8 rounded-md border border-[var(--color-accent)]/30 shadow-sm relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-[var(--color-accent)]/5 rounded-bl-full pointer-events-none" />
            <h4 className="text-[var(--color-accent)] font-serif text-xl mb-6 relative z-10">What This Creates</h4>
            <p className="text-gray-600 text-sm mb-6 relative z-10">Individuals who commit to the process often experience:</p>
            <ul className="space-y-3 relative z-10">
              {OUTCOMES.map((outcome, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-gray-700">
                  <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-accent)] mt-2 shrink-0" />
                  <span>{outcome}</span>
                </li>
              ))}
            </ul>
            <p className="text-gray-700 bg-[var(--color-accent)]/10 p-4 rounded-sm text-sm mt-6 font-medium italic relative z-10">
              The goal is not temporary motivation. The goal is lasting mental freedom.
            </p>
          </motion.div>

          {/* Target Audience */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-white p-8 rounded-md border border-gray-200 shadow-sm"
          >
            <h4 className="text-[var(--color-accent)] font-serif text-xl mb-6">Who This Is For</h4>
            <p className="text-gray-600 text-sm mb-6">This Program Is For Individuals Who:</p>
            <ul className="space-y-3">
              {AUDIENCE.map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-gray-700">
                  <ArrowRight className="w-4 h-4 text-gray-500 mt-0.5 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-gray-500 text-xs mt-6 border-t border-gray-100 pt-4">This program is designed for people who are ready to take responsibility for their personal growth.</p>
          </motion.div>
        </div>

        {/* Application CTA */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center bg-white p-12 rounded-xl shadow-lg border border-[var(--color-accent)]/30 relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-[var(--color-accent)]/10 rounded-full blur-[80px]" />
          <h3 className="text-2xl md:text-4xl font-serif font-bold text-gray-900 mb-6 relative z-10">Your Future Begins With One Decision</h3>
          <p className="text-gray-700 text-lg mb-8 relative z-10 max-w-2xl mx-auto">
            Real change begins when you decide to confront your thinking patterns and take control of your future. If you are ready to break the mental cycles that have been holding you back, the next step is to apply.
          </p>
          <Link 
            href="/application-page"
            className="inline-flex items-center justify-center px-8 py-4 bg-[var(--color-accent)] text-white font-semibold rounded-sm hover:bg-[var(--color-accent-hover)] transition-all transform hover:-translate-y-1 relative z-10 shadow-md"
          >
            APPLY FOR THE MINDSET TRANSFORMATION PROGRAM
          </Link>
        </motion.div>

      </div>
    </section>
  );
}
