import Link from "next/link";
import { AiFillClockCircle } from "react-icons/ai";

export default function PostHeader() {
    return (
        <>
            <div className="flex items-center mr-3 text-sm text-gray-900 dark:text-white">
                <img className="mr-4 w-16 h-16 rounded-full" src="https://flowbite.com/docs/images/people/profile-picture-2.jpg" alt="Jese Leos" />
                <div>
                    <Link href="#" rel="author" className="text-xl font-bold text-gray-900 dark:text-white">Eray Ates</Link>
                    <p className=" font-light text-sm text-gray-500 dark:text-gray-400">Web Developer, Student</p>
                    <p className=" font-light text-sm  text-gray-500 dark:text-gray-400">Feb. 8, 2022</p>
                </div>
            </div>
            <h1 className="mt-10 text-3xl font-extrabold leading-tight text-gray-900  lg:text-4xl dark:text-white font-primary">Best practices for successful prototypes</h1>
            <p className="text-gray-500 text-sm  font-light  flex items-center my-2">
                <AiFillClockCircle className="mr-2"/>
                Created At: Feb. 8, 2022 20:00
            </p>
        </>
    )
} 