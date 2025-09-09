import dotenv from "dotenv";
dotenv.config();

import express from "express";
import app from "./app.js";
import connectToDb from "./db/index.js";

const PORT = process.env.PORT || 3000;

// Connect to Database
await connectToDb();

app.get("/", (req, res) => {
  res.status(200).json({
    msg: "Hello Server",
  });
});

// import the routes
import healthCheckRouter from "./routes/health.routes.js";
import authRouter from "./routes/auth.routes.js";

app.use("/api/v1/healthcheck", healthCheckRouter);
app.use("/api/v1/auth", authRouter);

app.listen(PORT, () => {
  console.log(`server start at  port at http://localhost:${PORT}`);
});
