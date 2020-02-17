import { Injectable } from '@angular/core';
import { SOCIAL_LINKS } from '../global';

@Injectable({
  providedIn: 'root'
})
export class DetailService {

  public about: any = {
    name: 'Shehriyar Qureshi',
    status: 'Web Full Stack Engineer',
    heading: `Hello, I'm Shehriyar Qureshi`,
    subHeading: `I help and build businesses using software`,
  };

  public socials: Array<any> = [
    {
      class: 'fa-instagram',
      link: SOCIAL_LINKS.INSTAGRAM,
      text: 'Get insights into my everyday life'
    },
    {
      class: 'fa-facebook-official',
      link: SOCIAL_LINKS.FACEBOOK,
      text: 'See what I\'m doing locally'
    },
    {
      class: 'fa-linkedin',
      link: SOCIAL_LINKS.LINKEDIN,
      text: 'See my thoughts on work culture and how I\'m changing it'
    },
    {
      class: 'fa-twitter',
      link: SOCIAL_LINKS.TWITTER,
      text: 'Some of my most random thoughts'
    },
    {
      class: 'fa-snapchat',
      link: SOCIAL_LINKS.SNAPCHAT,
      text: 'I crack eggs better than I crack jokes'
    },
    {
      class: 'fa-microphone',
      link: SOCIAL_LINKS.ANCHOR,
      text: 'Listen to my stories while you\'re on the go'
    },
    {
      class: 'fa-youtube',
      link: SOCIAL_LINKS.YOUTUBE,
      text: 'Watch me talk about my life stories and thoughts'
    },
    {
      class: 'fa-whatsapp',
      link: SOCIAL_LINKS.WHATSAPP,
      text: 'Reach out if you want to work with me'
    },
    {
      class: 'fa-github',
      link: SOCIAL_LINKS.GITHUB,
      text: 'See my coding activity'
    },
    {
      class: 'fa-medium',
      link: SOCIAL_LINKS.MEDIUM,
      text: 'Read some articles that I occasionally write'
    },
    {
      class: 'fa-music',
      link: SOCIAL_LINKS.TIKTOK,
      text: 'See me try to not be cringy'
    },
  ];


  constructor() { }
}
