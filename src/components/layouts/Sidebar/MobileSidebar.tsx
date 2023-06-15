'use client';
import '@/styles/sidebar.css';
import { useState } from "react";
import { CgClose, CgMenuGridR } from "react-icons/cg";
import SidebarElements from "./SidebarElements";



export default function MobileSidebar() {
    const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState<boolean>(false);

    const handleMobileSidebarToggle = () => setIsMobileSidebarOpen(!isMobileSidebarOpen);
    const handleCloseMobileSideBar = () => setIsMobileSidebarOpen(false);

    return (
        <>
            <div
                className='mobile-sidebar-button '
                onClick={() => handleMobileSidebarToggle()}
            >
                <CgMenuGridR />
            </div>
            {
                isMobileSidebarOpen && (
                    <aside className='mobile-sidebar' >
                        <div className='mobile-sidebar-close' onClick={() => handleCloseMobileSideBar()}>
                            <CgClose />
                        </div>
                        <SidebarElements />
                    </aside>
                )
            }
        </>
    )
}