import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Automoviles } from './Automoviles/Automoviles.component';
import { DetalleAutomovilComponent } from './detalle-automovil/detalle-automovil.component';
import { EjemploBasico } from './EjemploBasico/EjemploBasico.component';
import { FormularioAutomovilComponent } from './formulario-automovil/formulario-automovil.component';
import { ListaAutomovilesComponent } from './lista-automoviles/lista-automoviles.component';

const routes: Routes = [
  {
    path:'',
    component: EjemploBasico
  },
  {
    path:'automoviles',
    component: Automoviles
  },
  {
    path:'automoviles/create',
    component: FormularioAutomovilComponent
  },
  {
    path:'automoviles/:id',
    component: DetalleAutomovilComponent
  },
  {
    path:'tarjetas',
    component: ListaAutomovilesComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
