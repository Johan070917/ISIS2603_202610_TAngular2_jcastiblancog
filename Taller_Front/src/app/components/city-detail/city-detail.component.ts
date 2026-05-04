import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { City } from '../../models/city.model';

/*
 * Implementar: HU-03 — Detalle de Ciudad con Clima
 */

@Component({
  selector: 'app-city-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './city-detail.component.html'
})
export class CityDetailComponent {
  @Input() city!: City;
}
