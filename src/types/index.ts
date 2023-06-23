export type PostType = {
    title: string;
    content: string;
    author: AuthorType;
    image: string;
    tags: string[];
    createdAt: string;
    slug: string;
    likes: number;
}

type AuthorType = {
    _id: string;
    name: string;
    image: string;
    username: string;
}
