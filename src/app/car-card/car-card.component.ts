import { Component, Input } from '@angular/core';
import { Carro } from '../produto';

@Component({
  selector: 'app-car-card',
  templateUrl: './car-card.component.html',
  styleUrls: ['./car-card.component.css']
})
export class CarCardComponent {
  @Input() carro!: Carro;
}
