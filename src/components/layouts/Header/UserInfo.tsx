'use client';

import { useSession } from "next-auth/react";
import LoginButton from "@/components/commons/buttons/LoginButton";
import LogoutButton from "@/components/commons/buttons/LogoutButton";
import { useEffect, useState } from "react";
import Link from "next/link";
import { BiBookmark, BiHeart, BiUserCircle } from "react-icons/bi";
import SwitchTheme from "@/components/commons/buttons/SwitchTheme";

export default function UserInfo() {
    const { data: session, status } = useSession();
    const [isDropdownMenuOpen, setIsDropdownMenuOpen] = useState<boolean>(false);

    const handleDropdownMenu = () => {
        setIsDropdownMenuOpen(!isDropdownMenuOpen);
    }



    return (
        <>
            {status === 'authenticated' && session?.user ? (
                <div className="site-user flex flex-col lg:flex-row items-center mb-5 sm:mb-0 relative cursor-pointer" onClick={() => handleDropdownMenu()}>
                    <div className="site-user-info flex  ml-4 lg:mr-8 dark:text-white ">
                        <img className="site-user-avatar rounded-full" src={session.user.image || ''} alt={session.user.name || ''} width={50} height={50} />

                        <div className="site-user-name flex flex-col ml-2">
                            <span className="site-user-username font-primary font-semibold">{session.user.name}</span>
                            <span className="site-user-email font-primary text-[14px]">{session.user.email}</span>
                        </div>

                    </div>
                    {isDropdownMenuOpen && (
                        <div className="z-20 w-full shadow-lg p-4 font-primary  active:translate-x-4 space-y-4 sm:absolute sm:top-[55px] bg-white rounded-2xl">
                            <Link href={`profile/${session?.user.name}`} className="flex items-center">
                                <BiUserCircle className="inline text-[20px] mr-2" /> Profile
                            </Link>
                            <Link href={'profile/saved-posts'} className="flex items-center">
                                <BiBookmark className="inline text-[20px] mr-2" /> Saved Posts
                            </Link>
                            <Link href={'profile/liked-posts'} className="flex items-center">
                                <BiHeart className="inline text-[20px] mr-2" /> Liked Posts
                            </Link>
                            <div className="hidden sm:block lg:hidden space-y-4 ">
                                <SwitchTheme />
                                <LogoutButton />
                            </div>
                        </div>
                    )}

                    <div className="hidden lg:block">
                        <LogoutButton />
                    </div>
                </div>
            ) : (
                <div className="site-login">
                    <LoginButton />
                </div>
            )

            }
        </>
    )
}