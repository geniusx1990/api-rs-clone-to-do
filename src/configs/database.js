const { Client } = require("pg");
const client = new Client({
  user: 'me',
  host: 'dpg-cfuh1b9gp3jl07enhrm0-a',
  database: 'api_database_q02a',
  password: '5ONpoq5WzQOitEtoNiD75qQk2frtAGyK',
  port: 5432,
  /* user: 'me',
  host: 'localhost',
  database: 'cyprus',
  password: 'password',
  port: 5432, */

})


module.exports = client;


//for testing 
/*   user: 'me',
     host: 'localhost',
     database: 'red',
     password: 'password',
     port: 5432, */