const {Pool} = require('pg')
require('env2')("./config.env")
const options = {
    connectionString: process.env.DB_URL,
    ssl: false,
}
module.exports= new Pool(options)