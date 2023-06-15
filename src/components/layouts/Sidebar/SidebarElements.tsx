import { IoLogoJavascript, IoLogoHtml5, IoLogoCss3, IoLogoNodejs } from 'react-icons/io'
import { SiNextdotjs, SiReact } from 'react-icons/si'
import { GrPersonalComputer } from 'react-icons/gr'
import { MdEngineering } from 'react-icons/md'
import Link from 'next/link'

export default function SidebarElements() {
    return (
        <>
            <h3 className="sidebar-menu-title">Blog Topics</h3>

            <ul className="sidebar-menu-list">
                <li>
                    <Link href="#" className="sidebar-menu-item">
                        <IoLogoHtml5 />
                        <span className="sidebar-menu-item-text">HTML 5</span>
                    </Link>
                </li>
                <li>
                    <Link href="#" className="sidebar-menu-item">
                        <IoLogoCss3 />
                        <span className="sidebar-menu-item-text">CSS</span>
                    </Link>
                </li>
                <li>
                    <Link href="#" className="sidebar-menu-item">
                        <IoLogoJavascript />
                        <span className="sidebar-menu-item-text">Javascript</span>
                    </Link>
                </li>
                <li>
                    <Link href="#" className="sidebar-menu-item">
                        <SiReact />
                        <span className="sidebar-menu-item-text">React</span>
                    </Link>
                </li>
                <li>
                    <Link href="#" className="sidebar-menu-item">
                        <SiNextdotjs />
                        <span className="sidebar-menu-item-text">Next.js</span>
                    </Link>
                </li>
                <li>
                    <Link href="#" className="sidebar-menu-item">
                        <IoLogoNodejs />
                        <span className="sidebar-menu-item-text">Node.js</span>
                    </Link>
                </li>
                <li>
                    <Link href="#" className="sidebar-menu-item">
                        <GrPersonalComputer />
                        <span className="sidebar-menu-item-text">Computer Science</span>
                    </Link>
                </li>
                <li>
                    <Link href="#" className="sidebar-menu-item">
                        <MdEngineering />
                        <span className="sidebar-menu-item-text">Software Engineering</span>
                    </Link>
                </li>
            </ul>
        </>
    )
}