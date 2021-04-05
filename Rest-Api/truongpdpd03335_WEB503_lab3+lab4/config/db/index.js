const mysql = require("mysql")
//config mysql
const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "bookstore"
})

module.exports = db