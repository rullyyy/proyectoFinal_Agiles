const amqp = require('amqplib');
const db = require('./db');

const rabbitmqUrl = 'amqp://admin:admin@localhost:5673';
const solicitudQueue = 'solicitudes_productos';
const respuestaQueue = 'respuestas_productos';

async function startConsumer() {
    try {
        const connection = await amqp.connect(rabbitmqUrl);
        const channel = await connection.createChannel();

        await channel.assertQueue(solicitudQueue, { durable: true });
        await channel.assertQueue(respuestaQueue, { durable: true });

        console.log(`Esperando mensajes en la cola: ${solicitudQueue}`);

        channel.consume(solicitudQueue, async (msg) => {
            if (msg !== null) {
                console.log('Mensaje recibido:', msg.content.toString());

                try {
                    const mensaje = JSON.parse(msg.content.toString());
                    console.log('Procesando mensaje:', mensaje);

                    if (mensaje.accion === 'consultar_productos') {
                        db.query('SELECT * FROM productos', (err, resultados) => {
                            if (err) {
                                console.error('Error al consultar productos:', err);
                            } else {
                                const respuesta = JSON.stringify(resultados);
                                channel.sendToQueue(respuestaQueue, Buffer.from(respuesta));
                                console.log('Respuesta enviada a la cola:', respuestaQueue);
                            }
                            channel.ack(msg);
                        });
                    } else {
                        console.log('Acción no reconocida:', mensaje.accion);
                        channel.ack(msg);
                    }
                } catch (err) {
                    console.error('Error al procesar el mensaje:', err);
                    channel.ack(msg);
                }
            }
        });

        console.log('Consumidor iniciado correctamente.');
    } catch (error) {
        console.error('Error al iniciar el consumidor:', error);
    }
}

startConsumer();
