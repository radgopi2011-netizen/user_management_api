import express from "express";
import helmet from "helmet";
import cors from "cors";


import authRoutes from "./routes/auth.routes";
import userRoutes from "./routes/user.routes";

import { logger } from "./middleware/logger.middleware";
import { globalLimiter } from "./middleware/rateLimiter.middleware";
import { notFound } from "./middleware/notFound.middleware";
import { errorHandler } from "./middleware/error.middleware";

const app = express();

// Security
app.use(
  helmet({
    crossOriginResourcePolicy: { policy: "cross-origin" },
  }),
);
console.log("CORS_ORIGIN:", process.env.CORS_ORIGIN);
app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
  }),
);

// Performance


// Body parser
app.use(express.json());

// Core middleware

app.use(logger);

// Rate limiter (better on auth only in real apps)
app.use(globalLimiter);

// Health check
app.get("/health", (req, res) => {
  res.status(200).json({
    success: true,
    uptime: process.uptime(),
    timestamp: new Date().toISOString(),
  });
});

// Routes (recommended versioning)
app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/users", userRoutes);

// 404 + error handler
app.use(notFound);
app.use(errorHandler);

export default app;
