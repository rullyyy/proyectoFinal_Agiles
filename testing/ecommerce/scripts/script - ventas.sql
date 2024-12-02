-- modulo de ventas
create database ecommerceVentas;
create table if not exists ventas(
	id bigint primary key,
    fecha TIMESTAMP DEFAULT CURRENT_TIMESTAMP, 
    precioTotal float not null,
    idUsuario bigint not null
);