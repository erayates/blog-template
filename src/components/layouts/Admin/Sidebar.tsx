'use client';

import Link from "next/link";
import { useState } from "react";
import { AiOutlineComment, AiOutlinePieChart, AiOutlineUser } from "react-icons/ai";
import { TbWritingSign } from 'react-icons/tb'
import { CiSettings } from 'react-icons/ci'


export default function Sidebar() {


    return (
        <>
            <aside id="sidebar" className="fixed top-0 left-0 font-primary z-20 md:flex flex-col flex-shrink-0 hidden w-64 h-full pt-16 font-normal duration-75 lg:flex transition-width" aria-label="Sidebar">
                <div className="relative flex flex-col flex-1 min-h-0 pt-0 bg-white border-r border-gray-200 dark:bg-gray-800 dark:border-gray-700">
                    <div className="flex flex-col flex-1 pt-5 pb-4 overflow-y-auto">
                        <div className="flex-1 px-3 space-y-1 bg-white divide-y divide-gray-200 dark:bg-gray-800 dark:divide-gray-700">
                            <ul className="pb-2 space-y-2">
                                <li>
                                    <Link href={'/dashboard'} className="flex items-center p-2 text-base text-gray-900 rounded-lg hover:bg-gray-100 group dark:text-gray-200 dark:hover:bg-gray-700">
                                        <AiOutlinePieChart className="text-[24px]" />
                                        <span className="ml-3" >Dashboard</span>
                                    </Link>
                                </li>
                                <li >
                                    <Link href={'/dashboard/posts'} className="flex items-center w-full p-2 text-base text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-700" >
                                        <TbWritingSign className="text-[24px]" />
                                        <span className="flex-1 ml-3 text-left whitespace-nowrap">Posts</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link href={'/dashboard/users'} className="flex items-center p-2 text-base text-gray-900 rounded-lg hover:bg-gray-100 group dark:text-gray-200 dark:hover:bg-gray-700 ">
                                        <AiOutlineUser className="text-[24px]" />
                                        <span className="ml-3" >Users</span>
                                    </Link>
                                </li>
                                <li >
                                    <Link href={'/dashboard/comments'} type="button" className="flex items-center w-full p-2 text-base text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-700" aria-controls="dropdown-pages" data-collapse-toggle="dropdown-pages">
                                        <AiOutlineComment className="text-[24px]" />
                                        <span className="flex-1 ml-3 text-left whitespace-nowrap" sidebar-toggle-item="">Comments</span>
                                    </Link>

                                </li>
                                <li>
                                    <Link href={'/dashboard/settings'} className="flex items-center w-full p-2 text-base text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-700" aria-controls="dropdown-auth" data-collapse-toggle="dropdown-auth">
                                        <CiSettings className="text-[24px]" />
                                        <span className="flex-1 ml-3 text-left whitespace-nowrap" sidebar-toggle-item="">Settings</span>
                                    </Link>
                                
                                </li>
                              
                            </ul>
                        </div>
                    </div>
                </div>
            </aside>

        </>
    )
}