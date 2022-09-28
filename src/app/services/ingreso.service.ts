import { Ingreso } from "../models/ingreso";


export class IngresoServicio{
    ingresos:Ingreso[] = [
        new Ingreso ('Salario',14000),
        new Ingreso ('Venta de coche',1500)
    ];



    eliminarIngreso(ingreso:Ingreso){
       const indice:number= this.ingresos.indexOf(ingreso);
       this.ingresos.splice(indice,1);

    }

    agregarIngreso(ingreso:Ingreso){
    this.ingresos.push(ingreso);
    }


}