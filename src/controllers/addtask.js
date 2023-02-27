const client = require("../configs/database");


//add task Function            
exports.addtask = async (req, res) => {
    const { title, content, priority, completed, user_id } = req.body;
    try {
        const newTask = await client.query(`INSERT INTO tasks (title, content, priority, completed, user_id) values ($1, $2, $3, $4, $5) RETURNING *`, [title, content, priority, completed, user_id]) //Inserting data into tasks table
        res.json(newTask.rows[0])
        console.log(newTask.rows[0]);
        //res.status(200).send({ message: 'New Task added to database' });

    } catch (err) {
        console.log(err);
        res.status(500).json({
            error: "Database connection error!", //Database connection error
        });
    };
};
