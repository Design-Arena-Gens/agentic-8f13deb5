import { notFound } from "next/navigation";
import { animeDatabase } from "@/lib/data";
import { Star, TrendingUp, TrendingDown } from "lucide-react";

export default function AnimePage({ params }: { params: { id: string } }) {
  const anime = animeDatabase.find((a) => a.id === parseInt(params.id));

  if (!anime) {
    notFound();
  }

  return (
    <main className="min-h-screen">
      <div
        className="h-96 bg-cover bg-center relative"
        style={{
          backgroundImage: `url(${anime.imageUrl})`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/70 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-8 container mx-auto">
          <h1 className="text-5xl font-bold mb-2">{anime.title}</h1>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1">
              <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
              <span className="text-xl font-semibold">{anime.rating}</span>
            </div>
            <span className="text-gray-300">{anime.episodes} Episodes</span>
            <span className="text-gray-300">{anime.season}</span>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            <section>
              <h2 className="text-3xl font-bold mb-4 text-accent">Short Summary</h2>
              <p className="text-gray-300 text-lg leading-relaxed">
                {anime.shortSummary}
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-bold mb-4 text-accent">Detailed Summary</h2>
              <p className="text-gray-300 leading-relaxed">
                {anime.longSummary}
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-bold mb-6 text-accent">Community Review</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-secondary rounded-lg p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <TrendingUp className="w-6 h-6 text-green-400" />
                    <h3 className="text-2xl font-semibold text-green-400">Pros</h3>
                  </div>
                  <ul className="space-y-2">
                    {anime.communityReview.pros.map((pro, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <span className="text-green-400 mt-1">•</span>
                        <span className="text-gray-300">{pro}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-secondary rounded-lg p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <TrendingDown className="w-6 h-6 text-red-400" />
                    <h3 className="text-2xl font-semibold text-red-400">Cons</h3>
                  </div>
                  <ul className="space-y-2">
                    {anime.communityReview.cons.map((con, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <span className="text-red-400 mt-1">•</span>
                        <span className="text-gray-300">{con}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </section>
          </div>

          <div className="space-y-6">
            <div className="bg-secondary rounded-lg p-6">
              <img
                src={anime.imageUrl}
                alt={anime.title}
                className="w-full rounded-lg mb-4"
              />
              <div className="space-y-3">
                <div>
                  <h3 className="text-sm text-gray-400">Genre</h3>
                  <div className="flex flex-wrap gap-2 mt-1">
                    {anime.genres.map((genre) => (
                      <span
                        key={genre}
                        className="bg-accent/20 text-accent px-3 py-1 rounded-full text-sm"
                      >
                        {genre}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <h3 className="text-sm text-gray-400">Studio</h3>
                  <p className="text-white">{anime.studio}</p>
                </div>
                <div>
                  <h3 className="text-sm text-gray-400">Status</h3>
                  <p className="text-white">{anime.status}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
