const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const router = require("./Routes/Route");
const helmet = require("helmet");

const app = express();

app.use(express.static("public"));

// ===========================     MIDDLE-WARES    ========================

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());
app.use(helmet());

const port = 3000;

app.use("/api/products", router);

module.exports = app;
