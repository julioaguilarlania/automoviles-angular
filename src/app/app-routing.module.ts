import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Automoviles } from './Automoviles/Automoviles.component';
import { DetalleAutomovilComponent } from './detalle-automovil/detalle-automovil.component';
import { EjemploBasico } from './EjemploBasico/EjemploBasico.component';

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
    path:'automoviles/:id',
    component: DetalleAutomovilComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
