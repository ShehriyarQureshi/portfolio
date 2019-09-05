import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  projects: Array<any> = [
    {
      name: 'TPL Project',
      description: `wabba labba dub dub`,
      image: 'assets/images/tpl_project.jpg'
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
