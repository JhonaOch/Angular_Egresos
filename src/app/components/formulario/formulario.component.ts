import { Component, OnInit } from '@angular/core';
import { Egreso } from 'src/app/models/egreso';
import { Ingreso } from 'src/app/models/ingreso';
import { EgresoServicio } from 'src/app/services/egreso.service';
import { IngresoServicio } from 'src/app/services/ingreso.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  tipo:string='ingresoOperacion';
  descripcionInput:string;
  valorInput:number;

  constructor(private ingresoService:IngresoServicio,private egresoService:EgresoServicio) { }

  ngOnInit(): void {
  }


  tipoOperacion(event){
    this.tipo=event.target.value;

  }

  agregarValor(){
    if(this.tipo === "ingresoOperacion" ){
      let data=new Ingreso(this.descripcionInput,this.valorInput);
      this.ingresoService.agregarIngreso(data);

    }else{
      let data=new Egreso(this.descripcionInput,this.valorInput);
      this.egresoService.agregarEgreso(data);
    }

  }

}
