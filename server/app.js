require("dotenv").config;
const express = require("express");
const app = express();
const router = require("./router/app.router");
const PORT = process.env.PORT || 5000;

app.use("/api/", router);

app.listen(PORT, () => console.log(`Server is running on Port:${PORT}`));
