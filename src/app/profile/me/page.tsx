'use client';
import CustomBadge from "@/components/commons/badge/customBadge";
import PostCard from "@/components/commons/cards/PostCard";
import UserProfileCommentCard from "@/components/commons/cards/UserProfileCommentCard";
import { useSession } from "next-auth/react"
import { useRouter } from "next/navigation";
import { AiFillLike, AiFillMail, AiOutlineComment } from "react-icons/ai";
import { BsWrench, BsFillBookmarkPlusFill } from "react-icons/bs";



export default function Me() {
    const { data: session } = useSession();
    const router = useRouter();

    console.log(session);
    return (
        <main className="col-span-9 pt-12 ">
            <div className="grid grid-cols-1 lg:grid-cols-3">
                <div className="user-info p-4 mb-6 ">
                    <div className="flex lg:block sm:space-x-4 xl:space-x-0 ">
                        <img className="mb-2 w-40 h-40 rounded-2xl shadow-lg shadow-gray-300" src="https://demos.creative-tim.com/soft-ui-flowbite-pro/images/users/jese-leos-2x.png" alt="Jese portrait" />
                        <div>
                            <h2 className="text-2xl font-bold">{session && session.user.name}</h2>
                            <ul className="mt-2 ">
                                <li className=" items-center text-md font-normal text-gray-500">
                                    <p className="flex items-center"> <BsWrench className="mr-2" /> Role</p>
                                    <CustomBadge color="blue" text='User' />
                                </li>
                                <li className=" items-center text-md font-normal text-gray-500">
                                    <p className="flex items-center"> <AiFillMail className="mr-2" /> Email adress</p>
                                    <CustomBadge color="blue" text={session?.user?.email} />
                                </li>
                                <li className=" items-center text-md font-normal text-gray-500">
                                    <p className="flex items-center mr-1"> <AiFillMail className="mr-2" /> Your Total Comments:</p>
                                    <CustomBadge color="blue" text="120" />
                                </li>
                                <li className="items-center text-md font-normal text-gray-500">
                                    <p className="flex items-center mr-1"> <AiFillLike className="mr-2" /> Your Total Liked Posts:</p>
                                    <CustomBadge color="blue" text="56" />
                                </li>
                                <li className="items-center text-md font-normal text-gray-500">
                                    <p className="flex items-center mr-1"> <BsFillBookmarkPlusFill className="mr-2" /> Your Total Saved Posts:</p>
                                    <CustomBadge color="blue" text="80" />
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="user-comments font-primary col-span-2">
                    <h3 className="text-xl font-semibold mb-4">Your Recent Comments</h3>
                    <UserProfileCommentCard />
                    <UserProfileCommentCard />
                </div>
            </div>
            <div className="user-saved-posts mt-10">
                <h3 className="text-xl font-semibold font-primary ">Your Saved Posts</h3>
                <span className="text-sm text-black/50">Your recently saved posts</span>
                <hr className="my-5"></hr>
                <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-10">
                    <PostCard />
                    <PostCard />
                    <PostCard />
                </div>
                <p className="flex justify-end items-center text-sm font-medium text-blue-600 dark:text-blue-400 hover:underline my-5 cursor-pointer">
                    <AiOutlineComment className="mr-2" />
                    View All Saved Posts
                </p>
            </div>

            <div className="user-liked-posts mt-10">
                <h3 className="text-xl font-semibold font-primary ">Your Liked Posts</h3>
                <span className="text-sm text-black/50">Your recently liked posts</span>
                <hr className="my-5"></hr>
                <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-10">
                    <PostCard />
                    <PostCard />
                    <PostCard />
                </div>
                <p className="flex justify-end items-center text-sm font-medium text-blue-600 dark:text-blue-400 hover:underline my-5 cursor-pointer">
                    <AiOutlineComment className="mr-2" />
                    View All Liked Posts
                </p>
            </div>
        </main >
    )
}