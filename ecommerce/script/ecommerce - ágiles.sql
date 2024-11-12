drop database ecommerce;
create database ecommerce;
use ecommerce;

create table if not exists usuarios(
	id bigint primary key,
    nombre varchar(50) not null,
    correo varchar(30) not null,
    password varchar(30) not null
); 


create table if not exists promociones(
	id bigint primary key,
    nombre varchar(20),
    porcentaje float
);

create table if not exists ventas(
	id bigint primary key,
    fecha TIMESTAMP DEFAULT CURRENT_TIMESTAMP, 
    precioTotal float not null,
    idUsuario bigint not null,
    foreign key(idUsuario) references usuarios(id)
);

create table if not exists productos(
	id bigint primary key,
	nombre varchar(200),
    precio float not null,
    idPromocion bigint,
    foreign key(idPromocion) references promociones(id)
);

create table if not exists pagos(
	id bigint primary key,
    metodoPago ENUM("PAGO EN OXXO", "TARJETA DE CREDITO/DEBITO", "PAYPAL") NOT NULL,
    monto float not null,
    idVenta bigint not null,
    foreign key(idVenta) references ventas(id)
);

create table if not exists ventaProductos(
	id bigint primary key,
	idProducto bigint not null,
	idVenta bigint not null,
	precioVenta float not null,
    foreign key(idProducto) references productos(id),
    foreign key(idVenta) references ventas(id)
);