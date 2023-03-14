import { Component } from '@angular/core';
import { Automovil } from '../Automoviles/automovil.model';
import { AutomovilesService } from '../Automoviles/automoviles.service';

@Component({
  selector: 'app-formulario-automovil',
  templateUrl: './formulario-automovil.component.html',
  styleUrls: ['./formulario-automovil.component.css']
})
export class FormularioAutomovilComponent {
  automovil: Automovil | any = {}

  constructor(private autoService:AutomovilesService) {}

  guardar() {
    this.automovil.cliente = {clienteId:1}
    this.autoService.crearAutomovil(this.automovil)
      .subscribe({
        next: res => console.log('creado'),
        error: err => console.log('ERROR', err)
      })
  }
}
