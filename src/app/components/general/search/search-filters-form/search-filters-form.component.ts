import { AbstractControl, FormBuilder, ValidationErrors, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-search-filters-form',
  templateUrl: './search-filters-form.component.html',
  styleUrls: ['./search-filters-form.component.sass']
})
export class SearchFiltersFormComponent implements OnInit {
  filterForm = this.formBuilder.group({
    minAge: [ '', [ Validators.pattern('^[0-9]{2,3}$'), Validators.min(18)] ],
    maxAge: [ '', [ Validators.pattern('^[0-9]{2,3}$') ] ],
    gender: [ '' ]
  });


  constructor(private formBuilder: FormBuilder,
              private dialogRef: MatDialogRef<SearchFiltersFormComponent>) { }

  ngOnInit(): void {
  }

  checkMaxAge(): void {
    if (this.filterForm.controls.minAge.value === ''
        || !this.filterForm.controls.minAge.valid
        || !this.filterForm.controls.maxAge.valid) {
          console.log(!this.filterForm.controls.minAge.value);
          console.log(!this.filterForm.controls.minAge.valid);
          console.log(!this.filterForm.controls.maxAge.valid);
      return;
    }

    const minAge = +this.filterForm.controls.minAge.value!;
    const maxAge = +this.filterForm.controls.maxAge.value!;
    if (maxAge < minAge) {
      this.filterForm.controls.maxAge.setErrors({});
    }
  }

  handleSearchSubmit() {
    console.log(this.filterForm.getRawValue());
    console.log(this.filterForm.valid);
    if (this.filterForm.valid) {
      this.dialogRef.close();
    }
  }
}
