import express from "express";
import cors from "cors";
const app = express();

// basic configurations
app.use(
  express.json({
    limit: "16kb",
  }),
);

app.use(
  express.urlencoded({
    extended: true,
    limit: "16kb",
  }),
);

//cors configurations
app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
    methods:["GET", "POST", "PUT", "PATCH","DELETE", "OPTIONS"],
    allowedHeaders:["Authorization", "Content-Type"]
  }),
);

app.use(express.static("public"));

export default app;
