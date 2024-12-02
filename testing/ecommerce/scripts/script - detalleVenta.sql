-- modulo del detalle de la venta

create database ecommerceDetalleVenta;
use ecommerceDetalleVenta;
create table if not exists detalleVenta(
	id bigint primary key,
	idProducto bigint not null,
	idVenta bigint not null,
	precioVenta float not null
);