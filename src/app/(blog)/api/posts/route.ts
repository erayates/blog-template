import Post from "@/models/postModel";
import { connectToDatabase } from "@/utilities/database";
import { NextResponse } from "next/server";

export async function GET() {
    try{
        await connectToDatabase();
        const posts = await Post.find({}).populate('author', 'username').sort({createdAt: -1});

        return NextResponse.json(posts, {status: 200});
    }catch(err: any){
        return NextResponse.json(err.message, {status: 500});     
    };
};

export async function POST (req: Request) {
    const { title, content, author, image, category, tags } = await req.json();
    
    try{
        await connectToDatabase();
        const post = new Post({ title, content, author, image, category, tags });
        await post.save();

        return NextResponse.json(post, {status: 201});
    }catch(err: any){
        return NextResponse.json(err.message, {status: 500});
    };
};