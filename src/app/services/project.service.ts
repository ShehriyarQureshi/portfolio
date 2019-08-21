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
      // test image
      image: 'assets/images/employeeManager.png'
    }
  ];

  constructor() { }
}
