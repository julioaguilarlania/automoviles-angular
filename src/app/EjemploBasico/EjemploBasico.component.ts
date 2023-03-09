import { Component } from "@angular/core";

@Component({
  selector:"app-ejemplo",
  templateUrl:"./EjemploBasico.component.html"
})
export class EjemploBasico {
  mensaje:string = "Hello world";
  comilla:string = '"';
  apostrofe:string = "'";
  contador:number = 0;
  datos:string[] = ["a","be","ce"];

  incrementarContador() {
    console.log("incrementar");
    this.contador++;
  }

  decrementarContador() {
    console.log("decrementar");
    this.contador--;
  }
}
