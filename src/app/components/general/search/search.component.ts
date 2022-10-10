import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { SearchFilters } from 'src/app/interfaces/SearchFilters';
import { SearchFormComponent } from './search-form/search-form.component';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.sass']
})
export class SearchComponent implements OnInit {
  searchForm = this.formBuilder.group({
    from: [ '' ],
    to: [ '' ],
    description: [ '' ],
    filters: new FormControl<SearchFilters>({}),
    clickedBond: false
  });

  constructor(private bottomSheet: MatBottomSheet,
              private formBuilder: FormBuilder) { }

  ngOnInit(): void {
  }

  displaySearchForm(): void {
    const bottomSheetRef = this.bottomSheet.open(SearchFormComponent, {
      data: {
        searchForm: this.searchForm
      }
    });

    bottomSheetRef.afterDismissed().subscribe(() => this.handleFormSubmit());
  }

  handleFormSubmit(): void {
    const formRawValue = this.searchForm.getRawValue();

    if (!formRawValue.clickedBond) return;

    console.log(formRawValue);
  }
}
