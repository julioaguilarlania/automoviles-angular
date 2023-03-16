import { Component, OnInit } from '@angular/core';
import { Automovil } from '../Automoviles/automovil.model';
import { AutomovilesService } from '../Automoviles/automoviles.service';

@Component({
  selector: 'app-lista-automoviles',
  templateUrl: './lista-automoviles.component.html',
  styleUrls: ['./lista-automoviles.component.css']
})
export class ListaAutomovilesComponent implements OnInit{
  listaAutomoviles: Automovil[] = []

  constructor(private autoService: AutomovilesService) {}

  ngOnInit(): void {
      this.autoService.getAutomoviles().subscribe(
        lista => { this.listaAutomoviles = lista}
      )
  }
}
