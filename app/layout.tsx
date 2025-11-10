import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "AniReview - Anime Reviews & Ratings",
  description: "Discover anime reviews, ratings, and community insights",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-primary text-white antialiased">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
