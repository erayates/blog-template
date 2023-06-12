import CommentDropdownMenu from "../CommentCard/CommentDropdownMenu";
import CommentHeader from "../CommentCard/CommentHeader";
import CommentReply from "../CommentCard/CommentReply";

export default function ReplyCommentCard() {
    return (
        <div className="p-6 mb-6 ml-6 lg:ml-12 text-base bg-white rounded-lg dark:bg-gray-900">
            <div className="flex justify-between items-center mb-2">
                <div className="flex items-center">
                    <CommentHeader />
                </div>

                <CommentDropdownMenu />
            </div>
            <p className="text-gray-500 dark:text-gray-400">Much appreciated! Glad you liked it ☺️</p>
            <CommentReply />
        </div>
    )
}