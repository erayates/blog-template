import Post from "@/models/postModel";
import { connectToDatabase } from "@/utilities/database";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
    try {
        await connectToDatabase();

        const { searchParams } = new URL(req.url);
        const searchInput = searchParams.get('search');
        const sort = searchParams.get('sort');

        // Search by title
        if (searchInput) {
            const nameRegex = new RegExp(searchInput);
            const posts = await Post.find({ 'title': { $regex: nameRegex, $options: 'i' } })
                .populate({ path: 'author', select: 'username image' })
                .sort({ createdAt: -1 });

            return NextResponse.json(posts, { status: 200 });
        }

        // Sort by likes
        if (sort === 'likes') {
            const posts = await Post.find({})
                .sort({ likes: 'asc' })
                .populate({ path: 'author', select: 'username image' })
                .limit(6);

            return NextResponse.json(posts, { status: 200 });
        }


        // Sort by top rated
        if (sort === 'topRated') {
            const posts = await Post.find({})
                .sort({ createdAt: -1 })
                .populate({ path: 'author', select: 'username image' })
                .limit(6);

            return NextResponse.json(posts, { status: 200 });
        }

        const posts = await Post.find({})
            .sort({ createdAt: -1 })
            .populate({ path: 'author', select: 'username image' });

        return NextResponse.json(posts, { status: 200 });

    } catch (err: any) {
        return NextResponse.json(err.message, { status: 500 });
    };
};

export async function POST(req: Request) {
    const { title, content, author, image, category, tags } = await req.json();

    try {
        await connectToDatabase();
        const post = new Post({ title, content, author, image, category, tags });
        await post.save();

        return NextResponse.json(post, { status: 201 });
    } catch (err: any) {
        return NextResponse.json(err.message, { status: 500 });
    };
};