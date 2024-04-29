const express = require("express");
const app = express();

const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const fileUpload = require("express-fileupload");

const path = require("path");
const { encodeBase64 } = require("bcryptjs");

require("dotenv").config({ path: "backend/config/config.env" });
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(fileUpload());

const categoryRoute = require('../backend/routes/category');
app.use(categoryRoute)
module.exports = app;
