import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { errorMiddleware } from "./middlewares/error.js";
import reservationRouter from "./routes/reservationRoute.js";
import { dbConnection } from "./database/dbConnection.js";

const app = express();

// Load environment variables from .env file
dotenv.config({ path: "./.env" });

// Debugging: Log the PORT and MONGO_URI to ensure they are loaded correctly
console.log('PORT:', process.env.PORT);
console.log('MONGO_URI:', process.env.MONGO_URI);
console.log('FRONTEND_URL:', process.env.FRONTEND_URL);

// Set up CORS
app.use(
    cors({
        origin: [process.env.FRONTEND_URL],
        methods: ["POST"],
        credentials: true,
    })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// API Routes
app.use("/api/v1/reservation", reservationRouter);

// Default route
app.get("/", (req, res, next) => {
    return res.status(200).json({
        success: true,
        message: "HELLO WORLD AGAIN",
    });
});

// Connect to the database
dbConnection();

// Error handling middleware
app.use(errorMiddleware);

export default app;
