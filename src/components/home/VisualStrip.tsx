import Image from "next/image";

export function VisualStrip() {
  return (
    <section className="w-full bg-white border-y border-gray-200">
      <div className="grid grid-cols-3 h-[250px] md:h-[350px]">
        {/* Image 1 */}
        <div className="relative overflow-hidden group">
          <Image
            src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=800"
            alt="Mountain view"
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
            unoptimized
          />
        </div>

        {/* Image 2 (Center portrait) */}
        <div className="relative overflow-hidden group">
          <Image
            src="/assets/coach-claypool-portrait.jpeg"
            alt="Coach Traveas Claypool Portrait"
            fill
            className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
          />
        </div>

        {/* Image 3 */}
        <div className="relative overflow-hidden group">
          <Image
            src="https://images.unsplash.com/photo-1518131336496-e26e3cb2ed74?auto=format&fit=crop&q=80&w=800"
            alt="Salt Crystals"
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
            unoptimized
          />
        </div>
      </div>
    </section>
  );
}
