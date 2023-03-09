import { Component, OnInit } from "@angular/core";
import { Automovil } from "./automovil.model";
import { AutomovilesService } from "./automoviles.service";

@Component({
  selector:"app-automoviles",
  templateUrl:"./Automoviles.component.html"
})
export class Automoviles implements OnInit {

  listaAutomoviles:Automovil[] = [];
  constructor(private autoService: AutomovilesService) {}

  ngOnInit(): void {
    this.listaAutomoviles = this.autoService.getAutomoviles();
  }
}
