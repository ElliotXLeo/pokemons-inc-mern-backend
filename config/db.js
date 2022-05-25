import mongoose from "mongoose";
import { MONGODB_URI } from "./env.js";

const db = async () => {
  try {
    const connection = await mongoose.connect(MONGODB_URI);
    const url = `${connection.connection.host}:${connection.connection.port}`;
    console.log(`MongoDB conectado en: ${url}`);
    console.log(`MongoDB database: ${connection.connection.name}`);
  } catch (error) {
    console.log(error);
    rocess.exit(1);
  }
}

export default db;