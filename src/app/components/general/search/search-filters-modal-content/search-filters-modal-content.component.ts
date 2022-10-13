import { SearchService } from './../../../../services/search.service';
import { SearchFilters } from 'src/app/interfaces/SearchFilters';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

import { SearchFiltersFormComponent } from './../search-filters-form/search-filters-form.component';

@Component({
  selector: 'app-search-filters-modal-content',
  templateUrl: './search-filters-modal-content.component.html',
  styleUrls: ['./search-filters-modal-content.component.sass']
})
export class SearchFiltersModalContentComponent implements OnInit {
  @ViewChild('filtersForm') filtersForm?: SearchFiltersFormComponent;

  constructor(private dialogRef: MatDialogRef<SearchFiltersModalContentComponent>,
              private searchService: SearchService) { }

  ngOnInit(): void {
  }

  handleSearchFiltersSubmit($event: SearchFilters) {
    this.searchService.setSearchFilters($event);
    this.dialogRef.close();
  }

  handleApplyFiltersClick() {
    if (!this.filtersForm)    return;
    this.filtersForm.handleSearchSubmit();
  }

}
