import NextAuth from 'next-auth/next'
import { connectToDatabase } from '@/utilities/database'
import GithubProvider from 'next-auth/providers/github'
import GoogleProvider from 'next-auth/providers/google'
import jwt from 'jsonwebtoken'
import User from '@/models/userModel'


const handler = NextAuth({
    providers: [
        GithubProvider({
            clientId: process.env.GITHUB_ID,
            clientSecret: process.env.GITHUB_CLIENT_SECRET
        }),
        GoogleProvider({
            clientId: process.env.GOOGLE_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET
        }),
      
    ],

    session:{
        strategy: 'jwt',
    },


    callbacks: {
        async session({ session }) {
            // store the user id from MongoDB to session
            const sessionUser = await User.findOne({ email: session.user.email });
            session.user.id = sessionUser._id.toString();

            // create JWT token
            const token = jwt.sign({userId: session.user.id}, process.env.NEXTAUTH_SECRET, {expiresIn: '1d'});
            session.user.access = token;

            return session;
        },
        async signIn({ profile }) {
            try {
                await connectToDatabase();

                // Check if user exists in database
                console.log(profile)
                
                const userExists = await User.findOne({ email: profile.email });
                if (!userExists) {
                    
                    // Create user if not exists and provider is github
                    await User.create({
                        email: profile.email,
                        username: profile.login || profile.name.replace(" ", "").toLowerCase(),
                        image: profile.avatar_url || profile.picture
                    })
                }
                return true;
            } catch (err) {
                console.log(err);
                return false;
            }
        },

    }
})

export { handler as GET, handler as POST }