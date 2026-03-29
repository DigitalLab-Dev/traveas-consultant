import Image from "next/image";
import Link from "next/link";
import { DownloadCloud, BookOpen } from "lucide-react";

export const metadata = {
  title: "Resources | Traveas Consulting",
  description: "Discover a curated collection of coaching resources and explore growth mindset coaching online to achieve personal and professional success.",
};

const adultBooks = [
  {
    title: "As a Man Thinketh",
    author: "James Allen",
    description: "A timeless classic that explores the power of thought and its influence on personal development and success.",
    image: "https://static.wixstatic.com/media/261f91_6ec3ba4c97a642ab8016832797a9a7c6~mv2.png",
    pdfLink: "https://wahiduddin.net/thinketh/as_a_man_thinketh.pdf"
  },
  {
    title: "The Science of Getting Rich",
    author: "Wallace Wattles",
    description: "Understand the principles of wealth creation and how to apply them to achieve financial success and personal fulfillment.",
    image: "https://static.wixstatic.com/media/261f91_661b79e26e21479c80195e10ad3d0bce~mv2.png",
    pdfLink: "https://ia800805.us.archive.org/31/items/TheScienceOfGettingRich.pdf/the_science_of_getting_rich.pdf"
  },
  {
    title: "Think and Grow Rich",
    author: "Napoleon Hill",
    description: "Learn about the key principles of success and wealth creation from one of the most influential self-help books of all time.",
    image: "https://static.wixstatic.com/media/261f91_83b1f57a35ef4d27851398902996bcd1~mv2.png",
    pdfLink: "https://apex.oracle.com/pls/apex/lonestar/r/files/static/v13Y/Think-And-Grow-Rich_2011-06.pdf"
  },
  {
    title: "The 7 Habits of Highly Effective People",
    author: "Steven R. Covey",
    description: "A timeless guide outlining a principle-centered approach to effectiveness through seven transformative habits.",
    image: "https://static.wixstatic.com/media/261f91_e96f9dcc397145cd8e3e952c0e0534c6~mv2.png",
    pdfLink: "https://icrrd.com/public/media/01-11-2020-212827The%207%20Habits%20of%20Highly%20Effective%20People.pdf"
  },
  {
    title: "Start with Why",
    author: "Simon Sinek",
    description: "A compelling exploration of how great leaders inspire action by starting with a clear sense of purpose—their 'why'.",
    image: "https://static.wixstatic.com/media/261f91_92b7e2fb09d84d57b5dfd92c5429eec4~mv2.jpg",
    pdfLink: "https://www.earthgifts.com.au/ebook/simon-sinek-start-with-why.pdf"
  },
  {
    title: "Rich Dad Poor Dad",
    author: "Robert T. Kiyosaki",
    description: "A personal finance classic that contrasts two mindsets to teach key lessons about money, investing, and success.",
    image: "https://static.wixstatic.com/media/261f91_0eeedbe8ecfc4a2a8f47f811d46b2076~mv2.jpg",
    pdfLink: "https://www.traveasconsulting.com/_files/ugd/261f91_5c9b6771be244e0fa331d0053a7c8fb6.pdf"
  },
  {
    title: "The 8th Habit from Effectiveness to Greatness",
    author: "Steven R. Covey",
    description: "A transformative guide encouraging individuals to find their voice and inspire others to achieve true greatness.",
    image: "https://static.wixstatic.com/media/261f91_2f61483d723144588876e3ab971602e0~mv2.png",
    pdfLink: "https://www.traveasconsulting.com/_files/ugd/261f91_ee4b26678ac04604a3884a9c80ab0322.pdf"
  }
];

const youthBooks = [
  {
    title: "The 7 Habits of Highly Effective Teens",
    author: "Steven R. Covey",
    description: "This practical guide outlines a principal-centered approach that helps teens build confidence and make smart choices.",
    image: "https://static.wixstatic.com/media/261f91_515c116569f745349b749363862afbe2~mv2.png",
    pdfLink: "https://icrrd.com/public/media/16-05-2021-0452597-Habits-of-Highly-Effective-Teens.pdf"
  },
  {
    title: "Mindful Leadership",
    author: "Maria Gonzalez, MBA",
    description: "A thoughtful guide that blends mindfulness and leadership, helping leaders stay focused, calm, and effective.",
    image: "https://static.wixstatic.com/media/261f91_43a0e4284274463082c83f7dfd01af0f~mv2.jpeg",
    pdfLink: null
  },
  {
    title: "Talking with Confidence for the Painfully Shy",
    author: "Dan Gabor",
    description: "A supportive guide that offers practical tips and strategies to help shy individuals speak up and connect with others.",
    image: "https://static.wixstatic.com/media/261f91_7649fd5de2e0493cac3344b750b9392a~mv2.jpeg",
    pdfLink: null
  },
  {
    title: "A Growth Mindset for Teens",
    author: "Sydney Sheppard",
    description: "This is an empowering guide that helps teens embrace challenges, build resilience, and unlock their potential.",
    image: "https://static.wixstatic.com/media/261f91_8392d50deabf4e3fb35a118eae712f2d~mv2.jpeg",
    pdfLink: null
  }
];

function BookCard({ book }: { book: any }) {
  return (
    <div className="bg-white rounded-2xl flex flex-col overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 group">
      <div className="relative w-full h-64 bg-gray-50 flex items-center justify-center p-6 border-b border-gray-100">
        <div className="relative w-3/4 h-full drop-shadow-xl group-hover:scale-105 transition-transform duration-300">
          <Image
            src={book.image}
            alt={book.title}
            fill
            className="object-contain"
            sizes="(max-width: 768px) 100vw, 33vw"
            unoptimized
          />
        </div>
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-serif font-bold text-gray-900 mb-2 leading-tight">
          {book.title}
        </h3>
        <p className="text-[var(--color-accent)] font-semibold text-sm mb-4">By {book.author}</p>
        <p className="text-gray-600 text-sm leading-relaxed mb-6 flex-grow">
          {book.description}
        </p>
        
        {book.pdfLink ? (
          <Link
            href={book.pdfLink}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full flex items-center justify-center px-4 py-3 bg-gray-900 text-white rounded-lg hover:bg-[var(--color-accent)] transition-colors font-medium text-sm gap-2"
          >
            <DownloadCloud size={18} />
            Download Free PDF
          </Link>
        ) : (
          <div className="w-full flex items-center justify-center px-4 py-3 bg-gray-100 text-gray-400 rounded-lg font-medium text-sm gap-2 cursor-not-allowed">
            <BookOpen size={18} />
            Physical Copy Only
          </div>
        )}
      </div>
    </div>
  );
}

export default function ResourcesPage() {
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
            <BookOpen size={32} />
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-gray-900 mb-6">
            Coaching Resources
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Whether you're a current client or considering our coaching services, we've curated a selection of books and readings to support your journey. These resources are designed to help you enhance your understanding of the mindset shifting process.
          </p>
        </div>
      </section>

      {/* SUGGESTED BOOKS (ADULTS) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-20">
        <div className="flex items-center justify-between mb-10 border-b border-gray-200 pb-4">
          <h2 className="text-3xl font-serif font-bold text-gray-900">Suggested Books</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {adultBooks.map((book, idx) => (
            <BookCard key={idx} book={book} />
          ))}
        </div>
      </section>

      {/* SUGGESTED BOOKS (YOUTH) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-24">
        <div className="flex items-center justify-between mb-10 border-b border-gray-200 pb-4">
          <h2 className="text-3xl font-serif font-bold text-gray-900">Suggested Books <span className="text-[var(--color-accent)]">(Youth)</span></h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {youthBooks.map((book, idx) => (
            <BookCard key={idx} book={book} />
          ))}
        </div>
      </section>

    </div>
  );
}
