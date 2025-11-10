import HeroSlideshow from "@/components/HeroSlideshow";
import TopCharts from "@/components/TopCharts";
import TrendingBar from "@/components/TrendingBar";

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSlideshow />

      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="flex-1">
            <TopCharts />
          </div>

          <div className="lg:w-80">
            <TrendingBar />
          </div>
        </div>
      </div>
    </main>
  );
}
