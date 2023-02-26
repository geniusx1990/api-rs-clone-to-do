const express = require('express');

const router = express.Router();

const { register } = require("../controllers/register");

const { login } = require("../controllers/login");

const { getusers } = require("../controllers/getusers");

const { addtask } = require("../controllers/addtask");

const { gettasks } = require("../controllers/gettasks");

//const { updatetask } = require("../controllers/updatetask")

const { deletetask } = require("../controllers/deletetask")

const { completed } = require("../controllers/completed")

const { addpost } = require("../controllers/addpost");

const { getposts } = require("../controllers/getposts");


router.post('/register', register); //POST request to register the user

router.post('/login', login); // POST request to login the user

router.get('/getusers/:email', getusers); //GET request to see table users

router.post('/addtask', addtask); // POST request to add task for user

router.get('/gettasks', gettasks); // GET request to get tasks for user

//router.put('/updatetask', updatetask); // PUT request to get update task

router.delete('/deletetask/:id', deletetask); // DELETE request to delete task

router.put('/completed', completed); // PUT request to COMPLETE task

router.post('/addpost', addpost); // POST request to add post for task

router.get('/getposts', getposts); // GET request to get posts for user

module.exports = router;