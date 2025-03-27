import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import cookieParser from 'cookie-parser';

import userRoutes from './routes/user.routes.js';  //from req.body
import messageRoutes from './routes/message.routes.js';
import authRoutes from './routes/auth.routes.js';

import connectToMongoDB from './db/connectToMongoDB.js';
import { app, server } from './socket/socket.js';

const PORT = process.env.PORT || 5000;

dotenv.config();

app.use(cors({
    origin: "http://localhost:3000", // Allow frontend
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true
  }));

app.use(express.json());
app.use(cookieParser());

app.use("/api/auth",authRoutes) //from req.body
app.use("/api/messages",messageRoutes)
app.use("/api/users",userRoutes)

// app.get('/', (req, res) => {
//     // root routes http://localhost:5000/
//     res.send('Hello World! how are you ');
// })


server.listen(PORT, () => {
    connectToMongoDB();
    console.log(`Server is running on port ${PORT}`);
})