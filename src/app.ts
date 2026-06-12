import express, { Application, NextFunction, Request, Response } from "express";
import cors from "cors";
const app: Application = express();
import httpStatus from "http-status";
import globalErrorHandlers from "./middlewares/globalErrorHandler";
import { userRoutes } from "./modules/users/user.route";
const PORT = process.env.PORT || 5000;
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(globalErrorHandlers);

app.use("/api/v1/users", userRoutes);

app.get("/", (req: Request, res: Response, next: NextFunction) => {
  res.status(200).json({ message: "Server is running successfully" });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

app.use((req: Request, res: Response, next: NextFunction) => {
  res.status(httpStatus.NOT_FOUND).json({
    success: false,
    message: "Not Found",
    errorMessage: [
      {
        path: req.originalUrl,
        message: "Api not found",
      },
    ],
  });
  next();
});

export default app;
