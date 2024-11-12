-- modulo de productos

create table if not exists productos(
	id bigint primary key,
	nombre varchar(200),
    precio float not null,
    idPromocion bigint
);