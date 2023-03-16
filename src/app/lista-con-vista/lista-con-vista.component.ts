import { Component } from '@angular/core';
import { Automovil } from '../Automoviles/automovil.model';
import { AutomovilesService } from '../Automoviles/automoviles.service';

@Component({
  selector: 'app-lista-con-vista',
  templateUrl: './lista-con-vista.component.html',
  styleUrls: ['./lista-con-vista.component.css']
})
export class ListaConVistaComponent {
  listaAutomoviles: Automovil[] = []

  constructor(private autoService: AutomovilesService) {}

  ngOnInit(): void {
      this.autoService.getAutomoviles().subscribe(
        lista => { this.listaAutomoviles = lista}
      )
  }

  cargarAutomovil(placas:string) {
    this.autoService.enviarPlacas(placas)
  }
}

