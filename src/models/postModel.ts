import { Schema, models, model, Document } from "mongoose";

interface Post extends Document {
    title: string;
    content: string;
    author: string;
    image: string;
    likes: number;
    comments: string[];
    tags: string[];
    createdAt: Date;
    updatedAt: Date;
}

const postSchema = new Schema<Post>({
    title: {
        type: String,
        required: [true, 'Title is required.'],
    },
    content: {
        type: String,
        required: [true, 'Content is required.'],
        minlength: [50, 'Content must be at least 50 characters long.']
    },
    author:{
        type: String,
        required: [true, 'Author is required.'],
    },
    image: String,
    likes: {
        type: Number,
        default: 0
    },
    comments: [],

});

const Post = models.Post || model<Post>('Post', postSchema);

export default Post;