import Image from "next/image";
import Link from "next/link";
import { Clock, Tag, ChevronRight, CalendarCheck } from "lucide-react";

export const metadata = {
  title: "Book Online | Traveas Consulting",
  description: "Find the perfect remote personal growth coach at Traveas Consulting. Schedule your next coaching session to enhance your personal development journey today.",
};

export default function BookOnlinePage() {
  const services = [
    {
      title: "Coaching Consultation",
      duration: "30 min",
      price: "Free",
      buttonText: "Book Now",
      url: "https://www.traveasconsulting.com/booking-calendar/coaching-consultation",
      featured: true,
      description: "A comprehensive introductory session to discuss your current challenges, establish your goals, and discover how our mindset framework can help you break free.",
      image: "/assets/book-online/1.jpg"
    },
    {
      title: "Basic Individual Coaching",
      duration: "1 hr",
      price: "Contact for pricing",
      buttonText: "Book Now",
      url: "https://www.traveasconsulting.com/booking-calendar/basic-individual-coaching",
      featured: false,
      description: "Targeted 1-on-1 coaching focusing on immediate limiting beliefs and applying foundational mindset shifting techniques for quick clarity.",
      image: "/assets/book-online/2.png"
    },
    {
      title: "Comprehensive Individual Coaching",
      duration: "1 hr",
      price: "Contact for pricing",
      buttonText: "Book Now",
      url: "https://www.traveasconsulting.com/booking-calendar/comprehensive-individual-coaching",
      featured: false,
      description: "An immersive session structured around the 4-step transformation framework to tear down deep-rooted mental walls and reconstruct a new narrative.",
      image: "/assets/book-online/3.png"
    },
    {
      title: "Premium Individual Coaching",
      duration: "1 hr",
      price: "Contact for pricing",
      buttonText: "Book Now",
      url: "https://www.traveasconsulting.com/booking-calendar/premium-individual-coaching",
      featured: false,
      description: "Our highest level of strategic 1-on-1 coaching designed for leaders and individuals seeking massive, lasting paradigm shifts and accountability.",
      image: "/assets/book-online/4.png"
    },
    {
      title: "Mindset Coaching for Youth",
      duration: "1 hr",
      price: "Varied Pricing",
      buttonText: "Request to Book",
      url: "https://www.traveasconsulting.com/booking-calendar/mindset-coaching-for-youth",
      featured: false,
      description: "Specialized mindset development aimed at helping youth navigate peer pressure, build unshakeable confidence, and establish healthy thought patterns early.",
      image: "/assets/book-online/5.jpg"
    }
  ];

  return (
    <div className="pt-20 bg-gray-50 min-h-screen pb-24">
      
      {/* HEADER SECTION */}
      <section className="bg-white border-b border-gray-200 py-16 lg:py-24 relative overflow-hidden">
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-[var(--color-accent)]/10 blur-[100px]" />
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full bg-gray-100 blur-[80px]" />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[var(--color-accent)]/10 text-[var(--color-accent)] mb-6">
            <CalendarCheck size={32} />
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-gray-900 mb-6">
            Book a Session
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Take the first step toward breaking free from mental incarceration. Select a coaching service below to schedule your remote 1-on-1 session with Coach Traveas Claypool.
          </p>
        </div>
      </section>

      {/* SERVICES GRID */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <div 
              key={idx} 
              className={`bg-white rounded-2xl flex flex-col relative overflow-hidden transition-all duration-300 hover:shadow-xl ${
                service.featured 
                  ? 'border-2 border-[var(--color-accent)] shadow-lg lg:scale-105 z-10' 
                  : 'border border-gray-100 shadow-sm hover:border-[var(--color-accent)]/50'
              }`}
            >
              {service.featured && (
                <div className="absolute top-0 inset-x-0 h-1.5 bg-[var(--color-accent)] z-20" />
              )}
              
              <div className="relative w-full h-56 bg-gray-100 flex-shrink-0">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover"
                  unoptimized
                />
              </div>
              
              <div className="p-8 pb-6 flex flex-col flex-grow">
                <div className="mb-6 flex-grow">
                  {service.featured && (
                    <span className="inline-block px-3 py-1 bg-[var(--color-accent)]/10 text-[var(--color-accent)] text-xs font-bold uppercase tracking-wider rounded-full mb-4">
                    Recommended Start
                  </span>
                )}
                <h3 className="text-2xl font-serif font-bold text-gray-900 mb-3 leading-tight">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-6">
                  {service.description}
                </p>
                
                <div className="space-y-3">
                  <div className="flex items-center text-sm font-medium text-gray-700 bg-gray-50 px-3 py-2 rounded-md">
                    <Clock size={16} className="text-[var(--color-accent)] mr-3 opacity-80" />
                    {service.duration}
                  </div>
                  <div className="flex items-center text-sm font-medium text-gray-700 bg-gray-50 px-3 py-2 rounded-md">
                    <Tag size={16} className="text-[var(--color-accent)] mr-3 opacity-80" />
                    {service.price}
                  </div>
                </div>
              </div>

              <div className="pt-6 border-t border-gray-100 mt-auto">
                <Link
                  href={service.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-full flex items-center justify-center px-6 py-3.5 rounded-lg font-semibold transition-all group ${
                    service.featured 
                      ? 'bg-[var(--color-accent)] text-white hover:bg-[var(--color-accent-hover)] shadow-md hover:shadow-lg' 
                      : 'bg-gray-900 text-white hover:bg-gray-800 shadow-sm'
                  }`}
                >
                  {service.buttonText} 
                  <ChevronRight size={18} className="ml-2 transform group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
              
              </div> {/* Close p-8 wrapper */}
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}
