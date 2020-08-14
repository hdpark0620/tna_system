const dotenv = require('dotenv') 
const path = require('path') 
if (!process.env.MYSQL_HOST) { 
    dotenv.config({ 
        path: path.join(__dirname, "..", ".env") 
    }) 
} 
module.exports = { 
    host: process.env.MYSQL_HOST, 
    username: 'tna_system', 
    password: 'tna_system', 
    port: process.env.MYSQL_PORT, 
    database: 'tna_system', 
    dialect: 'mysql' 
}