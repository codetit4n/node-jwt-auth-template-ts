import mongoose from "mongoose"

export const connectDB = (url: string) => {
    mongoose.set("strictQuery", false);
    return mongoose.connect(url)
} 