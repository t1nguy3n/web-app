const sql = require('mysql');

const connection = sql.createConnection({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE
});

connection.connect((err) => {
    if (err) {
        // eslint-disable-next-line
        console.error('Could not establish MySQL connection!');
        process.exit(1);
    }
});

const query = (sqlQuery) => new Promise((resolve, reject) => {
    connection.query(sqlQuery, (err, res) => {
        if (err) {
            reject(err);
        }
        resolve(res);
    });
});

module.exports = query;