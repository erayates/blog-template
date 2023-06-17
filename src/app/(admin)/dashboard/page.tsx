'use client';

import UserProfileCommentCard from "@/components/commons/cards/UserProfileCommentCard";
import Breadcrumb from "@/components/layouts/Breadcrumb";
import { AiOutlineComment, AiOutlineUser } from "react-icons/ai";
import { TbWritingSign } from 'react-icons/tb';

export default function page() {
    return (
        <main className="ml-64 top-4 p-16 relative z-50 grid grid-cols-2 gap-16">
            <section className="col-span-2">
                <Breadcrumb />
                <h1 className="text-[48px] font-primary font-semibold">Dashboard</h1>

            </section>
            <section className="total-info font-primary">
                <h2 className="text-2xl font-semibold  text-gray-800 dark:text-white font-primary">
                    General
                </h2>
                <p className="text-sm text-black/50">Total numbers of posts,comments and users</p>
                <hr className="mt-2"></hr>
                <div className="grid grid-cols-2 gap-4 my-5 ">
                    <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg px-4 py-6 ">
                        <div className="flex items-center ">
                            <div className="flex items-center justify-center w-12 h-12 bg-yellow-200 rounded-full dark:bg-gray-700">
                                <AiOutlineUser className="text-yellow-600 text-[20px]" />
                            </div>
                            <div className="flex flex-col ml-5">
                                <span className="text-xs font-medium uppercase dark:text-gray-400">Total Users</span>
                                <span className="text-xl font-bold dark:text-gray-50">86</span>
                            </div>

                        </div>
                    </div>
                    <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg px-4 py-6">
                        <div className="flex items-center ">
                            <div className="flex items-center justify-center w-12 h-12 bg-red-200 rounded-full dark:bg-gray-700">
                                <AiOutlineComment className="text-red-600 text-[20px]" />
                            </div>
                            <div className="flex flex-col ml-5">
                                <span className="text-xs font-medium uppercase dark:text-gray-400">Total Comments</span>
                                <span className="text-xl font-bold dark:text-gray-50">2,456</span>
                            </div>
                        </div>
                    </div>
                    <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg px-4 py-6">
                        <div className="flex items-center ">
                            <div className="flex items-center justify-center w-12 h-12 bg-blue-200 rounded-full dark:bg-gray-700">
                                <TbWritingSign className="text-blue-600 text-[20px]" />
                            </div>
                            <div className="flex flex-col ml-5">
                                <span className="text-xs font-medium uppercase dark:text-gray-400">Total Posts</span>
                                <span className="text-xl font-bold dark:text-gray-50">2,456</span>
                            </div>
                        </div>
                    </div>
                    <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg px-4 py-6">
                        <div className="flex items-center ">
                            <div className="flex items-center justify-center w-12 h-12 bg-blue-200 rounded-full dark:bg-gray-700">
                                <TbWritingSign className="text-blue-600 text-[20px]" />
                            </div>
                            <div className="flex flex-col ml-5">
                                <span className="text-xs font-medium uppercase dark:text-gray-400">Total Posts</span>
                                <span className="text-xl font-bold dark:text-gray-50">2,456</span>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
            <section className="recently-users grid-span-6">
                <h2 className="text-2xl font-semibold  text-gray-800 dark:text-white font-primary">
                    Recently Users
                </h2>
                <p className="text-sm text-black/50">Most recently signed up users</p>
                <hr className="mt-2"></hr>

                <div className=" dark:text-gray-100 font-primary">
                    <div className="overflow-x-auto">
                        <table className="min-w-full text-xs">
                            <colgroup>
                                <col />
                                <col />
                                <col />
                                <col />
                                <col className="w-24" />
                            </colgroup>
                            <thead className="dark:bg-gray-700">
                                <tr className="text-left">
                                    <th className="p-3 text-center">Avatar</th>
                                    <th className="p-3">Name</th>
                                    <th className="p-3">Username</th>
                                    <th className="p-3">E-mail</th>
                                    <th className="p-3">Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="border-b border-opacity-20 dark:border-gray-700 dark:bg-gray-900">
                                    <td className="p-3 flex justify-center">
                                        <img src="https://i.pravatar.cc/200" alt="" className="rounded-full shadow-lg" height={40} width={40} />
                                    </td>
                                    <td className="p-3">
                                        <p>Microsoft Corporation</p>
                                    </td>
                                    <td className="p-3">
                                        <p>14 Jan 2022</p>
                                        <p className="dark:text-gray-400">Friday</p>
                                    </td>
                                    <td className="p-3">
                                        <p>01 Feb 2022</p>
                                        <p className="dark:text-gray-400">Tuesday</p>
                                    </td>

                                    <td className="p-3 text-right">
                                        <span className="px-3 py-1 font-semibold rounded-md dark:bg-violet-400 dark:text-gray-900">
                                            <span>Pending</span>
                                        </span>
                                    </td>
                                </tr>
                                <tr className="border-b border-opacity-20 dark:border-gray-700 dark:bg-gray-900">
                                    <td className="p-3 flex justify-center">
                                        <img src="https://i.pravatar.cc/200" alt="" className="rounded-full shadow-lg" height={40} width={40} />
                                    </td>
                                    <td className="p-3">
                                        <p>Tesla Inc.</p>
                                    </td>
                                    <td className="p-3">
                                        <p>14 Jan 2022</p>
                                        <p className="dark:text-gray-400">Friday</p>
                                    </td>
                                    <td className="p-3">
                                        <p>01 Feb 2022</p>
                                        <p className="dark:text-gray-400">Tuesday</p>
                                    </td>

                                    <td className="p-3 text-center">
                                        <span className="py-1 font-semibold rounded-md dark:bg-violet-400 dark:text-gray-900">
                                            <span>Pending</span>
                                        </span>
                                    </td>
                                </tr>
                                <tr className="border-b border-opacity-20 dark:border-gray-700 dark:bg-gray-900">
                                    <td className="p-3 flex justify-center">
                                        <img src="https://i.pravatar.cc/200" alt="" className="rounded-full shadow-lg" height={40} width={40} />
                                    </td>
                                    <td className="p-3">
                                        <p>Coca Cola co.</p>
                                    </td>
                                    <td className="p-3">
                                        <p>14 Jan 2022</p>
                                        <p className="dark:text-gray-400">Friday</p>
                                    </td>
                                    <td className="p-3">
                                        <p>01 Feb 2022</p>
                                        <p className="dark:text-gray-400">Tuesday</p>
                                    </td>

                                    <td className="p-3 text-right">
                                        <span className="px-3 py-1 font-semibold rounded-md dark:bg-violet-400 dark:text-gray-900">
                                            <span>Pending</span>
                                        </span>
                                    </td>
                                </tr>
                                <tr className="border-b border-opacity-20 dark:border-gray-700 dark:bg-gray-900">
                                    <td className="p-3 flex justify-center">
                                        <img src="https://i.pravatar.cc/200" alt="" className="rounded-full shadow-lg" height={40} width={40} />
                                    </td>
                                    <td className="p-3">
                                        <p>Nvidia Corporation</p>
                                    </td>
                                    <td className="p-3">
                                        <p>14 Jan 2022</p>
                                        <p className="dark:text-gray-400">Friday</p>
                                    </td>
                                    <td className="p-3">
                                        <p>01 Feb 2022</p>
                                        <p className="dark:text-gray-400">Tuesday</p>
                                    </td>

                                    <td className="p-3 text-right">
                                        <span className="px-3 py-1 font-semibold rounded-md dark:bg-violet-400 dark:text-gray-900">
                                            <span>Pending</span>
                                        </span>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

            </section>
            <section className="recently-users grid-span-6">
                <h2 className="text-2xl font-semibold  text-gray-800 dark:text-white font-primary">
                    Recently Posts
                </h2>
                <p className="text-sm text-black/50">Most recently written posts</p>
                <hr className="mt-2"></hr>
                <div className="dark:bg-gray-800 dark:text-gray-50 shadow-lg my-5" >
                    <div className="container grid grid-cols-12 mx-auto dark:bg-gray-900">
                        <div className="bg-no-repeat bg-cover dark:bg-gray-700 col-span-full lg:col-span-4" style={{ backgroundImage: "url('https://source.unsplash.com/random/640x480')", backgroundPosition: "center center", backgroundBlendMode: "multiply", backgroundSize: "cover" }}></div>
                        <div className="flex flex-col p-6 col-span-full row-span-full lg:col-span-8 lg:p-10">
                            <div className="flex justify-start">
                                <span className="px-2 py-1 text-xs rounded-full dark:bg-violet-400 dark:text-gray-900">Label</span>
                            </div>
                            <h2 className="text-3xl font-semibold">Lorem ipsum dolor sit.</h2>
                            <p className="flex-1 pt-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, reprehenderit adipisci tempore voluptas laborum quod.</p>
                            <a rel="noopener noreferrer" href="#" className="inline-flex items-center pt-2 pb-6 space-x-2 text-sm dark:text-violet-400">
                                <span>Read more</span>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                                    <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
                                </svg>
                            </a>
                            <div className="flex items-center justify-between pt-2">
                                <div className="flex space-x-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 dark:text-gray-400">
                                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z" clipRule="evenodd"></path>
                                    </svg>
                                    <span className="self-center text-sm">by Leroy Jenkins</span>
                                </div>
                                <span className="text-xs">3 min read</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="dark:bg-gray-800 dark:text-gray-50 shadow-lg my-5" >
                    <div className="container grid grid-cols-12 mx-auto dark:bg-gray-900">
                        <div className="bg-no-repeat bg-cover dark:bg-gray-700 col-span-full lg:col-span-4" style={{ backgroundImage: "url('https://source.unsplash.com/random/640x480')", backgroundPosition: "center center", backgroundBlendMode: "multiply", backgroundSize: "cover" }}></div>
                        <div className="flex flex-col p-6 col-span-full row-span-full lg:col-span-8 lg:p-10">
                            <div className="flex justify-start">
                                <span className="px-2 py-1 text-xs rounded-full dark:bg-violet-400 dark:text-gray-900">Label</span>
                            </div>
                            <h2 className="text-3xl font-semibold">Lorem ipsum dolor sit.</h2>
                            <p className="flex-1 pt-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, reprehenderit adipisci tempore voluptas laborum quod.</p>
                            <a rel="noopener noreferrer" href="#" className="inline-flex items-center pt-2 pb-6 space-x-2 text-sm dark:text-violet-400">
                                <span>Read more</span>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                                    <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
                                </svg>
                            </a>
                            <div className="flex items-center justify-between pt-2">
                                <div className="flex space-x-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 dark:text-gray-400">
                                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z" clipRule="evenodd"></path>
                                    </svg>
                                    <span className="self-center text-sm">by Leroy Jenkins</span>
                                </div>
                                <span className="text-xs">3 min read</span>
                            </div>
                        </div>
                    </div>
                </div>

            </section>
            <section className="recently-users grid-span-6">
                <h2 className="text-2xl font-semibold  text-gray-800 dark:text-white font-primary">
                    Recently Comments
                </h2>
                <p className="text-sm text-black/50">Most recently posted comments</p>
                <hr className="mt-2"></hr>
                <UserProfileCommentCard />
                <UserProfileCommentCard />
                <UserProfileCommentCard />
            </section>
        </main>
    )
}