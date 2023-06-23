import User from "@/models/userModel";
import { connectToDatabase } from "@/utilities/database";
import { NextResponse } from "next/server";

export async function GET(){
    try{
        await connectToDatabase();
        const posts = await User.find({}).populate('likedPosts').populate('savedPosts');

        return NextResponse.json(posts, {status: 200});
    }catch(err: any){
        return NextResponse.json(err.message, {status: 500});     
    };
}

