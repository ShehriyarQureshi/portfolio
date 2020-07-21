import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class WorkExperienceService {
  public workExperience: Array<any> = [
    {
      name: 'Breu Inc',
      description: `
        Building networking tools using the Rust programming language.
        `,
    },
    {
      name: 'TPL Maps Pvt Ltd',
      description: `
        Developed RESTful APIs along with discovering and fixing security vulnerabilites
        and memory leaks in one of the GIS application frontend.
        `,
    },
    {
      name: 'Codecademy',
      industry: 'Learning',
      description: `Created practice content for the Python language.`,
    },
  ];

  constructor() {}
}
