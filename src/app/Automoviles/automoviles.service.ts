import { Injectable } from "@angular/core"
import { Automovil } from "./automovil.model";

@Injectable({
  providedIn: "root"
})
export class AutomovilesService {

  getAutomoviles() : Automovil[] {
    return [

    ];
  }
}
