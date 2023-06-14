'use client';
import { useSession } from "next-auth/react";
import LogoutButton from "../../commons/buttons/LogoutButton";
import SwitchTheme from "../../commons/buttons/SwitchTheme";
import LoginButton from "../../commons/buttons/LoginButton";
import MobileMenu from "./MobileMenu";
import UserInfo from "./UserInfo";

export default function Header() {
    const { data: session, status } = useSession();

    return (
        <header className="py-6 flex flex-row items-center justify-between my-8 rounded-2xl col-span-12 relative">
            <div className="site-logo dark:text-white ">
                <h1 className="site-title text-[32px] lg:text-[42px] font-primary leading-10">erayates.dev</h1>
                <span className="site-subtitle text-[14px] lg:text-[20px] font-secondary">DEV BLOG</span>
            </div>

            <div className="site-header-content  items-center justify-end w-2/3 hidden sm:flex space-x-4">
                <div className="hidden lg:block">
                    <SwitchTheme />
                </div>
               
                <UserInfo />
            </div>
            <MobileMenu />

        </header>
    );
}