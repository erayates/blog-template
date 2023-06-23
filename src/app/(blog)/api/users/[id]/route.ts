import User from "@/models/userModel";
import { connectToDatabase } from "@/utilities/database";
import { NextResponse } from "next/server";
import { ObjectId } from "mongoose";

export async function GET(req: Request, { params }: { params: { id: string } }) {
    try {
        await connectToDatabase();
        const id = params.id
        const user = await User.findOne({ _id: id }).populate('likedPosts').populate('savedPosts');

        return new NextResponse(user, { status: 200 });
    } catch (err: any) {
        return new NextResponse(err.message, { status: 500 });
    }
}

export async function PATCH(req: Request, { params }: { params: { id: string } }) {
    try {

        await connectToDatabase();
        const id = params.id;
        const reqBody = await req.json();
        const user = await User.findOne({ _id: id });

        if (!user) throw new Error('User not found.');

        user.username = reqBody.username || user.username;
        user.email = reqBody.email || user.email;
        user.role = reqBody.role || user.role;
        user.image = reqBody.image || user.image;
        user.likedPosts = reqBody.likedPosts && user.likedPosts.includes(reqBody.likedPosts) ? user.likedPosts.filter((post: ObjectId) => post !== reqBody.likedPosts) : [...user.likedPosts, reqBody.likedPosts];
        user.savedPosts = reqBody.savedPosts || user.savedPosts;
        user.updatedAt = new Date();


        await user.save();


        return NextResponse.json(user, { status: 200 });
    } catch (err: any) {
        return NextResponse.json(err.message, { status: 500 });
    }

}