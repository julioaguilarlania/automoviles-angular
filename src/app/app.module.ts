import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule}  from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Automoviles } from './Automoviles/Automoviles.component';
import { EjemploBasico } from './EjemploBasico/EjemploBasico.component';
import { DetalleAutomovilComponent } from './detalle-automovil/detalle-automovil.component';
import { FormularioAutomovilComponent } from './formulario-automovil/formulario-automovil.component';
import { FormsModule } from '@angular/forms';
import { TarjetaAutomovilComponent } from './tarjeta-automovil/tarjeta-automovil.component';
import { ListaTarjetasComponent } from './lista-tarjetas/lista-tarjetas.component';
import { ListaConVistaComponent } from './lista-con-vista/lista-con-vista.component';
import { VistaComponent } from './vista/vista.component';

@NgModule({
  declarations: [
    AppComponent,EjemploBasico, Automoviles, DetalleAutomovilComponent, FormularioAutomovilComponent, TarjetaAutomovilComponent, ListaTarjetasComponent, ListaConVistaComponent, VistaComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
