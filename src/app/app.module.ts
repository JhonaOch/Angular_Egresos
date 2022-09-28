import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { CabeceroComponent } from './components/cabecero/cabecero.component';
import { EgresoComponent } from './components/egreso/egreso.component';
import { IngresoComponent } from './components/ingreso/ingreso.component';
import { FormularioComponent } from './components/formulario/formulario.component';
import { FormsModule } from '@angular/forms';
import { IngresoServicio } from './services/ingreso.service';
import { EgresoServicio } from './services/egreso.service';
import { CommonModule } from '@angular/common';


@NgModule({
  declarations: [
    AppComponent,
    CabeceroComponent,
    EgresoComponent,
    IngresoComponent,
    FormularioComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    CommonModule,
    AppRoutingModule
  ],
  providers: [
    IngresoServicio,
    EgresoServicio
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
