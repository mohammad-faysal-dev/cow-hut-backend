import { ZodError, ZodIssue } from "zod";

const handleZodError = (error: ZodError) => {
  const errors = error.issues.map((issue: ZodIssue) => {
    return {
      path: issue?.path[issue.path.length - 1],
      message: issue?.message,
    };
  });
  return {
    statusCode: 400,
    message: "Validation Error",
    errorMessage: errors,
  };
};
export default handleZodError;
