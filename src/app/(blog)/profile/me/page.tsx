"use client";

import CustomBadge from "@/components/commons/badge/customBadge";
import PostCard from "@/components/commons/cards/PostCard";
import UserProfileCommentCard from "@/components/commons/cards/UserProfileCommentCard";
import { useSession } from "next-auth/react"
import Link from "next/link";
import { useContext, useEffect } from "react";
import { AiFillLike, AiFillMail, AiOutlineComment } from "react-icons/ai";
import { BsWrench, BsFillBookmarkPlusFill } from "react-icons/bs";


async function getData({ email }: { email: string | null | undefined }): Promise<Object> {
    const res = await fetch(`/api/users/me?email=${email}`, {
        cache: 'no-store',
    });
    if (!res.ok) throw new Error('Something went wrong');

    const data = await res.json();
    return data;
}

function UserInfo() {

    if (!userState.isLoading) {
        return (
            <div className="user-info p-4 mb-6 ">
                <div className="flex lg:block sm:space-x-4 xl:space-x-0 ">
                    <img className="mb-2 w-40 h-40 rounded-2xl shadow-lg shadow-gray-300" src="https://demos.creative-tim.com/soft-ui-flowbite-pro/images/users/jese-leos-2x.png" alt="Jese portrait" />
                    <div>
                        <h2 className="text-2xl font-bold">{userState.data.username}</h2>
                        <ul className="mt-2 ">
                            <li className=" items-center text-md font-normal text-gray-500">
                                <p className="flex items-center"> <BsWrench className="mr-2" /> Role</p>
                                <CustomBadge color="blue" text='User' />
                            </li>
                            <li className=" items-center text-md font-normal text-gray-500">
                                <p className="flex items-center"> <AiFillMail className="mr-2" /> Email adress</p>
                                <CustomBadge color="blue" text={userState.data.email} />
                            </li>
                            <li className="items-center text-md font-normal text-gray-500">
                                <p className="flex items-center mr-1"> <AiFillLike className="mr-2" /> Your Total Liked Posts:</p>
                                <CustomBadge color="blue" text={userState.data?.likedPosts?.length} />
                            </li>
                            <li className="items-center text-md font-normal text-gray-500">
                                <p className="flex items-center mr-1"> <BsFillBookmarkPlusFill className="mr-2" /> Your Total Saved Posts:</p>
                                <CustomBadge color="blue" text={userState.data?.savedPosts?.length} />
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <h3 className="text-center">Loading...</h3>
    )
}

function UserLikedPosts() {
    return (
        <div className="user-saved-posts mt-10">
            <h3 className="text-xl font-semibold font-primary ">Your Liked Posts</h3>
            <span className="text-sm text-black/50">Your recently liked posts</span>
            <hr className="my-5"></hr>
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-10">
                {
                    userState.data?.likedPosts?.map((post: Object) => {
                        return (
                            <PostCard key={post._id} postData={post} userAvatar={userState.data.image} />
                        )
                    })
                }
            </div>
            <Link href={'/profile/saved-posts'} className="flex justify-end items-center text-sm font-medium text-blue-600 dark:text-blue-400 hover:underline my-5 cursor-pointer">
                <AiOutlineComment className="mr-2" />
                View All Liked Posts
            </Link>
        </div>
    )

}

function UserSavedPosts() {
    return (
        <div className="user-saved-posts mt-10">
            <h3 className="text-xl font-semibold font-primary ">Your Saved Posts</h3>
            <span className="text-sm text-black/50">Your recently saved posts</span>
            <hr className="my-5"></hr>
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-10">
                {
                    userState.data?.savedPosts?.map((post: Object) => {
                        return (
                            <PostCard key={post._id} postData={post} userAvatar={userState.data.image} />
                        )
                    })
                }
            </div>
            <Link href={'/profile/saved-posts'} className="flex justify-end items-center text-sm font-medium text-blue-600 dark:text-blue-400 hover:underline my-5 cursor-pointer">
                <AiOutlineComment className="mr-2" />
                View All Saved Posts
            </Link>
        </div>
    )
}

export default function Me() {

    return (
        <main className="col-span-9 pt-12 ">
            <div className="grid grid-cols-1 lg:grid-cols-3">
                <UserInfo />

                <div className="user-comments font-primary col-span-2">
                    <h3 className="text-xl font-semibold mb-4">Your Recent Comments</h3>
                    <UserProfileCommentCard />
                    <UserProfileCommentCard />
                </div>
            </div>

            <UserLikedPosts />
            <UserSavedPosts />

        </main >

    )
}