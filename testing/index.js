const express = require('express');
const path = require('path');
const catalogoRouter = require('./routes/catalog');
const { connectRabbitMQ } = require('./rabbit');

const app = express();

const PORT = process.env.PORT || 3000;

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));
app.use('/', catalogoRouter);

connectRabbitMQ()
    .then(() => {
        console.log('RabbitMQ está listo');
        app.listen(PORT, () => {
            console.log(`Servidor corriendo en http://localhost:${PORT}`);
        });
    })
    .catch((error) => {
        console.error('Error al conectar a RabbitMQ:', error);
        process.exit(1);
    });