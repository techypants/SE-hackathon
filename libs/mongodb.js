import mongoose from "mongoose";

const connectMongoDB = () => {
  try {
    mongoose.connect(process.env.MongoDBURL);
    console.log("db connected");
  } catch (error) {
    console.log("Error connecting to MongoDB", error);
  }
};

export default connectMongoDB;
