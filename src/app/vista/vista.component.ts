import { Component, OnInit } from '@angular/core';
import { Automovil } from '../Automoviles/automovil.model';
import { AutomovilesService } from '../Automoviles/automoviles.service';

@Component({
  selector: 'app-vista',
  templateUrl: './vista.component.html',
  styleUrls: ['./vista.component.css']
})
export class VistaComponent implements OnInit{
  automovil: Automovil | any = {}

  constructor(private autoService: AutomovilesService) { }

  ngOnInit(): void {
    this.autoService.autoSubject.asObservable()
      .subscribe(p => { this.cargarAutomovil(p) })
  }

  cargarAutomovil(placas: string) {
    this.autoService.getAutomovilPorPlacas(placas)
      .subscribe(auto => { this.automovil = auto})
  }

}
