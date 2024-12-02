const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    port: 3307,
    password: '1234',
    database: 'ecommerce'
});

connection.connect((err) => {
    if (err) {
        console.error('Error:', err);
        return;
    }
    console.log('Conexion con la db en Docker');
});

module.exports = connection;