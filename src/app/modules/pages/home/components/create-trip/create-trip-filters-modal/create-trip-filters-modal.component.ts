import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { TripService } from 'src/app/modules/core/services/trip.service';
import { TripFilters } from 'src/app/modules/core/interfaces';
import { FiltersModalContentComponent } from '../../search/filters-modal-content/filters-modal-content.component';
import { AuthService } from 'src/app/modules/core/services/auth.service';

@Component({
  selector: 'app-create-trip-filters-modal',
  templateUrl: './create-trip-filters-modal.component.html',
  styleUrls: ['./create-trip-filters-modal.component.sass']
})
export class CreateTripFiltersModalComponent implements OnInit {

  useUserFilters: boolean = true;

  get formControls() {
    return this.tripService.createTripForm.controls;
  }

  getFilters(): TripFilters | undefined | null {
    const userFilters = this.authService.runningUser?.filters;

    if (this.useUserFilters && userFilters) {
      this.formControls.filters.setValue(userFilters);
    }

    return this.formControls.filters.value;
  }

  constructor(private authService: AuthService,
              private tripService: TripService,
              private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openFiltersDialog() {
    const modalRef = this.dialog.open( FiltersModalContentComponent,
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
