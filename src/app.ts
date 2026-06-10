import express, { Application, NextFunction, Request, Response } from "express";
import cors from "cors";
const app: Application = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/',(req:Request,res:Response,next:NextFunction)=>{
    res.status(200).json({message: 'Server is running successfully'})
})

export default app;
