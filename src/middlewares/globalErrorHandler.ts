import { ErrorRequestHandler } from "express";
import config from "../config";
import handleValidationError from "../errors/handleValidationError";

const globalErrorHandlers: ErrorRequestHandler = (err, req, res, _next) => {
  if (config.env === "development") {
    console.log("GlobalErrorHandler", err);
  } else {
    console.error("Something went wrong");
  }
  let statusCode = 500;
  let message = "something went wrong";
  let errorMessage: any[] = [];
  if (err?.name === "validationError") {
    const simplifiedError = handleValidationError(err);
    statusCode = simplifiedError.statusCode;
    message = simplifiedError.message;
    errorMessage = simplifiedError.errorMessage;
  }
  res.status(statusCode).json({
    success: true,
    message,
    errorMessage,
    stack:
      config.env !== "production" && err instanceof Error
        ? err?.stack
        : undefined,
  });
};
export default globalErrorHandlers;
