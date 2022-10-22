import { AfterViewInit, Component, ElementRef, Input, OnDestroy, OnInit, Output, ViewChild, EventEmitter } from '@angular/core';

import { EaseToOptions, Map, MapLibreEvent, Marker } from 'maplibre-gl';

import { MapMarker } from 'src/app/interfaces';
import { LocationService } from '../../../services/location.service';

export const ZOOM_LEVELS = {
  ZOOM_IN: 16,
  ACCURATE: 15,
  INACCURATE: 14,
  NO_LOCATION: 10
};

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.sass']
})
export class MapComponent implements OnInit, AfterViewInit, OnDestroy {
  @Input() markers: MapMarker[] = [];

  @Output() mapClick = new EventEmitter<MouseEvent>();
  @Output() zoomChange = new EventEmitter<number>();

  @ViewChild('map')
  private mapContainer!: ElementRef<HTMLElement>;

  private map!: Map;
  private defaultZoom: number = ZOOM_LEVELS.NO_LOCATION;

  constructor(private locationService: LocationService) { }

  ngOnInit(): void { }

  ngAfterViewInit(): void {
    this.map = new Map({
      container: this.mapContainer.nativeElement,
      style: this.locationService.getStyleUrl(),
      zoom: this.defaultZoom,
    });

    this.map.on('zoom',
      () => this.zoomChange.emit(this.map.getZoom())
    );

    this.locationService.getCurrentPosition(
      (position) => this.handlePositionFound(position)
    )
  }

  ngOnDestroy() {
    this.map?.remove();
  }

  handlePositionFound(position: GeolocationPosition): void {
    this.map.setCenter( [ position.coords.longitude, position.coords.latitude ] );

    if (position.coords.accuracy < 400) {
      this.defaultZoom = ZOOM_LEVELS.ACCURATE;
    } else {
      this.defaultZoom = ZOOM_LEVELS.INACCURATE;
    }

    this.map.setZoom(this.defaultZoom);
  }

  emitMapClick($event: MouseEvent) {
    this.mapClick.emit($event);
  }

  easeTo(options: EaseToOptions) {
    this.map.easeTo(options);
  }

  loadMarkers(): void {
    for (const marker of this.markers) {
      new Marker(
        { element: marker.elementRef.nativeElement }
      )
      .setLngLat( marker.coordinates )
      .addTo(this.map);
    }
  }
}
