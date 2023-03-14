import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Automovil } from "./automovil.model";
import { AutomovilesService } from "./automoviles.service";

@Component({
  selector:"app-automoviles",
  templateUrl:"./Automoviles.component.html"
})
export class Automoviles implements OnInit {

  listaAutomoviles:Automovil[] = [];
  constructor(private autoService: AutomovilesService,
    private router:Router) {}

  ngOnInit(): void {
    //this.listaAutomoviles = this.autoService.getAutomoviles();
    /*
    this.autoService.getAutomoviles().subscribe({
      next: (lista) => {
        console.log("LISTA", lista)
        this.listaAutomoviles = lista},
      error: (err) => {},
      complete: () => {}
    });
    this.autoService.getAutomoviles().subscribe(
      (lista) => {
        console.log("LISTA", lista)
        this.listaAutomoviles = lista},
      (err) => {},
      () => {}
    );
    */
    this.autoService.getAutomoviles()
      .subscribe(lista => {
        console.log('LISTA', lista)
        this.listaAutomoviles = lista
      })
      console.log('DESPUES DE SUBSCRIBE')
  }

  verDetalle(placas: string) {
    this.router.navigate(['/automoviles', placas])
    //this.router.navigate('/automoviles/'+placas)
  }
}
