const amqp = require('amqplib');

let connection;
let channel;

async function connectRabbitMQ() {
    try {
        if (!connection) {
            console.log('Intentando conectar a RabbitMQ...');
            connection = await amqp.connect('amqp://localhost');
            console.log('Conexión a RabbitMQ establecida.');
        }

        if (!channel) {
            console.log('Creando canal de RabbitMQ...');
            channel = await connection.createChannel();
            console.log('Canal de RabbitMQ creado.');
        }

        return channel;
    } catch (error) {
        console.error('Error al conectar con RabbitMQ:', error);
        throw error;
    }
}

async function getChannel() {
    if (!channel) {
        console.error('Error: el canal aún no está inicializado.');
        throw new Error('El canal no está inicializado. Llama a connectRabbitMQ primero.');
    }
    return channel;
}

module.exports = { connectRabbitMQ, getChannel };
