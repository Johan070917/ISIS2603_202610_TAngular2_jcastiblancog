import { Component, EventEmitter, OnInit, Output, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { Country } from '../../models/country.model';
import { CityService } from '../../services/city.service';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-city-create',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './city-create.component.html'
})
export class CityCreateComponent implements OnInit {
  private cityService = inject(CityService);
  private countryService = inject(CountryService);

  @Output() cityCreated = new EventEmitter<void>();
  @Output() cancel = new EventEmitter<void>();

  countries: Country[] = [];
  name: string = '';
  selectedCountryId: number | null = null;

  ngOnInit(): void {
    this.countryService.getCountries().subscribe(countries => this.countries = countries);
  }

  isValid(): boolean {
    return this.name.trim() !== '' && this.selectedCountryId !== null;
  }

  save(): void {
    if (!this.isValid() || this.selectedCountryId === null) return;
    this.cityService.createCity(this.selectedCountryId, { name: this.name.trim() })
      .subscribe(() => this.cityCreated.emit());
  }

  onCancel(): void {
    this.cancel.emit();
  }
}
