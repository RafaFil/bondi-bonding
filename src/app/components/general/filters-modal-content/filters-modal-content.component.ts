import { TripFilters } from 'src/app/interfaces';
import { Component, Inject, OnInit, ViewChild } from '@angular/core';

import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';


@Component({
  selector: 'app-filters-modal-content',
  templateUrl: './filters-modal-content.component.html',
  styleUrls: ['./filters-modal-content.component.sass']
})
export class FiltersModalContentComponent implements OnInit {

  constructor(private dialogRef: MatDialogRef<FiltersModalContentComponent>,
              @Inject(MAT_DIALOG_DATA) public data: {
                callbackFn: (tripFilters: TripFilters) => void
              }) { }

  ngOnInit(): void {
  }

  handleFiltersSubmit($event: TripFilters) {
    this.data.callbackFn($event);
    this.dialogRef.close();
  }
}
