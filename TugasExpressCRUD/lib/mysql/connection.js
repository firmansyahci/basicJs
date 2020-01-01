const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'db_task'
});

connection.connect((err) => {
    if (err) throw err;
    return console.log('Database Connected');
});

module.exports = connection;