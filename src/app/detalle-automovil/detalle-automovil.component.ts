import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Automovil } from '../Automoviles/automovil.model';
import { AutomovilesService } from '../Automoviles/automoviles.service';

@Component({
  selector: 'app-detalle-automovil',
  templateUrl: './detalle-automovil.component.html',
  styleUrls: ['./detalle-automovil.component.css']
})
export class DetalleAutomovilComponent  implements OnInit {
  automovil: Automovil | any = {}

  constructor(private autoService:AutomovilesService,
    private ruta:ActivatedRoute){}

  ngOnInit(): void {
    this.ruta.params
      .subscribe(pars => {
        if (pars['id']) {
          this.autoService.getAutomovilPorPlacas(pars['id'])
          .subscribe(auto => { this.automovil = auto})
        }
      })
  }
}
