import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";
import path from "path";

import { connectDB } from "./DB/connectDB.js";
import authRoutes from "./routes/auth.route.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;
const __dirname = path.resolve();

app.use(cors({ origin: "http://localhost:3000", credentials: true }));
app.use(express.json()); // Allows parsing of JSON requests
app.use(cookieParser()); // Allows parsing of cookies

app.use("/api/auth", authRoutes);

app.use(express.static(path.join(__dirname, "frontend", "dist")));

app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "frontend", "dist", "index.html"));
});

app.listen(PORT, () => {
  connectDB();
  console.log(
    `Server is running in ${process.env.NODE_ENV} mode on port: ${PORT}`
  );
});
