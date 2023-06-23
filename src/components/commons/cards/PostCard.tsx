import Link from "next/link";
import CustomBadge from "../badge/customBadge";
import PostCardButtons from "../buttons/PostCardButtons";
import dayjs from "dayjs";
import { PostType } from "@/types";


export default function PostCard({ post }: { post: PostType }) {
    return (
        post && (
            <div className="flex flex-col rounded-lg shadow-lg overflow-hidden relative">
                <div className="flex-shrink-0">
                    <img className="h-48 w-full object-cover" src={post.image} alt="Blog Post" />
                </div>
                <div className="flex-1 bg-white dark:bg-gray-800 p-6 flex flex-col justify-between">
                    <Link href="#" className="block mt-2">
                        <p className="text-xl font-semibold text-gray-900 dark:text-white font-primary">{post.title}</p>
                        <p className="mt-3 text-gray-500 dark:text-gray-400 font-secondary font-light text-sm">
                            {post.content}
                        </p>
                    </Link>
                    <div className="mt-6 flex items-center">
                        <div className="w-full">
                            <div className="flex items-center">
                                <img className="h-10 w-10 rounded-full" src={post.author.image} alt="Author" />
                                <p className="text-sm font-medium text-gray-900 dark:text-white font-primary ml-3">
                                    {post.author.username}

                                </p>
                            </div>
                            <div className="flex space-x-2 w-full  text-sm text-gray-500 dark:text-gray-400 mt-2">
                                <time dateTime="2020-03-16">{dayjs(post.createdAt).format('MMM DD, YYYY')}</time>
                                <span aria-hidden="true">·</span>
                                <span>6 min read</span>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-wrap mt-5">
                        {post.tags.map((tag: string) => {
                            return (
                                <CustomBadge key={tag} color="blue" text={tag} />
                            )
                        })}
                    </div>
                    <PostCardButtons />

                </div>
            </div>
        )
    )
}