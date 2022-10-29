import { AfterViewInit, Component, EventEmitter, Input, OnInit, Output, QueryList, ViewChild, ViewChildren } from '@angular/core';

import { BusStop, MapMarker } from 'src/app/interfaces';
import { MapService } from 'src/app/services/map.service';
import { MapComponent } from '../../map/map.component';
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

  constructor(private mapService: MapService) { }

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
      this.mapService.setFocusTo(busStop);
    }

    if (emitStopSelect) {
      this.stopSelect.emit(busStop);
    }
  }

  handleZoomChange(zoomValue: number) {
    this.showStops = zoomValue >= this.mapService.zoomLevels.NO_LOCATION;
  }

  handleMapClick($event: MouseEvent) {
    this.mapClick.emit($event);
  }
}
