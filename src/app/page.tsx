import CodeCard from "@/components/commons/cards/codeCard";
import ProfileCard from "@/components/commons/cards/profileCard";

export default function Home() {
  return (
    <main className="col-span-9 pt-12">
      <section className="flex justify-between flex-col lg:flex-row">
        <ProfileCard />
        <CodeCard />
      </section>
      <section className="recent-posts mt-12">
        <h2 className="text-2xl font-bold text-gray-800 dark:text-white font-primary">Recent Posts</h2>
        <hr></hr>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-6">
          <div className="flex flex-col rounded-lg shadow-lg overflow-hidden">
            <div className="flex-shrink-0">
              <img className="h-48 w-full object-cover" src="/docs/images/posts/post-1.jpg" alt="Blog Post" />
            </div>
            <div className="flex-1 bg-white dark:bg-gray-800 p-6 flex flex-col justify-between">
              <div className="flex-1">
                <p className="text-sm font-medium text-indigo-600 dark:text-indigo-400">
                  <a href="#" className="hover:underline">
                    Article
                  </a>
                </p>
                <a href="#" className="block mt-2">
                  <p className="text-xl font-semibold text-gray-900 dark:text-white font-primary">Boost your conversion rate</p>
                  <p className="mt-3 text-base text-gray-500 dark:text-gray-400">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto accusantium praesentium eius, ut atque fuga culpa, similique sequi cum eos quis dolorum.
                  </p>
                </a>
              </div>
              <div className="mt-6 flex items-center">
                <div className="flex-shrink-0">
                  <a href="#">
                    <span className="sr-only">Roel Aufderehar</span>
                    <img className="h-10 w-10 rounded-full" src="/docs/images/people/person-1.jpg" alt="" />
                  </a>
                </div>
                <div className="ml-3">
                  <p className="text-sm font-medium text-gray-900 dark:text-white font-primary">
                    <a href="#" className="hover:underline">
                      Roel Aufderehar
                    </a>
                  </p>
                  <div className="flex space-x-1 text-sm text-gray-500 dark:text-gray-400">
                    <time dateTime="2020-03-16">Mar 16, 2020</time>
                    <span aria-hidden="true">&middot;</span>
                    <span>6 min read</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </section>
    </main>
  )
}
