const express = require('express');
const router = express.Router();
const rabbit = require('../rabbit');

router.get('/catalog', async (req, res) => {
    try {
        const solicitudQueue = 'solicitudes_productos';
        const respuestaQueue = 'respuestas_productos';
        const mensaje = { accion: 'consultar_productos' };

        // Conectar a RabbitMQ y obtener un canal
        const channel = await rabbit.getChannel();

        // Asegurar que las colas existan
        await channel.assertQueue(solicitudQueue, { durable: true });
        await channel.assertQueue(respuestaQueue, { durable: true });

        // Enviar solicitud
        channel.sendToQueue(solicitudQueue, Buffer.from(JSON.stringify(mensaje)));
        console.log('Solicitud enviada a RabbitMQ');

        // Consumir la respuesta (una sola vez)
        channel.consume(
            respuestaQueue,
            (msg) => {
                if (msg) {
                    const productos = JSON.parse(msg.content.toString());
                    console.log('Respuesta recibida:', productos);

                    // Renderizar la vista con los productos
                    res.render('catalog', { productos });

                    // Confirmar el mensaje procesado
                    channel.ack(msg);

                    // Cerrar el consumidor
                    channel.close();
                }
            },
            { noAck: false } // Aseguramos que se confirmen los mensajes
        );
    } catch (err) {
        console.error('Error en el flujo de RabbitMQ:', err);
        res.status(500).send('Error al procesar la solicitud');
    }
});

module.exports = router;
