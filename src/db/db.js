import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";


const connectToDatabase = async () => {
    try {
       const connectionInstance = await mongoose.connect(`${process.env.MONGO_URI}/${DB_NAME}`)
       console.log(`\n mongoDB connected || DB HOST: ${connectionInstance.connection.host} \n`);
    } catch (error) {
        console.error("Error connecting to database: ", error);
        process.exit(1);
    }
}

export default connectToDatabase;