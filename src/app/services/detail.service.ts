import { Injectable } from '@angular/core';
import { SOCIAL_LINKS } from '../global';

@Injectable({
  providedIn: 'root',
})
export class DetailService {
  public socials: Array<any> = [
    {
      link: SOCIAL_LINKS.ANCHOR,
      text: 'Podcast',
    },
    {
      link: SOCIAL_LINKS.YOUTUBE,
      text: 'YouTube',
    },
    {
      link: SOCIAL_LINKS.LINKEDIN,
      text: 'LinkedIn',
    },
    {
      link: SOCIAL_LINKS.TWITTER,
      text: 'Twitter',
    },
    {
      link: SOCIAL_LINKS.BLOG,
      text: 'Blog',
    },
    {
      link: SOCIAL_LINKS.GITHUB,
      text: 'GitHub',
    },
    {
      link: SOCIAL_LINKS.EMAIL,
      text: 'Email',
    },
  ];

  constructor() {}
}
