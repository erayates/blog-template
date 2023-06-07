import mongoose, { ConnectOptions } from 'mongoose';

let isConnected = false;

export const connectToDatabase = async (): Promise<void> => {
    mongoose.set('strictQuery', false);

    if (isConnected) {
        console.log("MongoDB is already connected.");
        return;
    }

    try {
        const DB = process.env.DATABASE?.replace('<PASSWORD>', process.env.DATABASE_PASSWORD ?? '');
        if (!DB) {
            throw new Error("MongoDB connection string is missing.");
        }

        const options: ConnectOptions = {
            dbName: process.env.DATABASE_NAME,
        };

        await mongoose.connect(DB, options);
        
        isConnected = true;
        console.log("MongoDB connected successfully.");
    } catch (error) {
        console.error("MongoDB connection error:", error);
    }
};
