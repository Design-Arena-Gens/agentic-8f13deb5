import Link from "next/link";
import { Star } from "lucide-react";
import { Anime } from "@/lib/data";

interface AnimeCardProps {
  anime: Anime;
}

export default function AnimeCard({ anime }: AnimeCardProps) {
  return (
    <Link href={`/anime/${anime.id}`}>
      <div className="anime-card cursor-pointer">
        <div className="relative aspect-[3/4] overflow-hidden rounded-lg mb-3">
          <img
            src={anime.imageUrl}
            alt={anime.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute top-2 right-2 bg-black/70 px-2 py-1 rounded-full flex items-center gap-1">
            <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
            <span className="text-sm font-semibold">{anime.rating}</span>
          </div>
        </div>
        <h3 className="font-semibold text-sm line-clamp-2">{anime.title}</h3>
      </div>
    </Link>
  );
}
