import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { SearchFiltersModalContentComponent } from './../search-filters-modal-content/search-filters-modal-content.component';

@Component({
  selector: 'app-search-filters-modal',
  templateUrl: './search-filters-modal.component.html',
  styleUrls: ['./search-filters-modal.component.sass']
})
export class SearchFiltersModalComponent implements OnInit {

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openFiltersDialog() {
    this.dialog.open( SearchFiltersModalContentComponent );
  }
}
