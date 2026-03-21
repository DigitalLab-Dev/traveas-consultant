import Link from "next/link";
import { Facebook, Instagram, Twitter, Linkedin } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-50 border-t border-gray-200 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <span className="font-serif text-2xl tracking-wider text-gray-900 font-bold block">
              TRAVEAS
              <span className="text-[var(--color-accent)]"> CONSULTING</span>
            </span>
            <p className="text-gray-600 text-sm max-w-sm">
              Empowering individuals to break free from destructive patterns and rebuild their mindset for a transformed future.
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-gray-900 font-medium mb-4 text-lg font-serif">Contact</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/contact" className="text-gray-600 hover:text-[var(--color-accent)] transition-colors text-sm">
                  Let's Connect
                </Link>
              </li>
              <li>
                <Link href="/book-online" className="text-gray-600 hover:text-[var(--color-accent)] transition-colors text-sm">
                  1:1 Coaching
                </Link>
              </li>
              <li>
                <a href="https://www.facebook.com/groups/4053055011389669" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-[var(--color-accent)] transition-colors text-sm">
                  Join Our Facebook Community
                </a>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="text-gray-900 font-medium mb-4 text-lg font-serif">Follow</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-600 hover:text-[var(--color-accent)] transition-colors">
                <span className="sr-only">Facebook</span>
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-600 hover:text-[var(--color-accent)] transition-colors">
                <span className="sr-only">Instagram</span>
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-600 hover:text-[var(--color-accent)] transition-colors">
                <span className="sr-only">Twitter</span>
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-600 hover:text-[var(--color-accent)] transition-colors">
                <span className="sr-only">LinkedIn</span>
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-200 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 text-xs text-gray-500">
          <p>© {currentYear} Traveas Consulting. All Rights Reserved.</p>
          <div className="flex space-x-6">
            <Link href="/privacy-policy" className="hover:text-gray-900 transition-colors">
              Our Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-gray-900 transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
