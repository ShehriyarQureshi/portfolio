import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  projects: Array<any> = [
    {
      name: 'Commercial Planning Solution',
      description: `Project was honored for Best Business Transformation Solution at GEC Awards 2019 held in Dubai.
      Details cannot be disclosed as project has not been completed.`,
      image: 'assets/images/tpl_maps_project.jpg',
      link: 'https://twitter.com/TPLMaps/status/1179371147240062976',
      awards: {
        name: 'GEC Awards 2019',
        title: 'Best Business Transformation Solution',
        image: 'assets/images/gec_award_2019.png'
      }
    },
    {
      name: 'historia',
      description: `Python module which adds support for temporal and history tables in SQLite.`,
      link: 'https://github.com/ShehriyarQureshi/historia',
      image: 'assets/images/historia.jpg'
    }
  ];

  constructor() { }

  public projectsLength(): number {
    return this.projects.length;
  }
}
