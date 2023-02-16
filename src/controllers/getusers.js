const bcrypt = require("bcrypt");

const client = require("../configs/database");

const jwt = require("jsonwebtoken");

//Get Users Function

exports.getusers = async (req, res) => {
    const email = req.params.email;
    try {
        const data = await client.query(`SELECT * FROM users WHERE email = $1;`, [email])
        const userData = data.rows;
        const filterData = userData.map((user) => {
            return {
                user_id: user.id,
                name: user.name,
                email: user.email,
                contact: user.phonenumber
            };
        });

        res.status(200).json({
            message: "user info is: ",
            data: filterData,
        });
    }
    catch (err) {
        console.log(err);
        res.status(400).json({
            error: "Database error",
        });
    };
}