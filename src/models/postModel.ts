import { Schema, models, model, Document } from "mongoose";
import slugify from "slugify";
import User from "./userModel";

interface Post extends Document {
    title: string;
    content: string;
    author: Schema.Types.ObjectId;
    image: string;
    likes: number;
    comments: string[];
    tags: string[];
    category: string;
    createdAt: Date;
    slug: string;
    updatedAt: Date;
}

const postSchema: Schema = new Schema<Post>({
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
        type: Schema.Types.ObjectId,
        ref: 'User',
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    image: String,
    likes: {
        type: Number,
        default: 0
    },
 
    category: String,
    tags: [String],
    slug: String,
    comments: [],

});

postSchema.pre<Post>('save', function(next){
    this.slug = slugify(this.title, {lower: true});
    next();
})

const Post = models.Post || model<Post>('Post', postSchema);

export default Post;