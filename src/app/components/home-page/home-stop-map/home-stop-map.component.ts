import { Component, Input, OnInit, ViewChild } from '@angular/core';

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
export class HomeStopMapComponent implements OnInit {
  searchResult?: SearchResult;

  @Input() busStops: BusStop[] = [];

  @ViewChild('stopMap')
  stopMap?: StopMapComponent;

  @ViewChild('slidingSheet')
  slidingSheet?: SlidingSheetComponent;

  @ViewChild('stopContent')
  stopContent?: StopContentComponent;

  get selectedStop(): BusStop {
    const busStop = this.busService.getSelectedStop();
    return busStop ? busStop : {};
  }

  constructor(private busService: BusService) { }

  ngOnInit(): void { }

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
}
