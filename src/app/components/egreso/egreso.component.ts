import { Component, Input, OnInit } from '@angular/core';
import { Egreso } from 'src/app/models/egreso';
import { EgresoServicio } from 'src/app/services/egreso.service';

@Component({
  selector: 'app-egreso',
  templateUrl: './egreso.component.html',
  styleUrls: ['./egreso.component.css']
})
export class EgresoComponent implements OnInit {

  @Input() ingresoTotal:number = 0;

  egreso:Egreso[]=[];

  constructor(private egresoServicio:EgresoServicio) { }

  ngOnInit(): void {
    this.egreso=this.egresoServicio.egresos;

  }


  eliminarEgreso(egreso:Egreso){
    this.egresoServicio.eliminarIngreso(egreso);



  }

  calcularPorcentaje(egreso:Egreso){
    return egreso.valor/this.ingresoTotal;
  }



}
