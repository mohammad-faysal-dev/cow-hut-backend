import mongoose from "mongoose";

const handleValidationError = (err: mongoose.Error.ValidationError) => {
  const errors = Object.values(err.errors).map(
    (el: mongoose.Error.ValidatorError | mongoose.Error.CastError) => {
      return {
        path: el?.path,
        message: el?.message,
      };
    },
  );
  return {
    statusCode: 200,
    message: "Validation Error",
    errorMessage: errors,
  };
};

export default handleValidationError;
