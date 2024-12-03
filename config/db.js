const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();


const MONGO_URL = process.env.MONGO_URL;
const connectDB = async () => {
  try {
    await mongoose.connect(MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Mongodb connected")

  } catch (error) {
    console.log(error, "error connecting to database")
  }
};


module.exports = connectDB;