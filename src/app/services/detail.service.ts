import { Injectable } from '@angular/core';
import { SOCIAL_LINKS } from '../global';

@Injectable({
  providedIn: 'root',
})
export class DetailService {
  public socials: Array<any> = [
    {
      link: SOCIAL_LINKS.INSTAGRAM,
      text: 'Instagram',
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
      link: SOCIAL_LINKS.ANCHOR,
      text: 'Podcast',
    },
    {
      link: SOCIAL_LINKS.YOUTUBE,
      text: 'YouTube',
    },
    {
      link: SOCIAL_LINKS.SNAPCHAT,
      text: 'Snapchat',
    },
    {
      link: SOCIAL_LINKS.FACEBOOK,
      text: 'Facebook',
    },
    {
      link: SOCIAL_LINKS.MEDIUM,
      text: 'Medium',
    },
    {
      link: SOCIAL_LINKS.TIKTOK,
      text: 'TikTok',
    },
    {
      link: SOCIAL_LINKS.GITHUB,
      text: 'GitHub',
    },
    {
      link: SOCIAL_LINKS.WHATSAPP,
      text: 'WhatsApp',
    },
  ];

  constructor() {}
}
