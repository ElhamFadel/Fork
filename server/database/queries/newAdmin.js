const connection = require("../connection")
module.exports = (userName,password) =>{
    return connection.query("INSERT INTO admin (username, password) VALUES($1,$2)",[userName,password])
}
