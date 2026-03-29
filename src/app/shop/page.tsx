import Image from "next/image";
import Link from "next/link";
import { ShoppingBag, ExternalLink, CheckCircle2, ChevronRight } from "lucide-react";

export const metadata = {
  title: "Shop | Traveas Consulting",
  description: "Shop mindset transformation tools from Traveas Consulting, including workbooks, journals, and resources designed to help you overcome limiting beliefs and achieve personal growth.",
};

export default function ShopPage() {
  const products = [
    {
      id: "workbook",
      title: "Shifting Your Mindset to Change Your Life Workbook",
      description: "This workbook helps you break free from mental incarceration and create the life you desire. Explore paradigms to overcome limiting thoughts, redefine goals, and align actions with purposeful intentions. Guided moments of reflections and gratitude practices cultivate self-awareness and a positive outlook, attracting abundance. Transform your mindset and life.",
      image: "/assets/product-workbook.png",
      features: [
        "Includes in-depth exercises to help you identify strengths and areas for improvement",
        "Motivates you to cultivate self-awareness and connect with your deepest desires",
        "Provides action plans to turn your dreams into reality"
      ],
      links: [
        { label: "$25.99 - Ebook", url: "https://a.co/d/h4KdBsn", external: true },
        { label: "$25.99 - Digital File", url: "https://www.traveasconsulting.com/product-page/shift-your-mindset-to-change-your-life-workbook-2", external: false },
        { label: "$25.99 - Paperback", url: "https://a.co/d/7oOooN3", external: true },
      ]
    },
    {
      id: "companion-journal",
      title: "Shifting Your Mindset to Change Your Life Companion Journal",
      description: "Welcome to your Moments of Reflection Companion Journal, designed to free you from mental incarceration and guide you toward your desired life. This journal complements the workbook, forming a comprehensive approach to mindset transformation and lasting change.",
      image: "/assets/product-companion.png",
      features: [
        "Daily Moment of Reflections: Write about your thoughts and feelings daily",
        "Goal Setting: Set your personal and professional goals",
        "Mindset Quotes: Refer to the collection of quotes for inspiration",
        "Vision Statement: Craft a vision statement encapsulating your aspirations"
      ],
      links: [
        { label: "Paperback", url: "https://a.co/d/1e65J53", external: true },
        { label: "$15.99 - Digital File", url: "https://www.traveasconsulting.com/product-page/shifting-your-mindset-to-change-your-mind-companion-journal-digital", external: false },
      ]
    },
    {
      id: "daily-journal",
      title: "Moments of Reflection Daily Journal",
      description: "Our daily moments of reflection journal is perfect for everyday use. Whether you're jotting down ideas, tracking your progress, or simply expressing your thoughts, this journal is a versatile tool for personal growth.",
      image: "/assets/product-daily.png",
      features: [
        "Includes in-depth exercises to help you identify your strengths",
        "Motivates you to cultivate self-awareness and gain clarity",
        "Provides action plans to turn your dreams into reality"
      ],
      links: [
        { label: "Paperback", url: "https://a.co/d/192e3HA", external: true },
        { label: "$10.99 - Digital File", url: "https://www.traveasconsulting.com/product-page/shifting-your-mindset-to-change-your-mind-blank-journal-digital", external: false },
      ]
    }
  ];

  return (
    <div className="pt-20 bg-gray-50 min-h-screen pb-24">
      {/* SHOP HERO */}
      <section className="bg-white border-b border-gray-200 py-16 lg:py-24 relative overflow-hidden">
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-[var(--color-accent)]/10 blur-[100px]" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-gray-100 blur-[80px]" />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <span className="text-[var(--color-accent)] font-semibold tracking-wider uppercase text-sm mb-4 block">Official Store</span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-gray-900 mb-6">
            Mindset Transformation Tools
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Shop resources, workbooks, and journals designed to help you overcome limiting beliefs, cultivate self-awareness, and achieve lasting personal growth.
          </p>
        </div>
      </section>

      {/* PRODUCTS GRID */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {products.map((product) => (
            <div key={product.id} className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden flex flex-col hover:shadow-xl transition-shadow duration-300 group">
              {/* Product Image Placeholder */}
              <div className="relative w-full aspect-[4/5] bg-gray-100 overflow-hidden flex items-center justify-center p-8 border-b border-gray-100 group-hover:bg-gray-50 transition-colors">
                {/* Fallback pattern if image is missing before user adds it */}
                <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1550684848-fac1c5b4e853?auto=format&fit=crop&q=80&w=2000')" }} />
                
                <div className="relative w-full h-full shadow-[0_20px_40px_rgba(0,0,0,0.1)] rounded-md pointer-events-none">
                   <Image
                      src={product.image}
                      alt={product.title}
                      fill
                      className="object-contain"
                      unoptimized
                    />
                </div>
              </div>

              {/* Product Details */}
              <div className="p-8 flex flex-col flex-grow">
                <h2 className="text-2xl font-serif font-bold text-gray-900 mb-4 line-clamp-2">
                  {product.title}
                </h2>
                <p className="text-gray-600 text-sm leading-relaxed mb-6 line-clamp-4">
                  {product.description}
                </p>

                <div className="mb-8 flex-grow">
                  <h4 className="text-xs font-bold text-gray-900 uppercase tracking-wider mb-3">What's Inside</h4>
                  <ul className="space-y-2">
                    {product.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start text-sm text-gray-600">
                        <CheckCircle2 size={16} className="text-[var(--color-accent)] mr-2 mt-0.5 flex-shrink-0" />
                        <span className="leading-snug">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Purchase Links */}
                <div className="space-y-3 mt-auto border-t border-gray-100 pt-6">
                  {product.links.map((link, idx) => (
                    <Link 
                      key={idx}
                      href={link.url}
                      target={link.external ? "_blank" : "_self"}
                      rel={link.external ? "noopener noreferrer" : ""}
                      className="w-full flex items-center justify-between px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg hover:bg-[var(--color-accent)] hover:border-[var(--color-accent)] hover:text-white transition-all group/btn text-sm font-medium text-gray-800"
                    >
                      <span className="flex items-center gap-2">
                        <ShoppingBag size={16} className="opacity-70" />
                        {link.label}
                      </span>
                      {link.external ? <ExternalLink size={16} className="opacity-50 group-hover/btn:opacity-100" /> : <ChevronRight size={16} className="opacity-50 group-hover/btn:opacity-100" />}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* EXCLUSIVE BUNDLE FEATURE */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-24">
        <div className="bg-gray-900 rounded-3xl overflow-hidden shadow-2xl relative">
          <div className="absolute inset-0 z-0 opacity-20" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=2500')", backgroundSize: "cover", backgroundPosition: "center" }} />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-gray-900/90 to-transparent z-0" />
          
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 p-10 lg:p-16 gap-12 items-center">
            <div className="space-y-6">
              <span className="inline-block px-4 py-1.5 bg-[var(--color-accent)] text-white text-xs font-bold uppercase tracking-widest rounded-full">
                Exclusive Offer
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-white leading-tight">
                Shifting Your Mindset to Change Your Life Collection
              </h2>
              <p className="text-gray-300 text-lg leading-relaxed max-w-xl">
                Unlock your full potential with our exclusive bundle, combining the <strong className="text-white">Workbook</strong>, <strong className="text-white">Companion Journal</strong>, and <strong className="text-white">Daily Reflection Journal</strong>. 
                This comprehensive package provides all the tools you need for personal growth and success at an unbeatable price of <span className="text-[var(--color-accent)] font-bold text-xl">$49.99</span>.
              </p>
              
              <div className="pt-4">
                <Link
                  href="https://www.traveasconsulting.com/product-page/shifting-your-mindset-to-change-your-life-collection-bundle"
                  className="inline-flex items-center justify-center px-8 py-4 bg-[var(--color-accent)] text-white font-semibold rounded-sm hover:bg-white hover:text-gray-900 transition-all transform hover:-translate-y-1 shadow-lg gap-2"
                >
                  Order the Digital Bundle Now <ChevronRight size={20} />
                </Link>
                <p className="text-gray-500 text-xs mt-4">*Prices do not include applicable taxes.</p>
              </div>
            </div>
            
            <div className="relative h-[400px] w-full hidden lg:flex items-center justify-center pl-8">
               {/* Connective Bundle Display */}
               <div className="relative w-full h-[110%] pointer-events-none drop-shadow-[0_20px_40px_rgba(0,0,0,0.5)] flex items-center justify-center">
                 {/* Left Book Component */}
                 <div className="absolute w-[45%] h-[75%] left-0 transform -rotate-12 scale-90 translate-y-8 z-10 transition-transform hover:scale-95 duration-500">
                   <Image
                      src="/assets/product-daily.png"
                      alt="Moments of Reflection Daily Journal"
                      fill
                      className="object-contain drop-shadow-xl"
                      unoptimized
                    />
                 </div>
                 
                 {/* Right Book Component */}
                 <div className="absolute w-[45%] h-[75%] right-0 transform rotate-12 scale-90 translate-y-8 z-10 transition-transform hover:scale-95 duration-500">
                   <Image
                      src="/assets/product-companion.png"
                      alt="Companion Journal"
                      fill
                      className="object-contain drop-shadow-xl"
                      unoptimized
                    />
                 </div>

                 {/* Center Main Book (Workbook) */}
                 <div className="absolute w-[65%] h-full z-20 transform -translate-y-4 transition-transform hover:scale-105 duration-500">
                   <Image
                      src="/assets/product-workbook.png"
                      alt="Mindset Workbook"
                      fill
                      className="object-contain drop-shadow-2xl"
                      unoptimized
                    />
                 </div>
               </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
