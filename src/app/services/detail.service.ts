import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DetailService {

  public about: any = {
    name: 'Shehriyar Qureshi',
    status: 'Web Full Stack Engineer',
    heading: `Hello, I'm Shehriyar Qureshi`,
    subHeading: `I use modern technologies to develop software that helps businesses evolve`,
  };

  constructor() { }
}
