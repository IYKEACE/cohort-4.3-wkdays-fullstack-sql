import express from "express";
import dotenv from "dotenv";
import createConnectionToDB  from "../backend/database/connection.js";

dotenv.config();

const app = express();

const port = process.env.PORT || 3000;

createConnectionToDB();

app.listen(port, (req, res) => {
  console.log(`server running on localhost: ${port}`);
});
