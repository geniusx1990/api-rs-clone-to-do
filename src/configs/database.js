const { Client } = require("pg");
const client = new Client({
  user: 'me',
  host: 'dpg-cflc8i9gp3ju5h3brhu0-a',
  database: 'api_k4e1',
  password: '8WceEYPDa6QbSWtZZibWnG72haIjsAeq',
  port: 5432,
  /*   user: 'me',
    host: 'localhost',
    database: 'red',
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