import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { TripFilters } from 'src/app/modules/core/interfaces';
import { SearchService } from 'src/app/modules/core/services/search.service';
import { FiltersModalContentComponent } from '../filters-modal-content/filters-modal-content.component';

@Component({
  selector: 'app-search-filters-modal',
  templateUrl: './search-filters-modal.component.html',
  styleUrls: ['./search-filters-modal.component.sass']
})
export class SearchFiltersModalComponent implements OnInit {

  constructor(private dialog: MatDialog,
              private searchService: SearchService) { }

  ngOnInit(): void {
  }

  openFiltersDialog() {
    this.dialog.open (
      FiltersModalContentComponent,
      {
        data: {
          callbackFn: (tripFilters: TripFilters) => {
            this.searchService.searchForm.controls.filters.setValue(tripFilters);
          }
        }
      });
  }
}
