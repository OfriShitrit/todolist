// server.js
const express = require("express");
const axios = require("axios");

const app = express();

app.get("/tasks/", async (req, res) => {
  try {
    const response = await axios.get("http://127.0.0.1:8000/api/tasks/");
    const data = response.data;
    res.json(data); // Return the data as the server response
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});

module.exports = app;
