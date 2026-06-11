import mongoose from "mongoose";
import config from "./config";

async function main() {
  try {
    await mongoose.connect(config.database_url as string);
  } catch (error) {
    console.log(error)
  }
}
main();
