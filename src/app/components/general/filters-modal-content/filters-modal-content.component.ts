import { TripFilters } from 'src/app/interfaces';
import { Component, Inject, OnInit, ViewChild } from '@angular/core';

import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { TripFiltersFormComponent } from '../trip-filters-form/trip-filters-form.component';

@Component({
  selector: 'app-filters-modal-content',
  templateUrl: './filters-modal-content.component.html',
  styleUrls: ['./filters-modal-content.component.sass']
})
export class FiltersModalContentComponent implements OnInit {
  @ViewChild('filtersForm') filtersForm?: TripFiltersFormComponent;

  constructor(private dialogRef: MatDialogRef<FiltersModalContentComponent>,
              @Inject(MAT_DIALOG_DATA) public data: { callbackFn: (tripFilters: TripFilters) => void }) { }

  ngOnInit(): void {
  }

  handleApplyFiltersClick() {
    if (!this.filtersForm)    return;
    this.filtersForm.handleTripFiltersSubmit();
  }

  handleFiltersSubmit($event: TripFilters) {
    this.data.callbackFn($event);
    this.dialogRef.close();
  }
}
