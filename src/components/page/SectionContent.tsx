'use client';

import PostCard from "../commons/cards/PostCard"
import {usePosts} from "@/hooks/usePostsQuery";


export default function SectionContent({sort}: {sort?: string}) {
    const { isLoading, error, data: posts } = usePosts(sort);

    if(isLoading){
        return <div>Loading...</div>
    }

    if(error){
        return <div>Something went wrong. There is no data to be display.</div>
    }


    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 mt-6">
           {
            !isLoading && posts && posts.map((post: Object) => {
                return (
                    <PostCard key={post._id} post={post} />
                )
            })
           }
            
        </div>
    )
}