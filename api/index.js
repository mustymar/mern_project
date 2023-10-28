import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import authRouter from './routes/auth.route.js';

dotenv.config();

mongoose.connect(process.env.MONGO_LINK)
    .then(() => console.log("Connected to MongoDB"))
    .catch((e) => console.log(e));

const app = express();

app.use(express.json());

app.listen(3000, () => console.log("Yes it's working"));

app.use("/api/auth", authRouter);


//Creating middleware to display response from the server

app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    const message = err.message || "Internal Server Error";
    return res.status(statusCode).json({
        success: false,
        statusCode,
        message,
        
    });
});
