import '@/styles/sidebar.css';
import SidebarElements from "./SidebarElements";

export default function Sidebar() {
    return (
        <>
            <aside className="sidebar">
                <div className="sidebar-menu">
                    <SidebarElements />
                </div>
            </aside>
        </>
    )
}