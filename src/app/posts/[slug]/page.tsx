import CommentDropdownMenu from "@/components/commons/comments/CommentCard/CommentDropdownMenu"
import CommentHeader from "@/components/commons/comments/CommentCard/CommentHeader"
import CommentReply from "@/components/commons/comments/CommentCard/CommentReply"
import CommentInput from "@/components/commons/comments/CommentInput"
import ReplyCommentCard from "@/components/commons/comments/ReplyCommentCard"

export default function Details() {
    return (
        <main className="col-span-9 pt-12">
            <section className="post-content ">
            </section>

            <section className="post-comments">
                <div className="max-w-3xl mx-auto px-4">
                    <h2 className="text-lg lg:text-2xl font-bold text-gray-900 dark:text-white mb-6">Discussion (20)</h2>

                    <CommentInput />
                    
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
                    <ReplyCommentCard />
                  
                </div>




            </section>
        </main>

    )
}