import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Automoviles } from './Automoviles/Automoviles.component';
import { EjemploBasico } from './EjemploBasico/EjemploBasico.component';

const routes: Routes = [
  {
    path:'',
    component: EjemploBasico
  },
  {
    path:'automoviles',
    component: Automoviles
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
