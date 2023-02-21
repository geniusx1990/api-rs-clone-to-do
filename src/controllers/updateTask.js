const client = require("../configs/database");

//update task Function            
/* exports.updatetask = async (req, res) => {
    const { id, title, content, completed, user_id } = req.body;
    try {
        const updatedTask = await client.query(`UPDATE tasks set title = $1, content = $2, completed = $3, user_id = $4 where id = $5 RETURNING *`, [title, content, completed, user_id, id]) //Updating data into tasks table
        res.json(updatedTask.rows[0])
        //res.status(200).send({ message: 'New Task added to database' });

    } catch (err) {
        console.log(err);
        res.status(500).json({
            error: "Database connection error!", //Database connection error
        });
    };
}; */


exports.updatetask = async (req, res) => {
    const { id, completed } = req.body;
    try {
        const updatedTask = await client.query(`UPDATE tasks set completed = $1 where id = $2 RETURNING *`, [completed, id]) //Updating data into tasks table
        res.json(updatedTask.rows[0])
        //res.status(200).send({ message: 'New Task added to database' });

    } catch (err) {
        console.log(err);
        res.status(500).json({
            error: "Database connection error!", //Database connection error
        });
    };
};

