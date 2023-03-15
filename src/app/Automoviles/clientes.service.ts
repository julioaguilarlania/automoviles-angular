import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Cliente } from "./cliente.model";

export class ClientesService {

  BACKEND_URL = 'http://localhost:8080'
  constructor(private http:HttpClient) {}

  getClientes() : Observable<Cliente[]>
  {
    return this.http
      .get<Cliente[]>(this.BACKEND_URL + '/clientes');
  }
}
