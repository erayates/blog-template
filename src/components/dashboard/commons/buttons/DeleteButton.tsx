import { AiOutlineDelete } from "react-icons/ai";

export default function DeleteButton(){
    return (
        <button className="text-white flex items-center  bg-red-500 px-4 py-2 rounded-xl transition-transform hover:scale-105 duration-200 focus:outline-none">
            <AiOutlineDelete className="mr-2" />
            Delete
        </button>
    )
}