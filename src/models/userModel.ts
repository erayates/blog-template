import { Schema, models, model, Document } from "mongoose";

interface User extends Document {
    username: string;
    email: string;
    role: string;
    googleId?: string;
    githubId?: string;
    likedPosts?: Schema.Types.ObjectId[];
    savedPosts?: Schema.Types.ObjectId[];
    image: string;
    createdAt: Date;
    updatedAt: Date;
}

const userSchema = new Schema<User>({
    username: {
        type: String,
        required: [true, 'Username is required.'],
    },

    email: {
        type: String,
        required: [true, 'Email is required.'],
        unique: true
    },

    role: {
        type: String,
        enum: ['user', 'editor', 'administrator'],
        default: 'user'
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    likedPosts: [{
        type: Schema.Types.ObjectId,
        ref: 'Post'
    }],
    savedPosts: [{
        type: Schema.Types.ObjectId,
        ref: 'Post'
    }],
    updatedAt: Date,
    image: String,

})

const User = models.User || model<User>('User', userSchema);

export default User;