'use client';

import CodeCard from "@/components/commons/cards/CodeCard";
import NewsletterCard from "@/components/commons/cards/NewsletterCard";
import PostCard from "@/components/commons/cards/PostCard";
import ProfileCard from "@/components/commons/cards/ProfileCard";

import { useSession } from "next-auth/react";

export default function Home() {
  const { data: session } = useSession();

  return (
    <main className="col-span-9 pt-12">
      <section className="flex justify-between flex-col lg:flex-row">
        <ProfileCard />
        <CodeCard />
      </section>
      {session && (
        <section className="save-list-posts mt-12">
          <h2 className="text-2xl font-semibold  text-gray-800 dark:text-white font-primary">Your Saved Posts</h2>
          <p className="text-sm text-black/50">Some of your saved posts</p>
          <hr className="mt-2"></hr>
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 mt-6">
            <PostCard />
            <PostCard />
            <PostCard />
            <PostCard />
            <PostCard />
            <PostCard />
            
          </div>
        </section>

      )}


      <section className="recent-posts mt-12">
        <h2 className="text-2xl font-semibold  text-gray-800 dark:text-white font-primary">Recent Posts</h2>
        <p className="text-sm text-black/50">Most recently added blog posts</p>
        <hr className="mt-2"></hr>
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 mt-6">
          <PostCard />
          <PostCard />
          <PostCard />
          <PostCard />
          <PostCard />
          <PostCard />
        </div>
      </section>

      <section className="top-rated-posts mt-12">
        <h2 className="text-2xl font-semibold  text-gray-800 dark:text-white font-primary">Top Rated Posts</h2>
        <p className="text-sm text-black/50">Most liked blog posts</p>
        <hr className="mt-2"></hr>
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 mt-6">
          <PostCard />
          <PostCard />
          <PostCard />
          <PostCard />
          <PostCard />
          <PostCard />
        </div>
      </section>


      <NewsletterCard />
    </main>

  )
}
