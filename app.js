const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const adminRouter = require("./Routes/AdminRoute");
const employeeRouter = require("./Routes/EmployeeRouter");
const helmet = require("helmet");

const app = express();

app.use(express.static("public"));

// ===========================     MIDDLE-WARES    ========================

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());
app.use(helmet());

const port = 3000;

app.use("/api/admin", adminRouter);
app.use("/api/employee", employeeRouter);

module.exports = app;
