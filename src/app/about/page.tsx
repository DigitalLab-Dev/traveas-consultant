import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Target, Shield, Heart } from "lucide-react";

export const metadata = {
  title: "About | Traveas Consulting",
  description: "Learn about Traveas Consulting and its mission to help individuals shift their mindset, overcome limiting beliefs, and create meaningful personal and professional transformation.",
};

export default function AboutPage() {
  return (
    <div className="pt-20 bg-white min-h-screen">
      
      {/* HERO / INTRO SECTION */}
      <section className="relative py-20 lg:py-32 overflow-hidden bg-gradient-to-br from-gray-50 via-[var(--color-accent)]/5 to-gray-100 border-b border-gray-200">
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
          <div className="absolute top-0 right-0 w-[800px] h-[800px] rounded-full bg-[var(--color-accent)]/10 blur-[120px]" />
          <div className="absolute bottom-0 left-0 w-[600px] h-[600px] rounded-full bg-[var(--color-accent)]/10 blur-[100px]" />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1 space-y-8">
              <div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold tracking-tight text-gray-900 leading-tight">
                  Meet the <br />
                  <span className="text-[var(--color-accent)] italic">Paradigm Shifter</span>
                </h1>
                <div className="h-1 w-20 bg-[var(--color-accent)] mt-6 mb-8" />
              </div>

              <div className="space-y-6 text-gray-700 leading-relaxed text-lg">
                <p>
                  Growing up on the hard streets of Kankakee, IL., I learned early that life doesn't hand out opportunities, you have to fight for them. My journey proves that tough beginnings don't break you; they build you.
                </p>
                <p>
                  Through pain, struggle, and relentless hustle, I transformed my story from survival to success. Today, I stand as a mindset coach, mentor, motivational speaker, and CEO of Traveas Consulting, evidence of what's possible when you refuse to give up.
                </p>
              </div>
            </div>

            <div className="order-1 lg:order-2 flex flex-col items-center w-full">
              <div className="relative w-full h-[500px] lg:h-[700px] pointer-events-none flex justify-center items-end">
                <Image
                  src="/assets/coach-claypool-main.png"
                  alt="Coach Traveas Claypool"
                  fill
                  className="object-contain object-bottom drop-shadow-2xl pointer-events-auto"
                  priority
                />
              </div>
              <div className="mt-6 text-center w-full">
                <h3 className="text-2xl md:text-3xl font-serif font-bold text-gray-900">
                  Coach Traveas Claypool
                </h3>
                <p className="text-[var(--color-accent)] font-semibold text-lg uppercase tracking-wide mt-2">
                  CEO & Mindset Transformation Coach
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STORY / JOURNEY SECTION */}
      <section className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            
            {/* Portrait Image */}
            <div className="lg:col-span-5 relative w-full aspect-[4/5] rounded-xl overflow-hidden shadow-2xl border border-gray-100 sticky top-32">
              <Image
                src="/assets/coach-claypool-portrait.jpeg"
                alt="Coach Traveas Claypool Portrait"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/40 to-transparent" />
            </div>

            {/* Story Text Content */}
            <div className="lg:col-span-7 space-y-10 text-gray-700 text-lg leading-relaxed">
              <div className="space-y-6">
                <h2 className="text-3xl font-serif font-bold text-gray-900 mb-6">A Journey Through the Darkness</h2>
                <p>
                  As a struggling young man, deeply engrossed in the fast-money drug game introduced by a childhood friend, my life was full of chaos and hard lessons. I watched this friend go from struggling to having anything he wanted, and I wanted the same thing. Tempted by the lure of fast money and a better life, I followed in his footsteps, chasing a lifestyle I thought would change everything. So much so that I sold drugs on the turbulent streets of Kankakee from 18 to 32 years of age.
                </p>
                <p>
                  That choice trapped me in a vicious cycle of going in and out of prison for manufacturing and selling drugs. I watched my life spiral deeper into darkness, surrounded by death and destruction, as people I knew died young from the same streets that raised us. But deep down, I knew I was meant for more — and I refused to let that be how my story ended.
                </p>
              </div>

              <div className="p-8 bg-gray-50 border-l-4 border-[var(--color-accent)] rounded-r-md">
                <q className="text-2xl font-serif font-medium text-gray-900 italic block mb-4">
                  I remember sitting in a jail cell, telling myself, "There's got to be a better way to live than this."
                </q>
                <p className="text-gray-600">
                  Just because I was dealt a rough hand didn't mean I had to keep playing it. I refused to believe that where I came from had to dictate where I was going.
                </p>
              </div>

              <div className="space-y-6">
                <h2 className="text-3xl font-serif font-bold text-gray-900 mb-6">The Turning Point</h2>
                <p>
                  2009 became the turning point. I made a conscious decision to step back and take a hard look at the life I was living. I reminded myself that my mind — not my circumstances — was the real power that shaped my future. With that realization, I began to challenge everything I thought I knew. I shifted my mindset to match the life I wanted, not the life I was stuck in.
                </p>
                <p>
                  In that transformation, I found my purpose. I made a commitment to not only change my life but also help others break free from the same chains that held them down.
                </p>
              </div>

              <div className="space-y-6 pt-8 border-t border-gray-100">
                <h2 className="text-3xl font-serif font-bold text-gray-900 mb-6">Your Transformation Starts Now</h2>
                <p>
                  If you're reading this and you're stuck, caught in the cycle of your past, or feeling like the life you want is out of reach, I want you to know this: You have the power to change. Your past doesn't have to define your future, and the mind that got you to where you are today is the same mind that can take you where you want to go.
                </p>
                <p>
                  Whether you're looking to break free from old habits, overcome obstacles, or step into a life that truly fulfills you, I'm here to help you make that change. If you're ready to challenge your beliefs, rewire your mindset, and turn your life around, I invite you to reach out. Let's work together to build the life you've always dreamed of — because the first step starts with you.
                </p>
              </div>
            </div>
            
          </div>
        </div>
      </section>

      {/* APPROACH, VALUES & WHY CHOOSE US */}
      <section className="py-24 bg-gray-50 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-gray-900 mb-6">Our Philosophy</h2>
            <div className="h-1 w-20 bg-[var(--color-accent)] mx-auto" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Approach */}
            <div className="bg-white p-10 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="w-14 h-14 bg-[var(--color-accent)]/10 rounded-full flex items-center justify-center mb-6 text-[var(--color-accent)]">
                <Target size={28} />
              </div>
              <h3 className="text-2xl font-serif font-bold text-gray-900 mb-4">Our Approach</h3>
              <p className="text-gray-600 leading-relaxed">
                We believe that a strong, positive mindset is the foundation for success in all areas of life. Our coaching approach is tailored to each individual's unique needs, combining proven techniques with personalized strategies to support growth and empowerment. As a consulting firm, we are certified in various methodologies, resources, and tools to provide comprehensive support.
              </p>
            </div>

            {/* Why Choose Us */}
            <div className="bg-white p-10 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-[var(--color-accent)]" />
              <div className="w-14 h-14 bg-[var(--color-accent)]/10 rounded-full flex items-center justify-center mb-6 text-[var(--color-accent)]">
                <Heart size={28} />
              </div>
              <h3 className="text-2xl font-serif font-bold text-gray-900 mb-4">Why Choose Us?</h3>
              <p className="text-gray-600 leading-relaxed">
                Our coaching philosophy is rooted in empathy, authenticity, and a commitment to your success. We provide a safe, supportive environment where you can identify mental incarceration, explore your potential, set meaningful goals, and develop the skills needed to thrive. Together, we'll break through limiting beliefs and create lasting change.
              </p>
            </div>

            {/* Values */}
            <div className="bg-white p-10 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="w-14 h-14 bg-[var(--color-accent)]/10 rounded-full flex items-center justify-center mb-6 text-[var(--color-accent)]">
                <Shield size={28} />
              </div>
              <h3 className="text-2xl font-serif font-bold text-gray-900 mb-4">Core Values</h3>
              <p className="text-gray-600 leading-relaxed">
                Innovation, collaboration, and integrity are at the core of our consulting practice. We believe in developing and cultivating strong and sustainable relationships with our clients to drive their personal and professional growth and prosperity.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-24 bg-white relative overflow-hidden border-t border-gray-200">
        <div className="absolute inset-0 z-0 pointer-events-none opacity-5"
             style={{ backgroundImage: "url('https://images.unsplash.com/photo-1550684848-fac1c5b4e853?auto=format&fit=crop&q=80&w=2000')" }} />
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-gray-900 mb-6">
            Ready to transform your mindset and achieve your dreams?
          </h2>
          <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
            Contact us today to schedule a free consultation and start your journey towards a brighter, more empowered future.
          </p>
          <Link 
            href="/contact"
            className="inline-flex items-center justify-center px-10 py-5 bg-[var(--color-accent)] text-white font-semibold rounded-sm hover:bg-[var(--color-accent-hover)] transition-all transform hover:-translate-y-1 shadow-lg text-lg gap-3"
          >
            Get Started Today <ArrowRight size={20} />
          </Link>
        </div>
      </section>

    </div>
  );
}
