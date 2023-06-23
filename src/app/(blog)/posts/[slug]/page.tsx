
import CommentInput from "@/components/commons/comments/CommentInput"
import ReplyCommentCard from "@/components/commons/comments/ReplyCommentCard"
import Breadcrumb from "@/components/layouts/Breadcrumb"
import PostContent from "@/components/posts/PostContent"
import PostFooter from "@/components/posts/PostFooter"
import PostHeader from "@/components/posts/PostHeader"


export default function Details() {
    return (
        <main className="">
            <section className="post-content max-w-4xl mx-auto">
                <Breadcrumb />
                <PostHeader />
                <hr></hr>
                <PostContent />
                <PostFooter />
            </section>
            <hr className="my-10"></hr>
            <section className="post-comments">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-lg lg:text-2xl font-bold text-gray-900 dark:text-white mb-6 font-primary">Discussion</h2>
                    <CommentInput />
                    <ReplyCommentCard />
                </div>




            </section>
       
        </main>

    )
}