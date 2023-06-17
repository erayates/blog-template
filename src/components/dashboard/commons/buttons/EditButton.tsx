import { AiOutlineEdit } from "react-icons/ai"


export default function EditButton() {
    return (
        <button className="text-white flex items-center  bg-blue-500 px-4 py-2 rounded-xl transition-transform hover:scale-105 duration-200 focus:outline-none">
            <AiOutlineEdit className="mr-2" />
            Edit
        </button>
    )
}