import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProjectService {
  technologies: Array<any> = [
    {
      title: 'Rust',
      description: `
      My first systems programming experience related to
      networking tools.
      `,
    },
    {
      title: 'Java',
      description: 'Built backend APIs to be consumed by other developers.',
    },
    {
      title: 'Angular',
      description: `
      Built SaaS dashboards and consumed GIS APIs.
      `,
    },
    {
      title: 'Python',
      description: `
      Used pure Python for learning programming and building hobby projects
      such as adding support for Temporal Tables in SQLite.
      `,
    },
  ];

  constructor() {}
}
