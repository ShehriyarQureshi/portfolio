import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MapEventService {

  public markerClicked = new EventEmitter<any>();
  public popupClosed = new EventEmitter<void>();

  constructor() { }
}
