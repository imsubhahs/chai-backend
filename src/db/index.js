import mongoose from "mongoose";

import { DB_NAME } from "../constants";

const connectDB = async ()=>{
    try {
        const connectioninstant = await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`)
        console.log(`mngodb connected !!DB HOST :${connectioninstant.connection.host}`);
        
    } catch (error) {
        console.log("mongo error",error);
        process.exit(1)
    }
}

export default connectDB