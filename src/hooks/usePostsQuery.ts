import { useQuery } from "react-query";

const fetchPosts = async (sort?: string) => {
    if (sort) {
        const res = await fetch(`api/posts?sort=${sort}`, {
            cache: 'no-store',
        })
        return res.json();
    }

    const res = await fetch('api/posts', {
        cache: 'no-store',
    })
    return res.json();
}


const usePosts = (sort?: string) => {
    return useQuery({
        queryKey: ['posts', sort],
        queryFn: () => fetchPosts(sort),
    })
}

export {usePosts, fetchPosts};