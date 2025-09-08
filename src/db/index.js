import mongoose from "mongoose";

const connectToDb = async () => {
  //console.log("String", process.env.MONGODB_URL);

  try {
    const connection = await mongoose.connect(process.env.MONGODB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(" ✅ Connection string ", connection.connection.name);
  } catch (error) {
    console.log(" ❌  mongoDB connection error", error);
    process.exit(1);
  }
};
 
export default connectToDb;

console.log([1,2,3]+[4,5,6]);
