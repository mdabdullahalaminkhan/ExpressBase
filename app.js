//                                      ********** PACKAGES AND MODULES IMPORT **********

// Root package import.
const express = require('express');

// Middleware packages import.
const rateLimit = require('express-rate-limit');
const helmet = require('helmet');
const mongoSanitize = require('express-mongo-sanitize');
const xss = require('xss-clean');
const hpp = require('hpp');
const cors = require('cors');
//const multer = require('multer');
const cookieParser = require('cookie-parser');

// Global packages import.
const mongoose = require('mongoose');
const dotenv = require('dotenv'); // Example of globally applied package

// Helper packages import.
const bcrypt = require('bcrypt');
const jsonwebtoken = require('jsonwebtoken');
const validator = require('validator');

// Local modules import.
const router = require('./src/routes/api');


//                                      ********** PACKAGES AND MODULE IMPLEMENTATION **********

// Implement root package
const app = express();

// Implement security middleware packages
app.use(cors());
app.use(helmet());
app.use(mongoSanitize());
app.use(xss());
app.use(hpp());
app.use(rateLimit({ windowMs: 15 * 60 * 1000, max: 3000 }));

// Implement others middleware packages to limit the data and store the data.
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ extended: true}));
//app.use(multer());
app.use(cookieParser());

// Implement globally applied packages and make a server connection
dotenv.config();
// let URI = process.env.MONGODB_URI || "mongodb+srv://<username>:<password>@cluster0.7uslu.mongodb.net/todo?retryWrites=true&w=majority";
// let OPTION = { user: process.env.DB_USER, pass: process.env.DB_PASS, autoIndex: true }
// mongoose.connect(URI, OPTION, (error) => {
//     console.log("DB Connection Success");
//     console.log(error);
// });

// Implement 3rd party modules as routing middleware

app.get('/homie', (req, res)=>{
    res.send("Bismillahir Rahmaanir Raheem")
})
app.use("/api/v1", router);
app.use("*", (req, res) => {
    res.status(404).json({ status: "fail", data: "Not Found" });
});


// Exporting Express Functionality to index.js file
module.exports = app;
