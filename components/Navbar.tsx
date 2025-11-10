"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isGenreOpen, setIsGenreOpen] = useState(false);

  return (
    <nav className="bg-secondary shadow-lg fixed w-full top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="text-2xl font-bold text-accent">
            AniReview
          </Link>

          <div className="hidden md:flex items-center gap-6">
            <Link
              href="/"
              className="text-white hover:text-accent transition-colors font-medium"
            >
              Home
            </Link>

            <div className="relative">
              <button
                onClick={() => setIsGenreOpen(!isGenreOpen)}
                className="text-white hover:text-accent transition-colors font-medium"
              >
                Genre
              </button>
              {isGenreOpen && (
                <div className="absolute top-full mt-2 bg-secondary rounded-lg shadow-xl p-4 min-w-[200px]">
                  <Link
                    href="/genre"
                    onClick={() => setIsGenreOpen(false)}
                    className="block px-4 py-2 text-white hover:bg-accent/20 rounded transition-colors"
                  >
                    Browse All Genres
                  </Link>
                </div>
              )}
            </div>
          </div>

          <div className="md:hidden">
            <button className="text-white">
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
