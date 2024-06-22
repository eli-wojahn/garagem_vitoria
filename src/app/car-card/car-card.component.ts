import { Component, Input } from '@angular/core';
import { Carro } from '../produto';
import { faCalendar, faTachometerAlt } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-car-card',
  templateUrl: './car-card.component.html',
  styleUrls: ['./car-card.component.css']
})
export class CarCardComponent {
  @Input() carro!: Carro;
  faCalendar = faCalendar;
  faTachometerAlt = faTachometerAlt;
}
