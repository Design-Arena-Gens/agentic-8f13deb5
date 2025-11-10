"use client";

import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import Link from "next/link";
import { topSeasonAnime } from "@/lib/data";

export default function HeroSlideshow() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % topSeasonAnime.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const goToPrevious = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + topSeasonAnime.length) % topSeasonAnime.length
    );
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % topSeasonAnime.length);
  };

  const currentAnime = topSeasonAnime[currentIndex];

  return (
    <div className="relative h-[600px] overflow-hidden mt-16">
      <div
        className="absolute inset-0 bg-cover bg-center transition-all duration-500 slideshow-container"
        style={{
          backgroundImage: `url(${currentAnime.imageUrl})`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/70 to-transparent" />
      </div>

      <div className="relative h-full container mx-auto px-4 flex items-center">
        <div className="max-w-2xl">
          <div className="inline-block bg-accent px-4 py-1 rounded-full mb-4">
            <span className="font-semibold">#{currentIndex + 1} This Season</span>
          </div>
          <h1 className="text-6xl font-bold mb-4">{currentAnime.title}</h1>
          <p className="text-xl text-gray-300 mb-6">{currentAnime.shortSummary}</p>
          <div className="flex items-center gap-6 mb-8">
            <div className="flex items-center gap-2">
              <Star className="w-6 h-6 fill-yellow-400 text-yellow-400" />
              <span className="text-2xl font-semibold">{currentAnime.rating}</span>
            </div>
            <span className="text-gray-300">{currentAnime.episodes} Episodes</span>
            <span className="text-gray-300">{currentAnime.season}</span>
          </div>
          <Link
            href={`/anime/${currentAnime.id}`}
            className="inline-block bg-accent hover:bg-accent/80 text-white px-8 py-3 rounded-lg font-semibold transition-all"
          >
            View Details
          </Link>
        </div>
      </div>

      <button
        onClick={goToPrevious}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 p-3 rounded-full transition-all"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      <button
        onClick={goToNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 p-3 rounded-full transition-all"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2">
        {topSeasonAnime.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              index === currentIndex ? "bg-accent w-8" : "bg-white/50"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
