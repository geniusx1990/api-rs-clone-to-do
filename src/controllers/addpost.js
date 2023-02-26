const client = require("../configs/database");


//add task Function            
exports.addpost = async (req, res) => {
    const { content, task_id } = req.body;
    try {
        const newPost = await client.query(`INSERT INTO posts (content, task_id) values ($1, $2) RETURNING *`, [content, task_id]) //Inserting data into posts table
        res.json(newPost.rows[0])
        console.log(newPost.rows[0]);
        //res.status(200).send({ message: 'New Task added to database' });

    } catch (err) {
        console.log(err);
        res.status(500).json({
            error: "Database connection error!", //Database connection error
        });
    };
};
