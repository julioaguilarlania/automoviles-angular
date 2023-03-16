import { Component, OnInit } from '@angular/core';
import { Automovil } from '../Automoviles/automovil.model';
import { AutomovilesService } from '../Automoviles/automoviles.service';

@Component({
  selector: 'app-lista-tarjetas',
  templateUrl: './lista-tarjetas.component.html',
  styleUrls: ['./lista-tarjetas.component.css']
})
export class ListaTarjetasComponent  implements OnInit{
  listaAutomoviles: Automovil[] = []

  constructor(private autoService: AutomovilesService) {}

  ngOnInit(): void {
      this.autoService.getAutomoviles().subscribe(
        lista => { this.listaAutomoviles = lista}
      )
  }
}
