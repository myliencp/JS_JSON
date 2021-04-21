import * as miLibreria from "./libreria.js"

export class Articulo{
    constructor(Codigo, Descripcion, Cantidad, Precio){
        this.Codigo = Codigo;
        this.Descripcion = Descripcion;
        this.Cantidad = parseFloat(Cantidad);            
        this.Precio = parseFloat(Precio);    
    }
    subtotal(){
        return (this.Cantidad * this.Precio);
    }
    igic(){                 
        return parseFloat((this.subtotal() * 0.07).toFixed(2));
    }

    total(){
        return (this.subtotal() + this.igic());  
    }

    totalConFormato (){ 
        return miLibreria.formatter.format(this.total());
    }
}

//     totalConFormato = function(){ //Declarada asi se agrega como propiedad virtual
//         return miLibreria.formatter.format(this.total());
//     }
