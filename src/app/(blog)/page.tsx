
import CodeCard from "@/components/commons/cards/CodeCard";
import NewsletterCard from "@/components/commons/cards/NewsletterCard";
import PostCard from "@/components/commons/cards/PostCard";
import ProfileCard from "@/components/commons/cards/ProfileCard";

import { useSession } from "next-auth/react";

export default function Home() {

  return (
    <main className="pt-12">
      <section>
        <div className="site-search relative w-full mb-10">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
          </div>
          <input type="search" id="default-search" className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 outline-none" placeholder="Search posts..." required />
          <button type="submit" className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>
        </div>
      </section>
      <section className="flex justify-between flex-col lg:flex-row">
        <ProfileCard />
        <CodeCard />
      </section>
      {/* {session && (
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

      )} */}


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
