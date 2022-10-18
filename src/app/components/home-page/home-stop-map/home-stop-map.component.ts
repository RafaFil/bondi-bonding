import { Trip } from './../../../interfaces/Trip';
import { SlidingSheetComponent } from './../../general/sliding-sheet/sliding-sheet.component';
import { StopsService } from './../../../services/stops.service';
import { Component, OnInit, ViewChild } from '@angular/core';

import { BusStop } from 'src/app/interfaces/BusStop';

@Component({
  selector: 'app-home-stop-map',
  templateUrl: './home-stop-map.component.html',
  styleUrls: ['./home-stop-map.component.sass']
})
export class HomeStopMapComponent implements OnInit {
  busStops: BusStop[] = [];

  @ViewChild('slidingSheet')
  stopUserSheet?: SlidingSheetComponent;

  constructor(private stopsService: StopsService) { }

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





  trips: Trip[] = [
    {
      tripId: '123',
      user: { uid: '1', username: 'pepe', name: 'Cameron Williamson', iconUrl: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fA%3D%3D&w=1000&q=80' },
      from: 'Mi casa',
      to: 'Tu casa',
      description: 'Quiero hacer amigos'
    },
    {
      tripId: '1234',
      user: { uid: '1', username: 'pepe', name: 'Cameron Williamson', iconUrl: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fA%3D%3D&w=1000&q=80' },
      from: 'Mi casa',
      to: 'Tu casa',
      description: 'Quiero hacer amigos'
    }
  ];
}
