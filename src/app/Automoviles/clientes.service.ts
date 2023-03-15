import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Cliente } from "./cliente.model";
import { environment } from "src/environments/environment";
@Injectable({
  providedIn:'root'
})
export class ClientesService {

  constructor(private http:HttpClient) {}

  getClientes() : Observable<Cliente[]>
  {
    return this.http
      .get<Cliente[]>(environment.BACKEND_URL + '/clientes');
  }
}
