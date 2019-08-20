import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  projects: any = [
    {
      name: 'Cannot be disclosed',
      description: `wohooo`,
      link: '',
      image: 'assets/images/some-project.jpg'
    }
  ];

  constructor() { }
}
