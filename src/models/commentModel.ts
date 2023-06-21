import { Schema, models, model, Document } from "mongoose";

interface Comment extends Document {
    author: Schema.Types.ObjectId;
    content: string;
    createdAt: Date;
    updatedAt: Date;
    replies: Comment[];
}


const commentSchema = new Schema<Comment>({
    author: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true 
    },
    content: { 
        type: String,
        required: true 
    },
    createdAt: {
        type: Date,
        default: Date.now 
    },
    updatedAt: Date,
    replies: [{ type: Schema.Types.ObjectId, ref: 'Comment' }],
});

const Comment = models.Comment || model<Comment>('Comment', commentSchema);

export default Comment;