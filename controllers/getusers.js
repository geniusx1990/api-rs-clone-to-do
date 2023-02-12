const bcrypt = require("bcrypt");

const client = require("../configs/database");

const jwt = require("jsonwebtoken");

//Registration Function

exports.getusers = async (req, res) => {
    //const { name, email, phonenumber, password } = req.body;
    try {
                client
                    .query(`SELECT * FROM users ORDER BY id ASC;`, (err) => {

                        if (err) {
                            flag = 0; //If user is not inserted is not inserted to database assigning flag as 0/false.
                            console.error(err);
                            return res.status(500).json({
                                error: "Database error"
                            })
                        }
                        else {
                            flag = 1;
                            res.status(200).send({ message: 'Please see all users' });
                            res.status(200).json(res.rows);
                        }
                    })
        
        
    }
    catch (err) {
        console.log(err);
        res.status(500).json({
            error: "Database error while registring user!", //Database connection error
        });
    };
}