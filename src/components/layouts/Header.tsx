'use client';
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import Image from "next/image";
import { CiSearch } from 'react-icons/ci';
import LogoutButton from "../commons/buttons/LogoutButton";
import SwitchTheme from "../commons/buttons/SwitchTheme";
import LoginButton from "../commons/buttons/LoginButton";

export default function Header() {
    const { data: session, status } = useSession();

    return (
        <header className="py-6 flex items-center justify-between my-8 rounded-2xl col-span-12">
            <div className="site-logo dark:text-white w-1/3">
                <h1 className="site-title text-[42px] font-primary leading-10">erayates.dev</h1>
                <span className="site-subtitle text-[20px] font-secondary">DEV BLOG</span>
            </div>
 
            <div className="site-header-content flex items-center justify-end w-2/3">
                <div className="site-search w-1/3 relative">
                    <input type="text" placeholder="Search..." className="site-search-input shadow-lg outline-none py-2 px-6 rounded-full font-primary text-[14px] w-full" />
                    <CiSearch className="absolute right-[8px] top-[8px] text-[20px] text-[#7d7d7d]" />
                </div>
                <SwitchTheme />
                {status === 'authenticated' && session.user ? (
                    <div className="site-user flex items-center">
                        <img className="site-user-avatar rounded-full" src={session.user.image} alt={session.user.name} width={50} height={50} />
                        <div className="site-user-info flex flex-col ml-4 mr-8 dark:text-white">
                            <span className="site-user-username font-primary font-semibold">{session.user.name}</span>
                            <span className="site-user-email font-primary text-[14px]">{session.user.email}</span>
                        </div>
                        <LogoutButton />
                    </div>
                ) : (
                    <div className="site-login">
                        <LoginButton />
                    </div>
                )

                }

            </div>

        </header>
    );
}