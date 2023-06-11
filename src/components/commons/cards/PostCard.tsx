import Link from "next/link";
import CustomBadge from "../badge/customBadge";
import PostCardButtons from "../buttons/PostCardButtons";

export default function PostCard(){
    return (
        <div className="flex flex-col rounded-lg shadow-lg overflow-hidden relative">
                <div className="flex-shrink-0">
                    <img className="h-48 w-full object-cover" src="https://placehold.co/600x400.png" alt="Blog Post" />
                </div>
                <div className="flex-1 bg-white dark:bg-gray-800 p-6 flex flex-col justify-between">
                    
                    <Link href="#" className="block mt-2">
                        <p className="text-xl font-semibold text-gray-900 dark:text-white font-primary">Boost your conversion rate</p>
                        <p className="mt-3 text-base text-gray-500 dark:text-gray-400">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto accusantium praesentium eius, ut atque fuga culpa, similique sequi cum eos quis dolorum.
                        </p>
                    </Link>
                    <div className="mt-6 flex items-center">
                        <div className="flex-shrink-0">
                            <a href="#">
                                <span className="sr-only">Roel Aufderehar</span>
                                <img className="h-10 w-10 rounded-full" src="https://i.pravatar.cc/300" alt="" />
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
                    <div className="flex flex-wrap mt-5">
                        <CustomBadge color='yellow' text='Javascript' />
                        <CustomBadge color='blue' text='Web Development' />
                    </div>
                    <PostCardButtons />
                    
                </div>
            </div>
    )
}