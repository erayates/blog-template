import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai';
import {BsFillBookmarkPlusFill, BsFillBookmarkDashFill} from 'react-icons/bs'

export default function PostCardButtons() {
    return (
        <div className="post-card-buttons absolute right-[10px] bottom-[10px] text-[16px] cursor-pointer rounded-xl">
            <div className='post-card-like-button flex flex-col justify-center bg-red-500 p-2 text-white rounded-xl'>
                <AiOutlineHeart />
                <span className='post-card-like-count text-[12px] text-center'>3</span>

            </div> 
            <div className='post-card-like-button flex flex-col justify-center bg-red-500 p-2 text-white rounded-xl mt-2'>
                <BsFillBookmarkPlusFill />
            </div> 
            
        </div>
    )
}