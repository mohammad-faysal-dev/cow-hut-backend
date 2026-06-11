import mongoose from "mongoose";
import config from "./config";
import { errorLogger, logger } from "./shared/logger";

async function main() {
  try {
    await mongoose.connect(config.database_url as string);
    logger.info("Database connected successfully")
  } catch (error) {
    errorLogger.error("Database connection failed", error);
  }
}
main();
