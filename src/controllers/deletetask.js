const client = require("../configs/database");


//DELETE task Function

exports.deletetask = async (req, res) => {
    const id = req.params.id;
    try {
        const tasks = await client.query(`DELETE FROM tasks WHERE id = $1 RETURNING *`, [id])
        res.json(tasks.rows[0]);

    }
    catch (err) {
        console.log(err);
        res.status(400).json({
            error: "Database error",
        });
    };
}