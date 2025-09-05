import mongoose from "mongoose";

const connectToDb = async () => {
  try {
    const connection = await mongoose.connect(process.env.MONGO_URL);
    console.log(" ✅ Connection string", connection);
  } catch (error) {
    console.log(" ❌  mongoDB connection error", error);
    process.exit(1);
  }
};

export default connectToDb;
