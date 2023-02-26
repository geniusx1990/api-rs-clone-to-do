const client = require("../configs/database");


//Get Posts Function

exports.getposts = async (req, res) => {
    const task_id = req.query.task_id;
    try {
        const posts = await client.query(`SELECT * FROM posts WHERE task_id = $1 ORDER BY id ASC;`, [task_id])
        res.json(posts.rows);
        

      /*   res.status(200).json({
            message: "tasks info is: ",
            data: res.json(posts.rows),
        }); */
    }
    catch (err) {
        console.log(err);
        res.status(400).json({
            error: "Database error",
        });
    };
}