import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';

import { SearchFiltersModalContentComponent } from './../search-filters-modal-content/search-filters-modal-content.component';
import { SearchFilters } from './../../../../interfaces/SearchFilters';

@Component({
  selector: 'app-search-filters-modal',
  templateUrl: './search-filters-modal.component.html',
  styleUrls: ['./search-filters-modal.component.sass']
})
export class SearchFiltersModalComponent implements OnInit {
  @Input() filterControl!: FormControl<SearchFilters>;

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openFiltersDialog() {
    this.dialog.open(
      SearchFiltersModalContentComponent
    );
  }
}
