import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatBottomSheetRef, MAT_BOTTOM_SHEET_DATA } from '@angular/material/bottom-sheet';

import { SearchFilters } from './../../../../interfaces/SearchFilters';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.sass']
})
export class SearchFormComponent implements OnInit {
  searchForm!: FormGroup;

  get fromControl(): FormControl {
    return this.searchForm.get('from') as FormControl;
  }

  get toControl(): FormControl {
    return this.searchForm.get('to') as FormControl;
  }

  get descriptionControl(): FormControl {
    return this.searchForm.get('description') as FormControl;
  }

  get filtersControl(): FormControl<SearchFilters> {
    return this.searchForm.get('filters') as FormControl<SearchFilters>;
  }

  get clickedBondControl(): FormControl {
    return this.searchForm.get('clickedBond') as FormControl;
  }

  constructor(@Inject(MAT_BOTTOM_SHEET_DATA) private data: {searchForm: FormGroup},
              private bottomSheetRef: MatBottomSheetRef<SearchFormComponent>)
  {
    this.searchForm = this.data.searchForm;
  }

  ngOnInit(): void {
    this.clickedBondControl.setValue(false);
  }

  handleBondClick() {
    this.clickedBondControl.setValue(true);
    this.bottomSheetRef.dismiss();
  }

}
