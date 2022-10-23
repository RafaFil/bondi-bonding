import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-create-trip-filters-modal',
  templateUrl: './create-trip-filters-modal.component.html',
  styleUrls: ['./create-trip-filters-modal.component.sass']
})
export class CreateTripFiltersModalComponent implements OnInit {

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openFiltersDialog() {
    //this.dialog.open( SearchFiltersModalContentComponent );
  }
}
