import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  projects: any = [
    {
      name: 'PTCL CPS',
      description: `wohooo`,
      link: 'https://support.tplmaps.com/cps-portal/',
      image: 'assets/images/ptcl-cps.jpg'
    }
  ];

  constructor() { }
}
