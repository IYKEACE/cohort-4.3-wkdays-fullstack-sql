import express from "express";
import dotenv from "dotenv";
import createConnectionToDB from "../backend/database/connection.js";
import authRoutes from "./routes/auth.route.js";
import morgan from "morgan";
import cors from "cors"

dotenv.config();

const app = express();
//middlewere/parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// loggers
app.use(morgan("dev"));
app.use(cors());
const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.status(200).json({
    message: "welcome to SQL Database",
  });
});

createConnectionToDB();

app.use("/api/v1", authRoutes);

app.listen(port, (req, res) => {
  console.log(`server running on localhost: ${port}`);
});
