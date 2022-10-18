import { FormBuilder, FormControl } from '@angular/forms';
import { Injectable } from '@angular/core';

import { SearchResult, TripFilters } from 'src/app/interfaces';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  searchForm = this.fb.group({
    from: [ '' ],
    to: [ '' ],
    filters: new FormControl<TripFilters>({}),
    clickedBond: false
  });

  constructor(private fb: FormBuilder) { }

  search(): SearchResult | undefined {
    const rawValue = this.searchForm.getRawValue();
    this.searchForm.reset();
    if (!rawValue.clickedBond) return;
    // TODO SEARCH TRIPS

    return { foundTrips: true };
  }
}
