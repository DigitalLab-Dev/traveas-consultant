"use client";

import { CheckCircle2, ArrowRight } from "lucide-react";
import React, { useState } from "react";

export default function ApplicationPage() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setIsSubmitted(true);
  };

  return (
    <div className="pt-20 bg-gray-50 min-h-screen pb-24">
      
      {/* HEADER SECTION */}
      <section className="bg-white border-b border-gray-200 py-16 lg:py-24 relative overflow-hidden">
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full bg-[var(--color-accent)]/10 blur-[100px]" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-gray-100 blur-[80px]" />
        </div>
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-gray-900 mb-6 leading-tight">
            Apply for the <br /> <span className="text-[var(--color-accent)] italic">Mindset Transformation Program</span>
          </h1>
          <p className="text-lg text-gray-600">
            Take the first bold step towards transforming your reality. Please fill out the application below so Coach Traveas Claypool can understand your goals and determine if you are a fit for the program.
          </p>
        </div>
      </section>

      {/* FORM SECTION */}
      <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        {isSubmitted ? (
          <div className="bg-white rounded-2xl p-12 text-center shadow-xl border border-gray-100">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-[var(--color-accent)]/10 text-[var(--color-accent)] mb-6">
              <CheckCircle2 size={40} />
            </div>
            <h2 className="text-3xl font-serif font-bold text-gray-900 mb-4">Application Received!</h2>
            <p className="text-lg text-gray-600 mb-8 max-w-md mx-auto">
              Thank you for taking the first step. Coach Traveas's team will review your application and be in touch within 24-48 hours.
            </p>
            <button 
              onClick={() => setIsSubmitted(false)}
              className="text-[var(--color-accent)] font-semibold hover:underline"
            >
              Submit another application
            </button>
          </div>
        ) : (
          <form 
            onSubmit={handleSubmit}
            className="bg-white rounded-2xl p-8 md:p-12 shadow-xl border border-gray-100 space-y-8"
          >
            <div className="border-b border-gray-100 pb-8 space-y-6">
              <h3 className="text-2xl font-serif font-bold text-gray-900">Personal Information</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="firstName" className="block text-sm font-semibold text-gray-700">First Name *</label>
                  <input required type="text" id="firstName" className="w-full px-4 py-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-[var(--color-accent)] focus:border-transparent outline-none transition-all" placeholder="John" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="lastName" className="block text-sm font-semibold text-gray-700">Last Name *</label>
                  <input required type="text" id="lastName" className="w-full px-4 py-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-[var(--color-accent)] focus:border-transparent outline-none transition-all" placeholder="Doe" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-700">Email Address *</label>
                  <input required type="email" id="email" className="w-full px-4 py-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-[var(--color-accent)] focus:border-transparent outline-none transition-all" placeholder="john@example.com" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="phone" className="block text-sm font-semibold text-gray-700">Phone Number</label>
                  <input type="tel" id="phone" className="w-full px-4 py-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-[var(--color-accent)] focus:border-transparent outline-none transition-all" placeholder="(555) 000-0000" />
                </div>
              </div>
            </div>

            <div className="pt-4 space-y-6">
              <h3 className="text-2xl font-serif font-bold text-gray-900">Your Journey</h3>
              
              <div className="space-y-2">
                <label htmlFor="currentChallenges" className="block text-sm font-semibold text-gray-700">What are the biggest challenges or limiting beliefs you're facing right now? *</label>
                <textarea required id="currentChallenges" rows={4} className="w-full px-4 py-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-[var(--color-accent)] focus:border-transparent outline-none transition-all resize-y" placeholder="Tell us what you're struggling with..." />
              </div>

              <div className="space-y-2">
                <label htmlFor="goals" className="block text-sm font-semibold text-gray-700">What is your primary goal for the next 6-12 months? *</label>
                <textarea required id="goals" rows={3} className="w-full px-4 py-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-[var(--color-accent)] focus:border-transparent outline-none transition-all resize-y" placeholder="Describe the life you want to build..." />
              </div>

              <div className="space-y-3 pt-4">
                <label className="block text-sm font-semibold text-gray-700">How committed are you taking action and investing in yourself to change your life? *</label>
                <div className="space-y-3">
                  <label className="flex items-center space-x-3 cursor-pointer">
                    <input type="radio" name="commitment" value="100%" className="w-5 h-5 text-[var(--color-accent)] focus:ring-[var(--color-accent)] border-gray-300" required />
                    <span className="text-gray-700">I am 100% ready and willing to do whatever it takes.</span>
                  </label>
                  <label className="flex items-center space-x-3 cursor-pointer">
                    <input type="radio" name="commitment" value="curious" className="w-5 h-5 text-[var(--color-accent)] focus:ring-[var(--color-accent)] border-gray-300" />
                    <span className="text-gray-700">I am curious but need a little more information.</span>
                  </label>
                  <label className="flex items-center space-x-3 cursor-pointer">
                    <input type="radio" name="commitment" value="not_ready" className="w-5 h-5 text-[var(--color-accent)] focus:ring-[var(--color-accent)] border-gray-300" />
                    <span className="text-gray-700">Honestly, I am just looking around for now.</span>
                  </label>
                </div>
              </div>
            </div>

            <div className="pt-8">
              <button 
                type="submit"
                className="w-full flex items-center justify-center px-8 py-4 bg-[var(--color-accent)] text-white font-bold rounded-lg hover:bg-[var(--color-accent-hover)] transition-all transform hover:-translate-y-1 shadow-lg text-lg group"
              >
                Submit Application
                <ArrowRight size={20} className="ml-2 transform group-hover:translate-x-1 transition-transform" />
              </button>
              <p className="text-center text-xs text-gray-500 mt-4">
                Your information is kept strictly confidential.
              </p>
            </div>
          </form>
        )}
      </section>

    </div>
  );
}
