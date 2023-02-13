const bcrypt = require("bcrypt");

const client = require("../configs/database");

const jwt = require("jsonwebtoken");

//add task Function            
exports.addtask = async (req, res) => {
    const { title, content, completed, user_id} = req.body;
    try {
        const newTask = await client.query(`INSERT INTO tasks (title, content, completed, user_id) values ($1, $2, $3, $4);`, [title, content, completed, user_id]) //Inserting data into tasks table
        res.json(newTask.rows[0])
        //res.status(200).send({ message: 'New Task added to database' });
       
    } catch (err) {
        console.log(err);
        res.status(500).json({
            error: "Database connection error!", //Database connection error
        });
    };
};
