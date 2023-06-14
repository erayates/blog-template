'use client';
import { useState } from "react";
import { CgClose, CgMenuGridR } from "react-icons/cg";
import Sidebar from "./Sidebar";
import Link from "next/link";
import SidebarElements from "./SidebarElements";



export default function MobileSidebar() {
    const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState<boolean>(false);

    const handleMobileSidebarToggle = () => setIsMobileSidebarOpen(!isMobileSidebarOpen);
    const handleCloseMobileSideBar = () => setIsMobileSidebarOpen(false);

    return (
        <>
            <div
                className='mobile-sidebar-button lg:hidden flex justify-end items-center text-[24px] bg-[#F9F9F9] col-span-12 rounded-2xl p-4 mb-6 cursor-pointer'
                onClick={() => handleMobileSidebarToggle()}
            >
                <CgMenuGridR />
            </div>
            {
                isMobileSidebarOpen && (
                    <aside className='mobile-sidebar lg:hidden fixed top-0 left-0 w-2/3 md:w-1/2 h-full bg-[#F9F9F9] dark:bg-[#0e0e0e] z-20 shadow-2xl' >
                        <div className='flex justify-end items-center text-[24px] bg-[#F9F9F9] col-span-12 rounded-2xl p-4 mb-6 cursor-pointer' onClick={() => handleCloseMobileSideBar()}>
                            <CgClose />
                        </div>
                        <SidebarElements />
                    </aside>
                )
            }
        </>
    )
}