import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

import { TripFilters, GENDER_OPTIONS } from '../../../interfaces/Trip';

@Component({
  selector: 'app-trip-filters-form',
  templateUrl: './trip-filters-form.component.html',
  styleUrls: ['./trip-filters-form.component.sass']
})
export class TripFiltersFormComponent implements OnInit {
  @Output() tripFiltersSubmit = new EventEmitter<TripFilters>()

  genderOptions = GENDER_OPTIONS;
  filterForm = this.formBuilder.group({
    minAge: [ '', [ Validators.pattern('^[0-9]{2,3}$'), Validators.min(18)] ],
    maxAge: [ '', [ Validators.pattern('^[0-9]{2,3}$') ] ],
    gender: [ undefined ]
  });

  constructor(private formBuilder: FormBuilder) {

  }

  ngOnInit(): void {
  }

  checkMaxAge(): void {
    const minAge = +this.filterForm.controls.minAge.value!;
    const maxAge = +this.filterForm.controls.maxAge.value!;
    if (maxAge < minAge) {
      this.filterForm.controls.maxAge.setErrors({ maxAgeLessThanMin: true });
    } else {
      this.filterForm.controls.maxAge.setErrors(null);
    }
  }

  handleTripFiltersSubmit() {
    if (!this.filterForm.valid)   return;

    const formValues = this.filterForm.getRawValue();
    const filters: TripFilters = {
      gender: formValues.gender,
      ageRange: {
        min: formValues.minAge ? +formValues.minAge : undefined,
        max: formValues.maxAge ? +formValues.maxAge : undefined
      }
    };

    this.tripFiltersSubmit.emit( filters );
  }
}
