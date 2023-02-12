require("./configs/dotenv");
const express = require("express");
const cors = require("cors");
const app = express(); //Initialized express
const client = require("./configs/database");
client.connect((err) => { //Connected Database

    if (err) {

        console.log(err);

    }

    else {
        client.query(`
            CREATE TABLE IF NOT EXISTS "users" (
            "id" SERIAL PRIMARY KEY,
            "name" text NOT NULL,
            "email" text NOT NULL UNIQUE,
            "phonenumber" text NOT NULL UNIQUE,
            "password" varchar NOT NULL
            );
            `)
        console.log("database connected and table created");
    }

});


app.use(express.json());
app.use(cors());

const port = process.env.PORT || 5000;

app.get("/", (req, res) => {

    res.status(200).send("Serever started");

})

app.listen(port, () => {

    console.log(`Server started at ${port}.`);

})



const user = require("./routes/users");

app.use("/user", user);  //Route for /user endpoint of API