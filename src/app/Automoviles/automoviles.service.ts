import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core"
import { Observable, of } from "rxjs";
import { Automovil } from "./automovil.model";

@Injectable({
  providedIn: "root"
})
export class AutomovilesService {

  BACKEND_URL = 'http://localhost:8080'
  constructor(private http:HttpClient) {}

  getAutomoviles() : Observable<Automovil[]> {
    return this.http
      .get<Automovil[]>(this.BACKEND_URL + '/vehiculos')
    /*
    return of([
      {
        placas:"PYQ1839",
        marca:"AAA",
        modelo:"AAA 2023",
        color:"Azul",
        kilometraje: 230
      },
      {
        placas:"RTQ1839",
        marca:"BBB",
        modelo:"BBB 2021",
        color:"Verde",
        kilometraje: 172
      }
    ])
    */
  }

  getAutomovilPorPlacas(placas: string) : Observable<Automovil>
  {
    return this.http
      .get<Automovil>(this.BACKEND_URL + '/vehiculos/' + placas)
  }

  crearAutomovil(objeto: Automovil) : Observable<Automovil>
  {
    if (!objeto.cliente) {
      objeto.cliente = {clienteId: 1, nombre:'',curp:'',fechaRegistro:new Date()}
    }
    return this.http
      .post<Automovil>(this.BACKEND_URL+'/vehiculos', objeto)
  }
}
