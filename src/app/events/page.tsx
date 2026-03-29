import Image from "next/image";
import Link from "next/link";
import { Calendar, MapPin, ArrowRight, Video } from "lucide-react";

export const metadata = {
  title: "Events | Traveas Consulting",
  description: "Discover mindset transformation events, workshops, recommended books and personal growth experiences hosted by Traveas Consulting.",
};

export default function EventListPage() {
  const events = [
    {
      id: "mindset-event-jun-06",
      title: "Shifting Your Mindset to Change Your Life: Empowering Your Mind w/Expert Insights from Mindset Coach Traveas Claypool",
      date: "Fri, Jun 06",
      time: "TBA",
      location: "Virtual Event",
      type: "Online Workshop",
      image: "https://static.wixstatic.com/media/261f91_8ce4369c8ba54379bc5a858d956f9590~mv2.png",
      link: "https://www.traveasconsulting.com/event-details/shifting-your-mindset-to-change-your-life-empowering-your-mind-w-expert-insights-from-mindset-coach-traveas-claypool"
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
            <Calendar size={32} />
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-gray-900 mb-6">
            Upcoming Events
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover upcoming mindset transformation workshops, live seminars, and personal growth experiences hosted by Coach Traveas Claypool.
          </p>
        </div>
      </section>

      {/* EVENTS FEED */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 space-y-8">
        {events.length > 0 ? (
          events.map((event) => (
            <div key={event.id} className="bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden group flex flex-col md:flex-row">
              {/* Event Image */}
              <div className="relative w-full md:w-2/5 h-64 md:h-auto bg-gray-100 overflow-hidden flex-shrink-0">
                <Image
                  src={event.image}
                  alt={event.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  unoptimized // Ensures we drop Wix compression blocks
                />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-md text-xs font-bold uppercase tracking-wider text-[var(--color-accent)]">
                  {event.type}
                </div>
              </div>

              {/* Event Details */}
              <div className="p-8 md:p-10 flex flex-col justify-center flex-grow">
                <h2 className="text-2xl lg:text-3xl font-serif font-bold text-gray-900 mb-4 leading-snug">
                  {event.title}
                </h2>
                
                <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-8 mb-8">
                  <div className="flex items-center text-gray-600">
                    <Calendar size={18} className="text-[var(--color-accent)] mr-2" />
                    <span className="font-medium">{event.date}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Video size={18} className="text-[var(--color-accent)] mr-2" />
                    <span className="font-medium">{event.location}</span>
                  </div>
                </div>

                <div className="mt-auto pt-6 border-t border-gray-100">
                  <Link
                    href={event.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center px-6 py-3 bg-gray-900 text-white font-medium rounded-lg hover:bg-[var(--color-accent)] transition-colors group/btn w-full sm:w-auto"
                  >
                    View Details & Register
                    <ArrowRight size={18} className="ml-2 transform group-hover/btn:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="text-center py-20 bg-white rounded-2xl border border-gray-100 shadow-sm">
            <h3 className="text-2xl font-serif font-bold text-gray-900 mb-2">No Upcoming Events</h3>
            <p className="text-gray-600">Check back soon for new workshops and speaking engagements.</p>
          </div>
        )}
      </section>

    </div>
  );
}
