"use client";

import { useState } from "react";
import { animeDatabase } from "@/lib/data";
import AnimeCard from "@/components/AnimeCard";

const genres = [
  "All",
  "Action",
  "Adventure",
  "Comedy",
  "Drama",
  "Fantasy",
  "Horror",
  "Mystery",
  "Romance",
  "Sci-Fi",
  "Slice of Life",
  "Sports",
  "Supernatural",
  "Thriller",
];

export default function GenrePage() {
  const [selectedGenre, setSelectedGenre] = useState("All");

  const filteredAnime =
    selectedGenre === "All"
      ? animeDatabase
      : animeDatabase.filter((anime) => anime.genres.includes(selectedGenre));

  return (
    <main className="min-h-screen pt-24 pb-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8">Browse by Genre</h1>

        <div className="flex flex-wrap gap-3 mb-12">
          {genres.map((genre) => (
            <button
              key={genre}
              onClick={() => setSelectedGenre(genre)}
              className={`px-6 py-2 rounded-full font-medium transition-all ${
                selectedGenre === genre
                  ? "bg-accent text-white"
                  : "bg-secondary text-gray-300 hover:bg-accent/20"
              }`}
            >
              {genre}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {filteredAnime.map((anime) => (
            <AnimeCard key={anime.id} anime={anime} />
          ))}
        </div>

        {filteredAnime.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-400 text-xl">No anime found for this genre.</p>
          </div>
        )}
      </div>
    </main>
  );
}
