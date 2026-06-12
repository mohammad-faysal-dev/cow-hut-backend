import mongoose from "mongoose";

const handleCastError = (error: mongoose.Error.CastError) => {
  const errors = [
    {
      path: error.path,
      message: "Invalid Id",
    },
  ];
  const statusCode = 400;
  return {
    statusCode,
    message: "validation error",
    errorMessage: errors,
  };
};

export default handleCastError;
