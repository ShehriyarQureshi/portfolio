import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RecommendationService {

  public recommendations: Array<any> = [
    {
      name: 'Sami Jan',
      text: `Shehriyar is a detail oriented engineer who is also disciplined and a good communicator.
      At TPLMaps, he caught up to speed very quickly in front end development in angular and improved his
      programming skills consistently and in less than a year is a core contributor to one of our central products.
      I am sure Shehriyar will be an asset to any project he undertakes in the future as well`,
      avatar: 'assets/images/sami_jan.jpeg',
      role: 'Head of Software Development',
      company: 'TPL Maps Pvt Ltd'
    }
  ];
  constructor() { }
}
