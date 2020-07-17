import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  technologies: Array<any> = [
    {
      title: 'Rust',
      description: `
      My first systems programming experience related to
      networking tools dealing with OSI Layer 3.
      `
    },
    {
      title: 'Angular',
      description: `
      Built SaaS dashboards and consumed GIS APIs written in TypeScript.
      `
    },
    {
      title: 'Java',
      description: 'Built backend APIs to be consumed by other developers.'
    },
    {
      title: 'Python',
      description: `
      Used pure Python for learning programming and building hobby projects
      such as adding support for Temporal Tables in sqlite.
      `
    },
  ];

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
