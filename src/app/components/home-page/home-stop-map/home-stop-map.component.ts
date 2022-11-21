import { MatSnackBar } from '@angular/material/snack-bar';
import { StopsResponse } from './../../../interfaces/StopsResponse';
import { MapService } from 'src/app/services/map.service';
import { Component, Input, OnInit, ViewChild, AfterViewInit, AfterViewChecked } from '@angular/core';

import { BusStop, SearchResult } from 'src/app/interfaces';
import { SlidingSheetComponent } from './../../general/sliding-sheet/sliding-sheet.component';
import { BusService } from '../../../services/bus.service';
import { StopContentComponent } from '../stop-content/stop-content.component';
import { StopMapComponent } from '../../general/stop-map/stop-map/stop-map.component';

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

  constructor(private busService: BusService,
              private mapService: MapService,
              private snackBar: MatSnackBar) { }

  ngOnInit(): void {
    if (!this.isRetrievingStops) {
      this.getStopsOnInit();
    }
  }

  ngAfterViewInit(): void {
    this.mapService.mapGetObs?.subscribe(() => {
      this.mapService.map.on('dragend', () => this.getStopsOnMove());
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
    this.busService.setSelectedStop(undefined);
    this.stopContent?.clear();
    this.slidingSheet?.hide();
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
  }

  getStopsOnInit() {
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
