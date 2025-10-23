
import mongoose from 'mongoose';
const connectDb = async()=>{
    try {
        await mongoose.connect(process.env.MONGO_URL);
        console.log("MongoDB connected");
    } catch (error) {
        console.error("MongoDB connection failed:", error);
       
    }
};

export default connectDb;
