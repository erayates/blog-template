import { IoLogoJavascript, IoLogoHtml5, IoLogoCss3, IoLogoNodejs } from 'react-icons/io'
import { SiNextdotjs, SiReact } from 'react-icons/si'
import { GrPersonalComputer } from 'react-icons/gr'
import { MdEngineering } from 'react-icons/md'

export default function SidebarElements() {
    return (
        <>
            <h3 className="text-2xl font-medium my-3 lg:text-left text-center pl-2">Blog Topics</h3>
            
            <ul className="space-y-2 font-medium flex flex-col lg:block items-center">
                <li>
                    <a href="#" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                        <IoLogoHtml5 />
                        <span className="flex-1 ml-3 whitespace-nowrap">HTML 5</span>
                    </a>
                </li>
                <li>
                    <a href="#" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                        <IoLogoCss3 />
                        <span className="flex-1 ml-3 whitespace-nowrap">CSS</span>
                    </a>
                </li>
                <li>
                    <a href="#" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                        <IoLogoJavascript />
                        <span className="flex-1 ml-3 whitespace-nowrap">Javascript</span>
                    </a>
                </li>
                <li>
                    <a href="#" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                        <SiReact />
                        <span className="flex-1 ml-3 whitespace-nowrap">React</span>
                    </a>
                </li>
                <li>
                    <a href="#" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                        <SiNextdotjs />
                        <span className="flex-1 ml-3 whitespace-nowrap">Next.js</span>
                    </a>
                </li>
                <li>
                    <a href="#" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                        <IoLogoNodejs />
                        <span className="flex-1 ml-3 whitespace-nowrap">Node.js</span>
                    </a>
                </li>
                <li>
                    <a href="#" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                        <GrPersonalComputer />
                        <span className="flex-1 ml-3 break-normal">Computer Science</span>
                    </a>
                </li>
                <li>
                    <a href="#" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                        <MdEngineering />
                        <span className="flex-1 ml-3 break-normal">Software Engineering</span>
                    </a>
                </li>
            </ul>
        </>
    )
}