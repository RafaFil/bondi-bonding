import { Trip, TripFilters } from 'src/app/modules/core/interfaces';
import { Component, Inject, OnInit, ViewChild } from '@angular/core';

import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { SearchService } from 'src/app/modules/core/services/search.service';


@Component({
  selector: 'app-filters-modal-content',
  templateUrl: './filters-modal-content.component.html',
  styleUrls: ['./filters-modal-content.component.sass']
})
export class FiltersModalContentComponent implements OnInit {

  get defaultFilters(): TripFilters | undefined{
    return this.data.defaultFilters;
  }

  constructor(private searchService: SearchService,
              private dialogRef: MatDialogRef<FiltersModalContentComponent>,
              @Inject(MAT_DIALOG_DATA) public data: {
                callbackFn: (tripFilters: TripFilters) => void,
                defaultFilters?: TripFilters
              }) { }

  ngOnInit(): void {
  }

  handleCancel() {
    if (this.defaultFilters) {
      const { filters } = this.searchService.searchForm.controls;
      filters.setValue(this.defaultFilters);
    }
    this.dialogRef.close();
  }

  handleFiltersSubmit($event: TripFilters) {
    this.data.callbackFn($event);
    this.dialogRef.close();
  }
}
