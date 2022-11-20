import { AfterViewInit, Component, ElementRef, Input, OnDestroy, OnInit, Output, ViewChild, EventEmitter } from '@angular/core';

import { Map, Marker } from 'maplibre-gl';

import { MapMarker } from 'src/app/interfaces';
import { MapService } from 'src/app/services/map.service';
import { LocationService } from '../../../services/location.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.sass']
})
export class MapComponent implements OnInit, AfterViewInit, OnDestroy {

  private map!: Map;
  private defaultZoom: number = this.mapService.zoomLevels.NO_LOCATION;
  private currentMarkers: Marker[] = [];

  @Input() markers: MapMarker[] = [];

  @Output() mapClick = new EventEmitter<MouseEvent>();
  @Output() zoomChange = new EventEmitter<number>();

  @ViewChild('map')
  private mapContainer!: ElementRef<HTMLElement>;

  constructor(private locationService: LocationService,
              private mapService: MapService) { }

  ngOnInit(): void { }

  ngAfterViewInit(): void {
    this.map = new Map({
      container: this.mapContainer.nativeElement,
      style: this.locationService.getStyleUrl(),
      zoom: this.defaultZoom,
    });
    this.mapService.map = this.map;

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

  handlePositionFound({ coords }: GeolocationPosition): void {
    this.map.setCenter( [ coords.longitude, coords.latitude ] );

    if (coords.accuracy < 400) {
      this.defaultZoom = this.mapService.zoomLevels.ACCURATE;
    } else if (coords.accuracy < 2000) {
      this.defaultZoom = this.mapService.zoomLevels.INACCURATE;
    } else if (coords.accuracy < 5000) {
      this.defaultZoom = this.mapService.zoomLevels.VERY_INACCURATE;
    } else {
      this.defaultZoom = this.mapService.zoomLevels.NO_LOCATION;
    }

    this.map.setZoom(this.defaultZoom);
  }

  loadMarkers(): void {
    for (const marker of this.currentMarkers) {
      marker.remove();
    }
    this.currentMarkers.length = 0;

    for (const marker of this.markers) {
      this.currentMarkers.push(
        new Marker(
          { element: marker.elementRef.nativeElement }
        )
        .setLngLat( marker.coordinates )
        .addTo(this.map)
      );
    }
    this.map.resize();
  }

  emitMapClick($event: MouseEvent) {
    this.mapClick.emit($event);
  }
}
