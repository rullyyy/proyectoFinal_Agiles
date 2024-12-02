-- modulo de pagos
create database ecommercePagos;
use ecommercePagos;
create table if not exists pagos(
	id bigint primary key,
    monto float not null,
	fecha TIMESTAMP DEFAULT CURRENT_TIMESTAMP, 
    idVenta bigint not null
);