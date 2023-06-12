import Link from "next/link";
import { AiOutlineComment } from "react-icons/ai";

export default function UserProfileCommentCard() {
    return (
        <div className="p-6 mb-6 text-base bg-white rounded-lg dark:bg-gray-900">
            <div className="flex justify-between items-center mb-2">
                <div className="flex items-center">
                    <p className="inline-flex items-center mr-3 text-sm text-gray-900 dark:text-white"><img
                        className="mr-2 w-6 h-6 rounded-full"
                        src="https://flowbite.com/docs/images/people/profile-picture-2.jpg"
                        alt="Michael Gough" />Michael Gough</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                        Feb. 8, 2022
                    </p>
                </div>
            </div>
            <p className="text-gray-500 dark:text-gray-400">Very straight-to-point article. Really worth time reading. Thank you! But tools are just the
                instruments for the UX designers. The knowledge of the design tools are as important as the
                creation of the design strategy.
            </p>
            <Link href="/post/1">
                <span className="inline-flex items-center mt-4 text-sm font-medium text-blue-600 dark:text-blue-400 hover:underline">
                    <AiOutlineComment className="mr-2" />
                    View Post
                </span>
            </Link>
        </div>
    )
} 