import mongoose from "mongoose";
// import * as dotenv from "dotenv";
// dotenv.config();

const connectDB = async function(){
  try {
    // const uri = `mongodb+srv://${process.env.USER_NAME}:${process.env.PASSWORD}@internship-manager.jqaq2hg.mongodb.net/?retryWrites=true&w=majority`;
    const uri = `mongodb://127.0.0.1:27017/nln_dev
    `;
    await mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connect Database Successfully!");
  } catch (error) {
    console.log(error);
  }
};

export default connectDB;
