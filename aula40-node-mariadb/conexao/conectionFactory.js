import mariadb from 'mariadb';

export const pool = mariadb.createPool({
    host:'127.0.0.1',
    user:'',
    password:'',
    database:'lojadb',
    connectionLimit:5
});
