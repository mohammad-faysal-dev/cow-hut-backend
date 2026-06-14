import express, { Application, NextFunction, Request, Response } from "express";
import cors from "cors";
const app: Application = express();
import httpStatus from "http-status";
import globalErrorHandlers from "./middlewares/globalErrorHandler";
import { userRoutes } from "./modules/users/user.route";
import { authRoutes } from "./modules/auth/auth.route";
import { CowRoutes } from "./modules/cows/cow.route";
import { OrderRoute } from "./modules/order/order.route";
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/v1/auth", authRoutes)
app.use("/api/v1/users", userRoutes);
app.use("/api/v1/cows", CowRoutes);
app.use("/api/v1/orders", OrderRoute)
app.use(globalErrorHandlers);

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
