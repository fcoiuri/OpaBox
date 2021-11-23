const express = require("express");
const router = express.Router();
const { check, validationResult, matchedData } = require("express-validator");


router.get("/", (req, res) => {
    res.render("index");
})