import express from "express";
// import cors
import cors from "cors";

const app = express();

// # basic configuration of express -
// app.use -> middleware

// I wnat except json data so express.json formate is defined and set limit 16kb, more than 16kb json data is not allowed.
app.use(express.json({ limit: "16kb" }));

// for except url encoded space 
// URL encoding -> is the process of converting special characters in a URL into a format that web browsers can understand by replacing them with a percent sign (%) followed by the two-digit hexadecimal representation of the character
// extended: true -> for accept regular data or newly formated data 
app.use(express.urlencoded({ extended: true, limit: "16kb" }));

// static assets
app.use(express.static("public"));

// # configurations of cors - 
// CORS is a node.js package for providing a Connect/Express middleware that can be used to enable CORS with various options.
app.use(
  cors({
    // define origin
    origin: process.env.CORS_ORIGIN?.split(",") || "http://localhost:5173",
    credentials: true, // by default it is true
    // support methods
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
  }),
);

app.get("/", (req, res) => {
  res.send("Hello World");
});

export default app;
