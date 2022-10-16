import { LocationService } from '../../../services/location.service';
import { AfterViewInit, Component, ElementRef, Input, OnDestroy, OnInit, Output, QueryList, ViewChild, ViewChildren, EventEmitter } from '@angular/core';

import { Map, MapLibreEvent, Marker } from 'maplibre-gl';
import { BusStop } from '../../../interfaces/BusStop';
import { BusStopComponent } from './bus-stop/bus-stop.component';

const ZOOM_LEVELS = {
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

  private map?: Map;
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
    this.map?.setCenter( [ position.coords.longitude, position.coords.latitude ] );
    if (position.coords.accuracy < 400) {
      this.map?.setZoom(ZOOM_LEVELS.ACCURATE);
    } else {
      this.map?.setZoom(ZOOM_LEVELS.INACCURATE);
    }
  }

  loadBusStops(): void {
    if (!this.map) return;

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
    this.showStops = this.map ? this.map?.getZoom() >= 12 : false;
  }

  emitSelectedStop(busStop: BusStop) {
    this.stopSelect.emit(busStop);
  }

  emitMapClick($event: MouseEvent) {
    this.mapClick.emit($event);
  }
}
