import { trendingAnime } from "@/lib/data";
import { Star, TrendingUp } from "lucide-react";
import Link from "next/link";

export default function TrendingBar() {
  return (
    <section className="bg-secondary rounded-lg p-6">
      <div className="flex items-center gap-2 mb-6">
        <TrendingUp className="w-6 h-6 text-accent" />
        <h2 className="text-2xl font-bold">Trending This Year</h2>
      </div>

      <div className="space-y-4">
        {trendingAnime.map((anime, index) => (
          <Link
            key={anime.id}
            href={`/anime/${anime.id}`}
            className="flex items-center gap-3 hover:bg-primary/50 p-2 rounded-lg transition-all"
          >
            <span className="text-2xl font-bold text-accent w-8">
              {index + 1}
            </span>
            <div className="flex-1">
              <h3 className="font-semibold line-clamp-1">{anime.title}</h3>
              <p className="text-sm text-gray-400">{anime.views} views</p>
            </div>
            <div className="flex items-center gap-1">
              <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
              <span className="font-semibold">{anime.rating}</span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
