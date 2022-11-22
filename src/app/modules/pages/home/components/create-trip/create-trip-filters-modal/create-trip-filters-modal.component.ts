import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { TripService } from 'src/app/modules/core/services/trip.service';
import { TripFilters } from 'src/app/modules/core/interfaces';
import { FiltersModalContentComponent } from '../../search/filters-modal-content/filters-modal-content.component';

@Component({
  selector: 'app-create-trip-filters-modal',
  templateUrl: './create-trip-filters-modal.component.html',
  styleUrls: ['./create-trip-filters-modal.component.sass']
})
export class CreateTripFiltersModalComponent implements OnInit {

  constructor(private tripService: TripService,
              private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openFiltersDialog() {
    this.dialog.open( FiltersModalContentComponent,
       {
        data: {
          callbackFn: (tripFilters: TripFilters) => {
            this.tripService.createTripForm.controls.filters.setValue(tripFilters);
          }
        }
       }
    );
  }
}