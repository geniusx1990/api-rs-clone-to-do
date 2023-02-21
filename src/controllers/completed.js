const client = require("../configs/database");


exports.completed = async (req, res) => {
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

