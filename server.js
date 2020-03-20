const mariadb = require('mariadb');
const pool = mariadb.createPool({
    host: 'localhost',
    user: 'root',
    password: 'aamir100%',
    database: 'firstdbnode',
    connectionLimit: 5
});
module.exports = pool;