import express, { Application, NextFunction, Request, Response } from "express";
import cors from "cors";
const app: Application = express();
const PORT = process.env.PORT || 5000;
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/',(req:Request,res:Response,next:NextFunction)=>{
    res.status(200).json({message: 'Server is running successfully'})
})


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

export default app;
