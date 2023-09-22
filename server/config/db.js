import mongoose from "mongoose";
import colors from "colors";

const connectDB = async () => {
  try {
    const conn = mongoose.connect(process.env.MONGO_URI, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
      useFindAndModify: false,
      useCreateIndex: true,
    });
    if (conn) {
      console.log(`MongoDB Connected:`.cyan.underline);
    } else {
      console.log(`MongoDB Connected connection failed`.cyan.underline);
      process.exit(1);
    }
  } catch (error) {
    console.error(`Error: ${error.message}`.red.underline.bold);
    process.exit(1);
  }
};

export default connectDB;
