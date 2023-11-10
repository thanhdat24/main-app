import Image from "next/image";
import React from "react";
import dynamic from "next/dynamic";
import InfoCard from "@/components/InfoCard";
import BlogCard from "@/components/BlogCard";
import OnlineCard from "@/components/OnlineCard";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

// const BlogCard = import("Blog/Card");s
// const Card = import("blog/Card");
// const BlogCard = dynamic(() => import("blog/blogCard"), { ssr: false });

// const BlogCard = import("blog/blogCard");
export default async function Home() {
  const response = await fetch(
    "https://q-force-wiki.hotanloc.xyz/flows/trigger/e8bb5c1b-36e0-4d67-ada1-f9be8ecf62b4",
    { next: { revalidate: 1 } }
  );
  const data = await response.json();
  return (
    <div>
      <Header />
      <main className="p-2 bg-gray-100 dark:bg-dark-primary dark:text-white min-h-screen pt-16 pb-10 w-screen !text-black">
        <div className="w-full md:max-w-screen-xl mx-auto pt-2 md:pt-4">
          <div className="w-full flex flex-cols items-start justify-between animate-fadeIn md:space-x-2">
            <InfoCard />
            <BlogCard data={data.data} />
            <OnlineCard />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
