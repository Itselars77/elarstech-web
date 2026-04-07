<<<<<<< HEAD
const express = require('express');
const app = express();

app.use(express.static(__dirname));

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
=======
const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

// serve static files
app.use(express.static(__dirname));

// send index.html when visiting the homepage
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
>>>>>>> a1b767f02091326c6a9d0ddcd53aaa81ca5bda05
});