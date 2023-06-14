'use client';

import SidebarElements from "./SidebarElements";



export default function Sidebar() {
    return (
        <>
         

            <aside id="default-sidebar" className="hidden lg:block rounded-2xl top-0 z-40 transition-transform sm:translate-x-0 dark:text-white font-primary col-span-3" aria-label="Sidebar">
                <div className="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800 rounded-2xl">

                    <SidebarElements />
                </div>
            </aside>
        </>


    )
}