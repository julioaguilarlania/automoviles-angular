import { Component } from '@angular/core';
import { Automovil } from '../Automoviles/automovil.model';
import { AutomovilesService } from '../Automoviles/automoviles.service';
import { ClientesService } from '../Automoviles/clientes.service';

@Component({
  selector: 'app-formulario-automovil',
  templateUrl: './formulario-automovil.component.html',
  styleUrls: ['./formulario-automovil.component.css']
})
export class FormularioAutomovilComponent {
  automovil: Automovil | any = {}
  mensaje:string = ''
  idClienteSeleccionado:number = -1

  constructor(private autoService:AutomovilesService,
    private clService:ClientesService) {}

  guardar() {
    this.automovil.cliente = {clienteId:1}
    this.autoService.crearAutomovil(this.automovil)
      .subscribe({
        next: res => { console.log('creado');
          this.mensaje='Vehiculo creado';
          this.automovil = {}
        },
        error: err => console.log('ERROR', err)
      })
  }
}
