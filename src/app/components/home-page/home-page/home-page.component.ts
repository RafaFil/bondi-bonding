import { Component, OnInit } from '@angular/core';

import { BusStop } from 'src/app/interfaces';
import { BusService } from 'src/app/services/bus.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.sass']
})
export class HomePageComponent implements OnInit {
  busStops: BusStop[] = [];

  constructor(private busService: BusService) { }

  ngOnInit(): void {
    this.busService.getStops()
    .subscribe(busStops => {
      this.busStops = busStops;
    });
  }

}
