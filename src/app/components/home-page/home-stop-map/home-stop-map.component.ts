import { StopsService } from './../../../services/stops.service';
import { Component, OnInit } from '@angular/core';

import { BusStop } from 'src/app/interfaces/BusStop';

@Component({
  selector: 'app-home-stop-map',
  templateUrl: './home-stop-map.component.html',
  styleUrls: ['./home-stop-map.component.sass']
})
export class HomeStopMapComponent implements OnInit {
  busStops: BusStop[] = [];

  constructor(private stopsService: StopsService) { }

  ngOnInit(): void {
    this.stopsService.getStops()
    .subscribe(busStops => {
      this.busStops = busStops;
    });
  }

  handleStopSelect(busStop: BusStop) {
    this.stopsService.setSelectedStop(busStop);
  }

  handleStopDeselect() {
    this.stopsService.setSelectedStop(undefined);
  }
}
