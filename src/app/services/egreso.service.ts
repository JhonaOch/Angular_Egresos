import { Egreso } from "../models/egreso";


export class EgresoServicio{
    egresos:Egreso[] = [
        new Egreso ('Renta Dept',9000),
        new Egreso ('Ropa ',200)
    ];

    
    eliminarIngreso(egreso:Egreso){
        const indice:number= this.egresos.indexOf(egreso);
        this.egresos.splice(indice,1);
 
     }

     agregarEgreso(egreso:Egreso){
        this.egresos.push(egreso);
    }
 

}