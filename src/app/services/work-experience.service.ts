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
      name: 'TPL Maps Pvt Ltd',
      lng: 73.094479317,
      lat: 33.52230533199997,
      logo: 'assets/images/tplmaps.png',
      industry: 'GIS',
      role: 'Full-Stack Software Engineer',
      achievements: [
        `Discovered, Analyzed and fixed major memory leaks`,
        `Discovered and patched security vulnerabilities`,
        `Developed RESTful web services`,
        `Helped coworkers to increase their knowledge in Version Control and using *nix command line`
      ],
    },
    {
      name: 'Ufone',
      industry: 'Telecommunication',
      logo: 'assets/images/ufone.png'
    },
    {
      name: 'PTCL',
      industry: 'Telecommunication',
      logo: 'assets/images/ptcl.png'
    },
    {
      name: 'Codecademy',
      industry: 'Learning',
      logo: 'assets/images/codecademy_logo.jpg'
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

