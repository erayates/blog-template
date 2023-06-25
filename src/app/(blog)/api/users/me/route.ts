import User from "@/models/userModel";
import { connectToDatabase } from "@/utilities/database";
import { NextApiRequest } from "next";
import { NextResponse } from "next/server";
import jwt from 'jsonwebtoken'

export async function GET(req: NextApiRequest) {
    await connectToDatabase();

    try {
        const { authorization } = req.headers;
        console.log(req.headers);

      
        if (!authorization || !authorization.startsWith('Bearer ')) {
            return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
        }



        const token = authorization.split(' ')[1];
        const decoded = jwt.verify(token, process.env.NEXTAUTH_SECRET);

        const user = await User.findById(decoded.userId).populate('likedPosts').populate('savedPosts');

        if (!user) return NextResponse.json({ message: 'User not found.' }, { status: 401 });

        return NextResponse.json({ user }, { status: 200 });
    } catch (err) {
        return NextResponse.json({ message: 'Server error!' }, { status: 500 });
    }
};