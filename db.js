const sql = require('mysql2/promise');
require('dotenv').config();


const connect = sql.createPool({
    host:process.env.HOST,
    user:process.env.USER,
    password:process.env.PASSWORD,
    database:process.env.DATABASE
})



module.exports = connect;