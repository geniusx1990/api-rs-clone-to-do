const bcrypt = require("bcrypt");

const client = require("../configs/database");

const jwt = require("jsonwebtoken");

//Registration Function

exports.register = async (req, res) => {
    const { name, email, phonenumber, password } = req.body;
    try {
        const data = await client.query(`SELECT * FROM users WHERE email= $1;`, [email]); //Checking if user already exists
        const arr = data.rows;
        if (arr.length != 0) {
            return res.status(400).json({
                error: "Email already there, No need to register again.",
            });
        }
        else {
            bcrypt.hash(password, 10, (err, hash) => {
                if (err)
                    res.status(err).json({
                        error: "Server error",
                    });
                const user = {
                    name,
                    email,
                    phonenumber,
                    password: hash,
                };

                //Inserting data into the database

                client
                    .query(`INSERT INTO users (name, email, phonenumber, password) VALUES ($1,$2,$3,$4);`, [user.name, user.email, user.phonenumber, user.password], (err) => {

                        if (err) {
                            console.error(err);
                            return res.status(500).json({
                                error: "Database error"
                            })
                        }
                        else {
                            res.status(200).send({ message: 'User added to database, not verified' });
                        }
                    })
            });
        }
    }
    catch (err) {
        console.log(err);
        res.status(500).json({
            error: "Database error while registring user!", //Database connection error
        });
    };
}