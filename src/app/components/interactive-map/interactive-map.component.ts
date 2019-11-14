import { Component, OnInit } from '@angular/core';
import { MapEventService } from 'src/app/services/map-event.service';

@Component({
  selector: 'app-interactive-map',
  templateUrl: './interactive-map.component.html',
  styleUrls: ['./interactive-map.component.scss']
})
export class InteractiveMapComponent implements OnInit {

  public markerObject: any = undefined;

  constructor(
    private mapEventService: MapEventService
  ) { }

  ngOnInit() {
    this.mapEventService.markerClicked
      .subscribe((object) => {
        this.markerObject = object;
      });

    this.mapEventService.popupClosed
      .subscribe(() => {
        this.markerObject = undefined;
      });
  }

}
