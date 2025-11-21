import dotenv from "dotenv";
import express from "express";

dotenv.config({
  path: "./.env",
});

const app = express();
const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.get("/instagram", (req, res) => {
  res.send("This is an instagram");
});

app.listen(port, () => {
  console.log(`Server listening on port http://localhost:${port}`);
});