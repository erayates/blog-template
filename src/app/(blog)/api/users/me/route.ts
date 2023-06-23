import User from "@/models/userModel";
import { connectToDatabase } from "@/utilities/database";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
    await connectToDatabase();
    const { searchParams } = new URL(req.url);
    const email = searchParams.get('email');
    const comments = searchParams.get('comment');
    try {
        if (email) {
            const user = await User.findOne({ email: email }).populate('likedPosts').populate('savedPosts');
            return NextResponse.json(user, { status: 200 });
        }

    } catch (err: any) {
        return NextResponse.json(err.message, { status: 500 });
    }
};