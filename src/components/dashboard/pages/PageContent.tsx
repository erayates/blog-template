"use client";
import EditButton from "../commons/buttons/EditButton"
import DeleteButton from "../commons/buttons/DeleteButton"
import { FaLongArrowAltRight, FaLongArrowAltLeft } from 'react-icons/fa'
import Link from "next/link"
import dayjs from "dayjs"
import { usePosts } from "@/hooks/usePostsQuery";
import { useUsers } from "@/hooks/useUserQuery";
import { CommentType, PostType, TableRowType, UserType } from "@/types";


function TableHeader({ tableCols }: { tableCols: Array<string> }) {
    return (
        <thead className="bg-gray-50 dark:bg-gray-800">
            <tr>
                <th scope="col" className="py-3.5 px-4 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <div className="flex items-center gap-x-3">
                        <input type="checkbox" className="text-blue-500 border-gray-300 rounded dark:bg-gray-900 dark:ring-offset-gray-900 dark:border-gray-700" />
                        <span>ID</span>
                    </div>
                </th>

                {tableCols.map((col, index) => (
                    <th scope="col" className="py-3.5 px-4 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400" key={index}>
                        {col}
                    </th>
                ))}

                <th scope="col" className="relative py-3.5 px-4">
                    <span className="sr-only">Actions</span>
                </th>
            </tr>
        </thead>
    )
}



function TableBody({ tableName, tableRows }: { tableName: string, tableRows: Array<PostType> | Array<UserType> | Array<CommentType> }) {
    return (
        <tbody className="bg-white divide-y divide-gray-200 dark:divide-gray-700 dark:bg-gray-900">
            {
                tableRows.map((row: TableRowType , index: number) => {
                    return (
                        <>
                            <tr key={index}>
                                <td className="px-4 py-4 text-sm font-medium text-gray-700 dark:text-gray-200 whitespace-nowrap">
                                    <div className="inline-flex items-center gap-x-3">
                                        <input type="checkbox" className="text-blue-500 border-gray-300 rounded dark:bg-gray-900 dark:ring-offset-gray-900 dark:border-gray-700" />
                                        <span>#{index}</span>
                                    </div>
                                </td>
                                {
                                    tableName === 'posts' && (
                                        <>
                                            <td className="px-4 py-4 whitespace-nowrap">
                                                <img src={row.image} alt="Post Thumbnail" className="object-cover w-10 h-10 rounded-xl" />
                                            </td>
                                            <td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
                                                {dayjs(row.createdAt).format('MMM DD, YYYY')}
                                            </td>
                                            <td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 font-semibold whitespace-nowrap">
                                                {row.author.name}
                                            </td>
                                         
                                            <td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
                                                {row.title}
                                            </td>
                                            <td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-normal">
                                                {row.content}
                                            </td>
                                        </>
                                    )
                                }
                              

                                {tableName === 'users' && (
                                    <>
                                        <td className="px-4 py-4  whitespace-nowrap">
                                            <img className="object-cover w-8 h-8 rounded-2xl" src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80" alt="" />
                                            
                                        </td>
                                        <td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
                                            <p className="text-sm font-medium text-gray-800 dark:text-white ">{row.username}</p>
                                        </td>
                                      
                                        <td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
                                            {row.email}
                                        </td>
                                       
                                    </>
                                )}

                                {tableName === 'comments' && (
                                    <>
                                        <td className="px-4 py-4  whitespace-nowrap">
                                            <img className="object-cover w-8 h-8 rounded-2xl" src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80" alt="" />

                                        </td>
                                        <td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
                                            <h2 className="text-sm font-medium text-gray-800 dark:text-white ">Arthur Melo</h2>

                                        </td>
                                        <td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
                                            <div className="flex items-center gap-x-2 pr-4">
                                                <div>
                                                    authurmelo_33
                                                </div>
                                            </div>
                                        </td>
                                        <td className="px-4 py-4 text-sm text-blue-500 dark:text-blue-300 whitespace-nowrap">
                                            <Link href="/blog/1">Best practices for successful prototypes</Link>
                                        </td>
                                        <td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 ">
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi animi vitae vel sunt provident autem cupiditate possimus molestias maiores non!
                                        </td>
                                    </>
                                )}

                                <td className="px-4 py-4 text-sm whitespace-nowrap">
                                    <div className="flex items-center gap-x-6">
                                        <EditButton id={row._id} tableName={tableName} />
                                        <DeleteButton id={row._id} tableName={tableName} />
                                    </div>
                                </td>
                            </tr>
                        </>
                    )
                })
            }

        </tbody>
    )
}

function TablePagination() {
    return (
        <div className="flex items-center justify-between mt-6">
            <button className="flex items-center px-5 py-2 text-sm text-gray-700 capitalize transition-colors duration-200 bg-white border rounded-md gap-x-2 hover:bg-gray-100 dark:bg-gray-900 dark:text-gray-200 dark:border-gray-700 dark:hover:bg-gray-800">
                <FaLongArrowAltLeft />
                <span>Previous</span>
            </button>

            <div className="items-center hidden md:flex gap-x-3">
                <a href="#" className="px-2 py-1 text-sm text-blue-500 rounded-md dark:bg-gray-800 bg-blue-100/60">1</a>
                <a href="#" className="px-2 py-1 text-sm text-gray-500 rounded-md dark:hover:bg-gray-800 dark:text-gray-300 hover:bg-gray-100">2</a>
                <a href="#" className="px-2 py-1 text-sm text-gray-500 rounded-md dark:hover:bg-gray-800 dark:text-gray-300 hover:bg-gray-100">3</a>
                <a href="#" className="px-2 py-1 text-sm text-gray-500 rounded-md dark:hover:bg-gray-800 dark:text-gray-300 hover:bg-gray-100">...</a>
                <a href="#" className="px-2 py-1 text-sm text-gray-500 rounded-md dark:hover:bg-gray-800 dark:text-gray-300 hover:bg-gray-100">12</a>
                <a href="#" className="px-2 py-1 text-sm text-gray-500 rounded-md dark:hover:bg-gray-800 dark:text-gray-300 hover:bg-gray-100">13</a>
                <a href="#" className="px-2 py-1 text-sm text-gray-500 rounded-md dark:hover:bg-gray-800 dark:text-gray-300 hover:bg-gray-100">14</a>
            </div>

            <button className="flex items-center px-5 py-2 text-sm text-gray-700 capitalize transition-colors duration-200 bg-white border rounded-md gap-x-2 hover:bg-gray-100 dark:bg-gray-900 dark:text-gray-200 dark:border-gray-700 dark:hover:bg-gray-800">
                <span>Next</span>
                <FaLongArrowAltRight />
            </button>
        </div>
    )
}


export default function PageContent({ tableCols, tableName }: { tableCols: Array<string>, tableName: string }) {
    if (tableName === 'posts') {
        const { isLoading, error, data } = usePosts();
        if (isLoading) return <div>Loading...</div>

        if (error) return <div>Something went wrong...</div>

        return (
            <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700 font-primary">
                <TableHeader tableCols={tableCols} />
                <TableBody tableName={tableName} tableRows={data} />
            </table>
        )
    }

    if (tableName === 'users') {
        const { isLoading, error, data } = useUsers();
        if (isLoading) return <div>Loading...</div>

        if (error) return <div>Something went wrong...</div>

        return (
            <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700 font-primary">
                <TableHeader tableCols={tableCols} />
                <TableBody tableName={tableName} tableRows={data} />
            </table>
        )
    }
}