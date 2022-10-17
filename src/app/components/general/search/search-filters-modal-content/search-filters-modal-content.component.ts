import { SearchService } from './../../../../services/search.service';
import { Component, OnInit, ViewChild } from '@angular/core';

import { MatDialogRef } from '@angular/material/dialog';

import { TripFiltersFormComponent } from '../../trip-filters-form/trip-filters-form.component';
import { TripFilters } from 'src/app/interfaces/Trip';

@Component({
  selector: 'app-search-filters-modal-content',
  templateUrl: './search-filters-modal-content.component.html',
  styleUrls: ['./search-filters-modal-content.component.sass']
})
export class SearchFiltersModalContentComponent implements OnInit {
  @ViewChild('filtersForm') filtersForm?: TripFiltersFormComponent;

  constructor(private dialogRef: MatDialogRef<SearchFiltersModalContentComponent>,
              private searchService: SearchService) { }

  ngOnInit(): void {
  }

  handleApplyFiltersClick() {
    if (!this.filtersForm)    return;
    this.filtersForm.handleTripFiltersSubmit();
  }

  handleSearchFiltersSubmit($event: TripFilters) {
    this.searchService.searchForm.controls.filters.setValue($event);
    this.dialogRef.close();
  }
}
