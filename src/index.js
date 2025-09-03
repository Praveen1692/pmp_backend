import dotenv from "dotenv";
import express from "express";
import app from "./app.js"

dotenv.config();


const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.status(200).json({
    msg:"Hello Server"
  });
});

app.listen(PORT, () => {
  console.log(`server start at  port at http://localhost:${PORT}`);
});
