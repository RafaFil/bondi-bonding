import { Component, EventEmitter, Input, OnInit, Output, QueryList, ViewChild, ViewChildren } from '@angular/core';

import { BusStop, MapMarker } from 'src/app/modules/core/interfaces';
import { MapService } from 'src/app/modules/core/services/map.service';
import { MapComponent } from 'src/app/modules/shared/components/map/map.component';
import { BusStopComponent } from '../bus-stop/bus-stop.component';

@Component({
  selector: 'app-stop-map',
  templateUrl: './stop-map.component.html',
  styleUrls: ['./stop-map.component.sass']
})
export class StopMapComponent implements OnInit {
  busStopMarkers: MapMarker[] = [];

  @Input() busStops: BusStop[] = [];

  @Output() mapClick = new EventEmitter<MouseEvent>();
  @Output() stopSelect = new EventEmitter<BusStop>();

  @ViewChildren(BusStopComponent, { read: BusStopComponent })
  private busStopElements!: QueryList<BusStopComponent>;

  @ViewChild('map')
  map?: MapComponent;

  constructor(private mapService: MapService) { }

  ngOnInit(): void {
  }

  setMapMarkers(): void {
    this.busStopMarkers.length = 0;

    for (const busStopElement of this.busStopElements) {
      this.busStopMarkers.push({
        coordinates: busStopElement.busStop?.location?.coordinates!,
        elementRef: busStopElement.elementRef
      });
    }

    this.map?.loadMarkers();
  }

  setSelectedStop(busStop: BusStop, emitStopSelect: boolean = true): void {
    if (busStop.location && busStop.location.coordinates) {
      this.mapService.setFocusTo(busStop);
    }

    if (emitStopSelect) {
      this.stopSelect.emit(busStop);
    }
  }

  handleMapClick($event: MouseEvent) {
    this.mapClick.emit($event);
  }
}
