"use client";

import { CheckCircle2, Send, Mail, Phone, MapPin } from "lucide-react";
import React, { useState } from "react";

export default function ContactPage() {
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
          <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-[var(--color-accent)]/10 blur-[100px]" />
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full bg-gray-100 blur-[80px]" />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-gray-900 mb-6">
            Let's Connect
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            You've got questions. We've got answers. Send us a message using the form below to learn more about mindset transformation programs, resources, and coaching opportunities.
          </p>
        </div>
      </section>

      {/* CONTACT LAYOUT */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start">
          
          {/* CONTACT INFO SIDEBAR */}
          <div className="lg:col-span-4 space-y-8">
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
              <h3 className="text-2xl font-serif font-bold text-gray-900 mb-8">Get in Touch</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-12 h-12 rounded-full bg-[var(--color-accent)]/10 text-[var(--color-accent)] flex items-center justify-center flex-shrink-0 mr-4">
                    <Mail size={20} />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold tracking-wider uppercase text-gray-900 mb-1">Email Support</h4>
                    <a href="mailto:info@traveasconsulting.com" className="text-gray-600 hover:text-[var(--color-accent)] transition-colors">
                      info@traveasconsulting.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 rounded-full bg-[var(--color-accent)]/10 text-[var(--color-accent)] flex items-center justify-center flex-shrink-0 mr-4">
                    <Phone size={20} />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold tracking-wider uppercase text-gray-900 mb-1">Phone</h4>
                    <a href="tel:+18005550000" className="text-gray-600 hover:text-[var(--color-accent)] transition-colors">
                      +1 (800) 555-0000
                    </a>
                    <p className="text-xs text-gray-400 mt-1">Mon-Fri, 9am - 5pm EST</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 rounded-full bg-[var(--color-accent)]/10 text-[var(--color-accent)] flex items-center justify-center flex-shrink-0 mr-4">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold tracking-wider uppercase text-gray-900 mb-1">Headquarters</h4>
                    <p className="text-gray-600">
                      Remote / Online Services<br />
                      Based globally.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-900 rounded-2xl p-8 text-white relative overflow-hidden shadow-lg">
               <div className="absolute inset-0 z-0 opacity-10" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1550684848-fac1c5b4e853?auto=format&fit=crop&q=80&w=1000')" }} />
               <div className="relative z-10">
                 <h3 className="text-xl font-serif font-bold mb-4">Ready to start?</h3>
                 <p className="text-gray-300 text-sm leading-relaxed mb-6">
                   If you're ready to break down your limiting beliefs, skip the questions and apply directly for our 1-on-1 coaching program.
                 </p>
                 <a href="/application-page" className="inline-block px-6 py-3 bg-[var(--color-accent)] hover:bg-white hover:text-gray-900 transition-colors rounded-sm font-semibold text-sm">
                   Apply Now
                 </a>
               </div>
            </div>
          </div>

          {/* CONTACT FORM */}
          <div className="lg:col-span-8">
            {isSubmitted ? (
              <div className="bg-white rounded-2xl p-12 text-center shadow-xl border border-gray-100 flex flex-col items-center justify-center h-full min-h-[500px]">
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-[var(--color-accent)]/10 text-[var(--color-accent)] mb-6">
                  <CheckCircle2 size={40} />
                </div>
                <h2 className="text-3xl font-serif font-bold text-gray-900 mb-4">Message Sent Successfully!</h2>
                <p className="text-lg text-gray-600 mb-8 max-w-md mx-auto">
                  Thank you for reaching out to Traveas Consulting. Our support team will get back to you responding to your inquiry shortly.
                </p>
                <button 
                  onClick={() => setIsSubmitted(false)}
                  className="text-[var(--color-accent)] font-semibold hover:underline"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form 
                onSubmit={handleSubmit}
                className="bg-white rounded-2xl p-8 md:p-12 shadow-xl border border-gray-100 space-y-8"
              >
                <div className="space-y-6">
                  <h3 className="text-2xl font-serif font-bold text-gray-900 mb-2">Send a Message</h3>
                  
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

                  <div className="space-y-2">
                    <label htmlFor="email" className="block text-sm font-semibold text-gray-700">Email Address *</label>
                    <input required type="email" id="email" className="w-full px-4 py-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-[var(--color-accent)] focus:border-transparent outline-none transition-all" placeholder="john@example.com" />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="subject" className="block text-sm font-semibold text-gray-700">Subject</label>
                    <select id="subject" className="w-full px-4 py-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-[var(--color-accent)] focus:border-transparent outline-none transition-all bg-white">
                      <option>General Inquiry</option>
                      <option>Coaching Programs</option>
                      <option>Speaking Engagements</option>
                      <option>Store & Resources</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="block text-sm font-semibold text-gray-700">Your Message *</label>
                    <textarea required id="message" rows={5} className="w-full px-4 py-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-[var(--color-accent)] focus:border-transparent outline-none transition-all resize-y" placeholder="How can we help you?" />
                  </div>
                </div>

                <div className="pt-4 border-t border-gray-100">
                  <button 
                    type="submit"
                    className="flex items-center justify-center px-8 py-4 bg-[var(--color-accent)] text-white font-bold rounded-lg hover:bg-[var(--color-accent-hover)] transition-all transform hover:-translate-y-1 shadow-lg group"
                  >
                    <Send size={18} className="mr-3 transform group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />
                    Send Message
                  </button>
                </div>
              </form>
            )}
          </div>

        </div>
      </section>

    </div>
  );
}
