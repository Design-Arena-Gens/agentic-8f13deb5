import { topRatedAnime } from "@/lib/data";
import AnimeCard from "./AnimeCard";

export default function TopCharts() {
  return (
    <section>
      <h2 className="text-3xl font-bold mb-6">Top Rated Anime</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {topRatedAnime.map((anime) => (
          <AnimeCard key={anime.id} anime={anime} />
        ))}
      </div>
    </section>
  );
}
