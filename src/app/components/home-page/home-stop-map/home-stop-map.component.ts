import { Component, Input, OnInit, ViewChild } from '@angular/core';

import { BusStop } from 'src/app/interfaces';
import { SlidingSheetComponent } from './../../general/sliding-sheet/sliding-sheet.component';
import { BusService } from '../../../services/bus.service';
import { StopContentComponent } from '../stop-content/stop-content.component';

@Component({
  selector: 'app-home-stop-map',
  templateUrl: './home-stop-map.component.html',
  styleUrls: ['./home-stop-map.component.sass']
})
export class HomeStopMapComponent implements OnInit {
  @Input() busStops: BusStop[] = [];

  @ViewChild('slidingSheet')
  stopUserSheet?: SlidingSheetComponent;

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
    this.stopUserSheet?.show();
  }

  handleStopDeselect() {
    this.busService.setSelectedStop(undefined);
    this.stopContent?.clear();
    this.stopUserSheet?.hide();
  }
}
