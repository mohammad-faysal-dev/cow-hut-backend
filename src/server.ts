import mongoose from "mongoose";
import config from "./config";
import app from "./app";
import { errorLogger, logger } from "./shared/logger";

async function main() {
  try {
    await mongoose.connect(config.database_url as string);
    logger.info("Database connected successfully");

    app.listen(config.port, () => {
      console.log(`Server is running on port ${config.port}`);
    });
  } catch (error) {
    errorLogger.error("Database connection failed", error);
  }
}
main();
