import { Hero } from "@/components/home/Hero";
import { AuthorSection } from "@/components/home/AuthorSection";
import { Framework } from "@/components/home/Framework";
import { Newsletter } from "@/components/home/Newsletter";
import { Resources } from "@/components/home/Resources";

export default function Home() {
  return (
    <>
      <Hero />
      <AuthorSection />
      <Framework />
      <Newsletter />
      <Resources />
    </>
  );
}
