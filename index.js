const express = require("express");
const logger = require("morgan");
const port = 3000;

const path = require("path");
const app = express();

// log requests
app.use(logger("dev"));

app.use(express.static(path.join(__dirname, "public")));

app.listen(port);
console.log(`listening on ${port} 3000`);