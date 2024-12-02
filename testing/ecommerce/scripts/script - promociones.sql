-- modulo de promociones

create database ecommercePromociones;
use ecommercePromociones;
create table if not exists promociones(
	id bigint primary key,
    nombre varchar(20),
    porcentaje float
);