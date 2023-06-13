import { AiOutlineHeart } from "react-icons/ai";
import { BsFillBookmarkPlusFill } from "react-icons/bs";

export default function PostFooter() {
    return (
        <div className="post-card-buttons flex bottom-[10px] text-[16px] cursor-pointer rounded-xl justify-end mt-10">
            <div className='post-card-like-button flex items-center justify-center bg-red-500 p-2 text-white rounded-xl mr-2'>
                <AiOutlineHeart />
                <span className='post-card-like-count text-[12px] text-center ml-1'>3</span>
            </div>
            <div className='post-card-like-button  bg-red-500 p-2 text-white rounded-xl '>
                <BsFillBookmarkPlusFill />
            </div>

        </div>
    )
}