const client = require("../configs/database");


//Get Users Function

exports.gettasks = async (req, res) => {
    const user_id = req.query.user_id;
    try {
        const tasks = await client.query(`SELECT * FROM tasks WHERE user_id = $1 ORDER BY id ASC;`, [user_id])
        res.json(tasks.rows);
        

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