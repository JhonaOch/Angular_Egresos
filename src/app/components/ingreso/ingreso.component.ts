import { Component, OnInit } from '@angular/core';
import { Ingreso } from 'src/app/models/ingreso';
import { IngresoServicio } from 'src/app/services/ingreso.service';

@Component({
  selector: 'app-ingreso',
  templateUrl: './ingreso.component.html',
  styleUrls: ['./ingreso.component.css']
})
export class IngresoComponent implements OnInit {

  ingreso:Ingreso[]=[];

  constructor(private ingresoServicio:IngresoServicio) {
   

   }

  ngOnInit(): void {
    this.ingreso=this.ingresoServicio.ingresos;
  }

  eliminarRegistro(ingreso:Ingreso){
    this.ingresoServicio.eliminarIngreso(ingreso);



  }

}
