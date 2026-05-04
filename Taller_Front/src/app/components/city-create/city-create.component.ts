import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

/*
 * Implementar: HU-02 — Crear Ciudad
 */

@Component({
  selector: 'app-city-create',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './city-create.component.html'
})
export class CityCreateComponent {
  @Output() cityCreated = new EventEmitter<void>();
  @Output() cancel = new EventEmitter<void>();
}
