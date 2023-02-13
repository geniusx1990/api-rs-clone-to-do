const express = require('express');

const router = express.Router();

const { register } = require("../controllers/register");

const { login } = require("../controllers/login");

const { getusers } = require("../controllers/getusers");

const { addtask } = require("../controllers/addtask");


router.post('/register', register); //POST request to register the user

router.post('/login', login); // POST request to login the user

router.get('/getusers/:email', getusers); //GET request to see table users

router.post('/addtask', addtask); // POST request to add task for user

module.exports = router;