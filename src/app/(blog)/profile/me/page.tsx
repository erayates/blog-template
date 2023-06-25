'use client';
import Link from "next/link";

import CustomBadge from "@/components/commons/badge/customBadge";
import PostCard from "@/components/commons/cards/PostCard";
import UserProfileCommentCard from "@/components/commons/cards/UserProfileCommentCard";

import { useMe } from "@/hooks/useMeQuery";

import { AiFillLike, AiFillMail, AiOutlineComment } from "react-icons/ai";
import { BsWrench, BsFillBookmarkPlusFill } from "react-icons/bs";

import '@/styles/me.css';
import { useSession } from "next-auth/react";


function UserInfo() {
    return (
        <div className="user-info p-4 mb-6 ">
            <div className="user-info-container">
                <img
                    className="user-avatar"
                    src="https://demos.creative-tim.com/soft-ui-flowbite-pro/images/users/jese-leos-2x.png"
                    alt="Jese portrait"
                />
                <div>
                    <h2 className="text-2xl font-bold"></h2>
                    <ul className="mt-2">
                        <li className="user-info-item">
                            <p className="flex items-center">
                                <BsWrench className="mr-2" /> Role
                            </p>
                            <CustomBadge color="blue" text='User' />
                        </li>
                        <li className="user-info-item">
                            <p className="flex items-center">
                                <AiFillMail className="mr-2" /> Email adress
                            </p>
                            <CustomBadge color="blue" text={'userState.data.email'} />
                        </li>
                        <li className="user-info-item">
                            <p className="flex items-center mr-1">
                                <AiFillLike className="mr-2" /> Your Total Liked Posts:
                            </p>
                            <CustomBadge color="blue" text={'userState.data.email'} />
                        </li>
                        <li className="user-info-item">
                            <p className="flex items-center mr-1">
                                <BsFillBookmarkPlusFill className="mr-2" /> Your Total Saved Posts:
                            </p>
                            <CustomBadge color="blue" text={'userState.data.email'} />
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

function PostsViewAll({ type }: { type: string }) {
    return (
        <Link href={`/profile/${type}-posts`} className="view-all">
            <AiOutlineComment className="mr-2" />
            View All {type} Posts
        </Link>
    )
}

function PostsHeader({ type }: { type: string }) {
    return (
        <>
            <h3 className="text-xl font-semibold font-primary ">Your {type} Posts</h3>
            <span className="text-sm text-black/50">Your recently {type} posts</span>
            <hr className="my-5"></hr>
        </>
    )
}


function PostsContent({ type }: { type: string }) {
    return (
        <div className="user-posts mt-10">
            <PostsHeader type={type} />
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-10">
                {
                    // userState.data?.savedPosts?.map((post: Object) => {
                    //     return (
                    //         <PostCard key={post._id} postData={post} userAvatar={userState.data.image} />
                    //     )
                    // })
                }
            </div>
            <PostsViewAll type={type} />
        </div>
    )
}

function UserComments() {
    return (
        <div className="user-comments font-primary col-span-2">
            <h3 className="text-xl font-semibold mb-4">Your Recent Comments</h3>
            <UserProfileCommentCard />
            <UserProfileCommentCard />
        </div>
    )
}

export default function Me() {
    const {data: session} = useSession();
    const { isLoading, error, data: me } = useMe(session?.user.access);
    console.log(session)


    return (
        <main>
            <div className="grid grid-cols-1 lg:grid-cols-3">
                <UserInfo />
                <UserComments />
            </div>

            <PostsContent type="saved" />
            <PostsContent type="liked" />
        </main >

    )
}