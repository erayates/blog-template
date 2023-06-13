import CommentDropdownMenu from "./CommentDropdownMenu";
import CommentHeader from "./CommentHeader";
import CommentReply from "./CommentReply";

export default function CommentCard() {
    return (
        <div className="p-6 mb-6 text-base bg-white rounded-lg dark:bg-gray-900">
            <div className="flex justify-between items-center mb-2">
                <CommentHeader />
                <CommentDropdownMenu />
            </div>
            <p className="text-gray-500 dark:text-gray-400">Very straight-to-point article. Really worth time reading. Thank you! But tools are just the
                instruments for the UX designers. The knowledge of the design tools are as important as the
                creation of the design strategy.
            </p>

            <CommentReply />
        </div>
    )
}