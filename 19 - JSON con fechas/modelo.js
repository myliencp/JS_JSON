export class Persona {
    constructor(nombre, apellido,fecha_nacimiento) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.fecha_nacimiento = fecha_nacimiento;
    }
    fechaConFormato() {
        return new Date(this.fecha_nacimiento).toLocaleDateString("es-ES", options); 
    }
    edad() {
        let fecha = new Date();
        let cumple = new Date(this.fecha_nacimiento);
        let edad = (fecha.getFullYear() - cumple.getFullYear());
        let diferenciaMes = fecha.getMonth()-cumple.getMonth();
        if (diferenciaMes < 0 || (diferenciaMes == 0 && fecha.getDate() < cumple.getDate())){
            edad--;
        }
        return edad;
    }
}
let options = { year: 'numeric', month: 'long', day: 'numeric' };