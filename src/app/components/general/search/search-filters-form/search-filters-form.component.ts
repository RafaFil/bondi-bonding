import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

import { SearchFilters } from './../../../../interfaces/SearchFilters';

@Component({
  selector: 'app-search-filters-form',
  templateUrl: './search-filters-form.component.html',
  styleUrls: ['./search-filters-form.component.sass']
})
export class SearchFiltersFormComponent implements OnInit {
  @Output() searchFiltersSubmit = new EventEmitter<SearchFilters>()

  filterForm = this.formBuilder.group({
    minAge: [ '', [ Validators.pattern('^[0-9]{2,3}$'), Validators.min(18)] ],
    maxAge: [ '', [ Validators.pattern('^[0-9]{2,3}$') ] ],
    gender: [ '' ]
  });

  // poner en funcion y lnkear a atributo disabled del formcontrol
  get disableMaxAge(): boolean {
    return !this.filterForm.controls.minAge.value &&
           !this.filterForm.controls.minAge.valid;
  }

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
  }

  // DESHABILITAR CAMPO SI NO HAY MINAGE
  checkMaxAge(): void {
    console.log()
    if (!this.filterForm.controls.maxAge.valid) {
      return;
    }

    const minAge = +this.filterForm.controls.minAge.value!;
    const maxAge = +this.filterForm.controls.maxAge.value!;
    if (maxAge < minAge) {
      this.filterForm.controls.maxAge.setErrors({});
    }
  }

  handleSearchSubmit() {
    if (!this.filterForm.valid)   return;

    const formValues = this.filterForm.getRawValue();
    const filters: SearchFilters = {
      gender: formValues.gender
    };

    if (formValues.minAge && formValues.maxAge) {
      filters.ageRange = { min: +formValues.minAge, max: +formValues.maxAge };
    }

    this.searchFiltersSubmit.emit( filters );
  }
}
