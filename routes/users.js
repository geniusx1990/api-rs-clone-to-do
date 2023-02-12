const express = require('express');

const router = express.Router();

const { register } = require("../controllers/register");

const { login } = require("../controllers/login");

const { getusers } = require("../controllers/getusers");


router.post('/register', register); //POST request to register the user

router.post('/login', login); // POST request to login the user

router.get('/getusers', getusers); //GET request to see table users

module.exports = router;