import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { TripFilters } from 'src/app/modules/core/interfaces';
import { AuthService } from 'src/app/modules/core/services/auth.service';
import { SearchService } from 'src/app/modules/core/services/search.service';
import { FiltersModalContentComponent } from '../filters-modal-content/filters-modal-content.component';

@Component({
  selector: 'app-search-filters-modal',
  templateUrl: './search-filters-modal.component.html',
  styleUrls: ['./search-filters-modal.component.sass']
})
export class SearchFiltersModalComponent implements OnInit {

  useUserFilters: boolean = true;

  get formControls() {
    return this.searchService.searchForm.controls;
  }

  getFilters(): TripFilters | undefined | null {
    const userFilters = this.authService.runningUser?.filters;

    if (this.useUserFilters && userFilters) {
      this.formControls.filters.setValue(userFilters);
    }

    return this.formControls.filters.value;
  }

  constructor(private dialog: MatDialog,
              private authService: AuthService,
              private searchService: SearchService) { }

  ngOnInit(): void {
  }

  openFiltersDialog() {
    const modalRef = this.dialog.open (
      FiltersModalContentComponent,
      { data: {
          callbackFn: (tripFilters: TripFilters) => {
            this.formControls.filters.setValue(tripFilters);
          },
          defaultFilters: this.getFilters()
        }
      }
    );
    modalRef.afterOpened().subscribe(() => this.useUserFilters = false);
  }
}
