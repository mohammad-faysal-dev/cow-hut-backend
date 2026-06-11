import path from "path";
import { transports, format } from "winston";
import winston from "winston";
const { combine, timestamp, colorize, printf } = winston.format;

const logFormat = printf(({ timestamp, level, message }) => {
  return `${timestamp} [${level}] : ${message}`;
});

const logger = winston.createLogger({
  level: "info",
  format: combine(
    timestamp({
      format: "YYYY-MM-DD HH:mm:ss",
    }),
    logFormat,
  ),
  transports: [
    new winston.transports.Console({
      format: combine(colorize(), timestamp(), logFormat),
    }),
    new winston.transports.File({
      filename: path.join(process.cwd(), "logs", "success.log"),
      level: "info",
    }),
  ],
});

const errorLogger = winston.createLogger({
  level: "error",
  format: format.combine(
    timestamp({
      format: "YYYY-MM-DD HH:mm:ss",
    }),
    logFormat,
  ),

  transports: [
    new transports.Console(),
    new transports.File({
      filename: path.join(process.cwd(), "logs", "error.log"),
      level: "error",
    }),
  ],
});

export { logger, errorLogger };

if (process.env.NODE_ENV !== "production") {
  logger.add(
    new winston.transports.Console({
      format: winston.format.simple(),
    }),
  );
}
