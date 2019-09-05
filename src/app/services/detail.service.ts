import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DetailService {

  about: any = {
    name: 'Shehriyar Qureshi',
    status: 'Web Full Stack Engineer',
    deliverables: undefined,
    introduction: undefined
  };

  constructor() { }
}
