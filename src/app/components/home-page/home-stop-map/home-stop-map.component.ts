import { Component, OnInit, ViewChild } from '@angular/core';

import { BusStop } from 'src/app/interfaces';
import { SlidingSheetComponent } from './../../general/sliding-sheet/sliding-sheet.component';
import { StopsService } from './../../../services/stops.service';

@Component({
  selector: 'app-home-stop-map',
  templateUrl: './home-stop-map.component.html',
  styleUrls: ['./home-stop-map.component.sass']
})
export class HomeStopMapComponent implements OnInit {
  busStops: BusStop[] = [];

  @ViewChild('slidingSheet')
  stopUserSheet?: SlidingSheetComponent;

  constructor(public stopsService: StopsService) { }

  ngOnInit(): void {
    this.stopsService.getStops()
    .subscribe(busStops => {
      this.busStops = busStops;
    });
  }

  handleStopSelect(busStop: BusStop) {
    this.stopsService.setSelectedStop(busStop);
    this.stopUserSheet?.show();
  }

  handleStopDeselect() {
    this.stopsService.setSelectedStop(undefined);
    this.stopUserSheet?.hide();
  }
}
