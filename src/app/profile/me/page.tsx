'use client';
import UserProfileCommentCard from "@/components/commons/cards/UserProfileCommentCard";
import { useSession } from "next-auth/react"
import { useRouter } from "next/navigation";
import { AiFillLike, AiFillMail, AiOutlineComment } from "react-icons/ai";
import { BsWrench, BsFillBookmarkPlusFill } from "react-icons/bs";



export default function Me() {
    const { data: session } = useSession();
    const router = useRouter();

    console.log(session);
    return (
        <main className="col-span-9 pt-12 grid grid-cols-1 lg:grid-cols-2">
            <div className="user-info p-4 mb-6">
                <div className="flex xl:block sm:space-x-4 xl:space-x-0">
                    <img className="mb-2 w-20 h-20 rounded-2xl shadow-lg shadow-gray-300" src="https://demos.creative-tim.com/soft-ui-flowbite-pro/images/users/jese-leos-2x.png" alt="Jese portrait" />
                    <div>
                        <h2 className="text-xl font-bold">{session && session.user.name}</h2>
                        <ul className="mt-2 space-y-3">
                            <li className="flex items-center text-sm font-normal text-gray-500">
                                <BsWrench className="mr-2" />
                                User
                            </li>
                            <li className=" items-center text-sm font-normal text-gray-500">
                                <p className="flex items-center"> <AiFillMail className="mr-2" /> Email adress</p>
                                <span className="text-sm font-medium text-gray-900" >{session?.user?.email}</span>

                            </li>
                            <li className=" items-center text-sm font-normal text-gray-500">
                                <p className="flex items-center mr-1"> <AiFillMail className="mr-2" /> Your Total Comments:</p>
                                <span className="text-sm font-medium text-gray-900" > 78</span>

                            </li>
                            <li className="items-center text-sm font-normal text-gray-500">
                                <p className="flex items-center mr-1"> <AiFillLike className="mr-2" /> Your Total Liked Posts:</p>
                                <span className="text-sm font-medium text-gray-900" > 80</span>
                            </li>
                            <li className=" items-center text-sm font-normal text-gray-500">
                                <p className="flex items-center mr-1"> <BsFillBookmarkPlusFill className="mr-2" /> Your Total Saved Posts:</p>
                                <span className="text-sm font-medium text-gray-900" > 120</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="user-comments font-primary">
                <h3 className="text-xl font-semibold mb-4">Your Recent Comments</h3>
                <UserProfileCommentCard />
                <UserProfileCommentCard />
            </div>
        </main >
    )
}