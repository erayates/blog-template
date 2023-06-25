export type PostType = {
    _id: string;
    title: string;
    content: string;
    author: AuthorType;
    image: string;
    tags: string[];
    createdAt: string;
    slug: string;
    likes: number;
}

export type UserType = {
    _id: string;
    name: string;
    username: string;
    image: string;
    createdAt: string;
    status: string;
    posts: PostType[];

}

export type CommentType = {
    _id: string;
    content: string;
    createdAt: Date;
    updatedAt: Date;
    replies: CommentType[];
}

export type TableRowType = PostType | UserType | CommentType;


type AuthorType = {
    _id: string;
    name: string;
    image: string;
    username: string;
}
