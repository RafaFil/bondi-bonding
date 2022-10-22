import { FormBuilder, FormControl } from '@angular/forms';
import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

import { SearchResult, TripFilters } from 'src/app/interfaces';
import { MOCKED_TRIPS } from '../mocks';

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

  search(): Observable<SearchResult> {
    const rawValue = this.searchForm.getRawValue();
    this.searchForm.reset();
    if (!rawValue.clickedBond) return of({ foundTrips: false });
    // TODO SEARCH TRIPS
    return of({ foundTrips: true, trips: MOCKED_TRIPS });
  }
}
