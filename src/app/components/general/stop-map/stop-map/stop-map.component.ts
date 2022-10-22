import { AfterViewInit, Component, EventEmitter, Input, OnInit, Output, QueryList, ViewChild, ViewChildren } from '@angular/core';

import { BusStop, MapMarker } from 'src/app/interfaces';
import { MapComponent, ZOOM_LEVELS } from '../../map/map.component';
import { BusStopComponent } from '../bus-stop/bus-stop.component';

@Component({
  selector: 'app-stop-map',
  templateUrl: './stop-map.component.html',
  styleUrls: ['./stop-map.component.sass']
})
export class StopMapComponent implements OnInit, AfterViewInit {
  showStops: boolean = true;
  busStopMarkers: MapMarker[] = [];

  @Input() busStops: BusStop[] = [];

  @Output() mapClick = new EventEmitter<MouseEvent>();
  @Output() stopSelect = new EventEmitter<BusStop>();

  @ViewChildren(BusStopComponent, { read: BusStopComponent })
  private busStopElements!: QueryList<BusStopComponent>;

  @ViewChild('map')
  map?: MapComponent;

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.setMapMarkers();
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
      this.map?.easeTo({
        center: [
            busStop.location.coordinates[0],
            busStop.location.coordinates[1] - 0.0015
        ],
        zoom: ZOOM_LEVELS.ZOOM_IN
      });
    }

    if (emitStopSelect) {
      this.stopSelect.emit(busStop);
    }
  }

  handleZoomChange(zoomValue: number) {
    this.showStops = zoomValue >= 12;
  }

  handleMapClick($event: MouseEvent) {
    this.mapClick.emit($event);
  }
}
