import { Component, OnInit, ViewChild, AfterViewInit, AfterViewChecked } from '@angular/core';

import { MatSnackBar } from '@angular/material/snack-bar';

import { StopsResponse } from 'src/app/modules/core/interfaces/StopsResponse';
import { MapService } from 'src/app/modules/core/services/map.service';
import { BusStop, SearchResult } from 'src/app/modules/core/interfaces';
import { SlidingSheetComponent } from 'src/app/modules/shared/components/sliding-sheet/sliding-sheet.component';
import { BusService } from 'src/app/modules/core/services/bus.service';
import { StopMapComponent } from '../stop-map/stop-map/stop-map.component';
import { StopContentComponent } from '../stop-content/stop-content/stop-content.component';

@Component({
  selector: 'app-home-stop-map',
  templateUrl: './home-stop-map.component.html',
  styleUrls: ['./home-stop-map.component.sass']
})
export class HomeStopMapComponent implements OnInit, AfterViewInit, AfterViewChecked {

  searchResult?: SearchResult;
  busStops: BusStop[] = [];
  isRetrievingStops: boolean = false;
  isStopsChange: boolean = false;

  @ViewChild('stopMap')
  stopMap?: StopMapComponent;

  @ViewChild('slidingSheet')
  slidingSheet?: SlidingSheetComponent;

  @ViewChild('stopContent')
  stopContent?: StopContentComponent;

  get selectedStop(): BusStop | undefined {
    const busStop = this.busService.getSelectedStop();
    return busStop ? busStop : undefined;
  }

  get canGetStops(): boolean {
    return this.mapService.getZoom() >= this.mapService.zoomLevels.INACCURATE;
  }

  constructor(private busService: BusService,
              private mapService: MapService,
              private snackBar: MatSnackBar) { }

  ngOnInit(): void {
    if (!this.isRetrievingStops) {
      this.getStopsOnInit();
    }
  }

  ngAfterViewInit(): void {
    this.mapService.mapGetObs?.subscribe((result) => {
      if (result.success && this.mapService.map) {
        this.mapService.map.on('dragend', () => this.getStopsOnMove());
        this.mapService.map.on('zoomend', () => this.getStopsOnMove());
      }
    });
  }

  ngAfterViewChecked(): void {
    if (this.isStopsChange) {
      this.stopMap?.setMapMarkers();
      this.isStopsChange = false;
    }
  }

  handleStopSelect(busStop: BusStop) {
    this.busService.setSelectedStop(busStop);
    this.slidingSheet?.show();
  }

  handleStopDeselect() {
    this.slidingSheet?.hide();
    this.busService.setSelectedStop(undefined);
    this.stopContent?.clear();
    this.searchResult = undefined;
  }

  handleSearchStopChange(busStop: BusStop) {
    this.stopMap?.setSelectedStop(busStop, false);
    this.busService.setSelectedStop(busStop);
  }

  handleSearch(searchResult: SearchResult) {
    this.searchResult = searchResult;
    this.slidingSheet?.show();
  }

  handleSheetHide() {
    this.busService.setSelectedStop(undefined);
    this.searchResult = undefined;
    this.stopContent?.clear();
  }

  getStopsOnInit() {
    if (!this.canGetStops) {
      return;
    }

    this.isRetrievingStops = true;
    this.busService.getStopsCallback(
      (response: StopsResponse) => {
        if (response.success) {
          this.busStops = response.data!;
        } else {
          this.snackBar.open('An error ocurred while retrieving bus stops. Please reload this page or try again later.',
            '', { duration: 3000 });
        }
        this.isRetrievingStops = false;
        this.isStopsChange = true;
      },
      true
    );
  }

  getStopsOnMove() {
    if (!this.canGetStops) {
      this.busStops = [];
      return;
    }

    if (this.isRetrievingStops) {
      return;
    }

    this.isRetrievingStops = true;
    this.busService.getStops(true)
    .subscribe( (response: StopsResponse ) => {
      if (response.success) {
        this.busStops = response.data!;
        this.isRetrievingStops = false;
        this.isStopsChange = true;
      }
    });
  }
}
