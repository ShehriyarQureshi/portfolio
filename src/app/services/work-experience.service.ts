import { Injectable } from '@angular/core';
import { MapEventService } from './map-event.service';


declare var TPLMaps: any;
declare var L: any;

@Injectable({
  providedIn: 'root'
})
export class WorkExperienceService {

  public workExperience: Array<any> = [
    {
      name: 'Breu Inc',
      description:
        `
        Building networking tools using the Rust programming language.
        `
      ,
    },
    {
      name: 'TPL Maps Pvt Ltd',
      description:
        `
        Developed RESTful APIs along with discovering and fixing security vulnerabilites
        and memory leaks in one of the GIS application frontend.
        `
      ,
    },
    {
      name: 'Codecademy',
      industry: 'Learning',
      description: `Created practice content for the Python language.`
    },
  ];

  constructor(
    private mapEventService: MapEventService
  ) {
  }

  public addMarkersToMap(map: any): void {
    this.workExperience.forEach((value, i) => {
      if (value.lat && value.lng) {
        const option = {
          lat: value.lat,
          lng: value.lng,
          icon: 'https://api.tplmaps.com/js-api-v2/assets/images/marker-icon.png',
          map
        };
        const marker = TPLMaps.overlays.point(option);
        marker.identifier = value.markerName;
        marker.on('click', (e) => {
          // use the identifier to get the index of object
          this.mapEventService.markerClicked.emit(this.workExperience[i]);
        });
        TPLMaps.overlays.addToMap({ map, geomObject: marker });
        const popUpOptions = {
          geomObject: marker,
          label: `<b>${value.name}</b>`
        };
        TPLMaps.overlays.addInfoPopUp(popUpOptions);
      }
    });

  }
}

