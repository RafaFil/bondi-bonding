import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';

import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

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
              @Inject(MAT_DIALOG_DATA) private data: { filterControl: FormControl<TripFilters> }) { }

  ngOnInit(): void {
  }

  handleApplyFiltersClick() {
    if (!this.filtersForm)    return;
    this.filtersForm.handleTripFiltersSubmit();
  }

  handleSearchFiltersSubmit($event: TripFilters) {
    this.data.filterControl.setValue($event);
    this.dialogRef.close();
  }
}
