// install exprees to create backend/APIs
import express from 'express';
import mongoose from 'mongoose';
import userRouter from './routes/user.route.js';
import dotenv from 'dotenv';
import authRouter from './routes/auth.route.js';

dotenv.config();

mongoose
.connect(process.env.MONGO)
.then(() => {
    console.log('connected to mongodb');
})
.catch((err) => {
    console.log(err);
});

// INSTALL DOTENV TO USE ENVIRONMENT VARIABLES , because you cant use environmental variables in node.js by default

const app = express();

app.use(express.json()); //this will allow us to use json in the body of the request  // this is the middleware 

app.listen(3000, () => {
    console.log('server is running on port 3000!!'); 
});

app.use("/api/user", userRouter);
app.use("/api/auth", authRouter);
app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    const message = err.message || "Internal Server Error";
    return res.status(statusCode).json({
        success: false,
        statusCode,
        message,
    });
});
// in the terminal run: node api/index.js
// to run the server
// to stop the server: ctrl + c
// add the type module in package.json to run the server with ES6 syntax
// to load changes in real time install nodemon
// add nodemon script in package.json -> "dev": "nodemon api/index.js",
    // and "start": "node api/index.js"
// to run the server with nodemon run: npm run dev
// req is the data that is coming in from the client while res is the data that is being sent back to the client
// create a proxy to connect the frontend to the backend

// TIMESTAMP0 1:18:00	