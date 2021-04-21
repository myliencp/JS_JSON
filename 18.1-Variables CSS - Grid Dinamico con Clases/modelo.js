import * as miLibreria from "./libreria.js"

export class Articulo {
    constructor(codigo, descripcion,cantidad,precio) {
    this.codigo = codigo;
    this.descripcion = descripcion;
    this.cantidad = cantidad;
    this.precio = precio;
    }
    precioConFormato() {
        return miLibreria.formatter.format(this.precio);
    }
    subtotal() {
        return (this.cantidad * this.precio);
    }
    igic() {
        return parseFloat((this.subtotal() * 0.07).toFixed(2));
    }
    total() {
        return (this.subtotal() + this.igic());
    }
    subtotalConFormato() {
        return miLibreria.formatter.format(this.subtotal());
    }
    igicConFormato() {
        return miLibreria.formatter.format(this.igic());
    }
    totalConFormato() {
        return miLibreria.formatter.format(this.total());
    }
}