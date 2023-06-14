'use client';
import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";

import { BiMenuAltRight } from "react-icons/bi"
import SwitchTheme from "@/components/commons/buttons/SwitchTheme"
import LoginButton from "@/components/commons/buttons/LoginButton"
import UserInfo from "./UserInfo";
import LogoutButton from "@/components/commons/buttons/LogoutButton";

export default function MobileMenu() {
    const { data: session, status } = useSession();

    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

    const handleToggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    }


    return (
        <>
            <div className="site-header-content-mobile flex items-center justify-end w-2/3 sm:hidden relative " onClick={() => handleToggleMenu()}>
                <div className="mobile-menu-icon text-[30px] cursor-pointer">
                    <BiMenuAltRight />
                </div>
            </div>
            {isMenuOpen && (
                <div className="mobile-menu-content absolute flex-col top-[100px] shadow-xl z-10 inline-flex justify-evenly items-end left-0 w-full sm:hidden bg-[#F9F9F9] dark:bg-gray-800 p-4 rounded-b-2xl transition-transform">
                    {session && <UserInfo />}
                    <div className="flex justify-end space-x-4 w-full">
                        <SwitchTheme />
                        {!session ? <LoginButton /> : <LogoutButton />}
                    </div>
                </div>
            )}


        </>
    )
}