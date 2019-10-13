import { Component, OnInit } from '@angular/core';
import { MapEventService } from 'src/app/services/map-event.service';
import { WorkExperienceService } from 'src/app/services/work-experience.service';

declare var TPLMaps: any;

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {

  public userMap: any = undefined;

  constructor(
    private workService: WorkExperienceService,
    public mapEventService: MapEventService
  ) { }

  ngOnInit() {
    this.initializeMap();
    this.workService.addMarkersToMap(this.userMap);
    this.userMap.on('popupclose', () => {
      this.mapEventService.popupClosed.emit();
    });
  }

  private initializeMap(): void {
    const mapOptions = {
      lng: 73.094479317,
      lat: 33.52230533199997,
      zoom: 11,
      minZoom: 0,
      maxZoom: 20,
      divID: 'map'
    };
    this.userMap = TPLMaps.map.initMap(mapOptions);
  }

}
