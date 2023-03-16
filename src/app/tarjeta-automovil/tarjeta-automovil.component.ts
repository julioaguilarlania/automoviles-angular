import { Component, Input } from '@angular/core';
import { Automovil } from '../Automoviles/automovil.model';

@Component({
  selector: 'app-tarjeta-automovil',
  templateUrl: './tarjeta-automovil.component.html',
  styleUrls: ['./tarjeta-automovil.component.css']
})
export class TarjetaAutomovilComponent {
  @Input() item: Automovil | any = {}
}
