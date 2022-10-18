import { LocationService } from '../../../services/location.service';
import { AfterViewInit, Component, ElementRef, Input, OnDestroy, OnInit, Output, QueryList, ViewChild, ViewChildren, EventEmitter } from '@angular/core';

import { Map, Marker } from 'maplibre-gl';
import { BusStop } from 'src/app/interfaces';
import { BusStopComponent } from './bus-stop/bus-stop.component';

const ZOOM_LEVELS = {
  ZOOM_IN: 16,
  ACCURATE: 15,
  INACCURATE: 14,
  NO_LOCATION: 10
};

@Component({
  selector: 'app-stop-map',
  templateUrl: './stop-map.component.html',
  styleUrls: ['./stop-map.component.sass']
})
export class StopMapComponent implements OnInit, AfterViewInit, OnDestroy {
  @Input() busStopMarkers: BusStop[] = [];

  @Output() stopSelect = new EventEmitter<BusStop>();
  @Output() mapClick = new EventEmitter<MouseEvent>();

  @ViewChild('map')
  private mapContainer!: ElementRef<HTMLElement>;
  @ViewChildren(BusStopComponent, { read: ElementRef })
  private busStopElements!: QueryList<ElementRef>;

  private map!: Map;
  private zoom: number = ZOOM_LEVELS.NO_LOCATION;

  showStops: boolean = true;

  constructor(private locationService: LocationService) { }

  ngOnInit(): void { }

  ngAfterViewInit(): void {
    this.map = new Map({
      container: this.mapContainer.nativeElement,
      style: this.locationService.getStyleUrl(),
      zoom: this.zoom,
    });

    this.map.on('zoom',
      () => this.handleZoomChange()
    );

    this.locationService.getCurrentPosition(
      (position) => this.handlePositionFound(position)
    )

    this.loadBusStops();
  }

  ngOnDestroy() {
    this.map?.remove();
  }

  handlePositionFound(position: GeolocationPosition): void {
    this.map.setCenter( [ position.coords.longitude, position.coords.latitude ] );
    if (position.coords.accuracy < 400) {
      this.zoom = ZOOM_LEVELS.ACCURATE;
    } else {
      this.zoom = ZOOM_LEVELS.INACCURATE;
    }
    this.map.setZoom(this.zoom);
  }

  loadBusStops(): void {
    for(let i = 0; i < this.busStopElements.length; i++) {
      if (!this.busStopMarkers || !this.busStopMarkers[i]) continue;

      const busStop = this.busStopMarkers[i];

      if (busStop.location && busStop.location.coordinates) {
        new Marker( { element: this.busStopElements.get(i)?.nativeElement } )
        .setLngLat( busStop.location.coordinates )
        .addTo(this.map);
      }
    }
  }

  handleZoomChange() {
    this.showStops = this.map.getZoom() >= 12;
  }

  handleSelectedStop(busStop: BusStop) {
    if (busStop.location && busStop.location.coordinates) {
      this.map.easeTo({
        center: [
            busStop.location.coordinates[0],
            busStop.location.coordinates[1] - 0.001
        ],
        zoom: ZOOM_LEVELS.ZOOM_IN
      });
    }

    this.stopSelect.emit(busStop);
  }

  emitMapClick($event: MouseEvent) {
    this.mapClick.emit($event);
  }
}
