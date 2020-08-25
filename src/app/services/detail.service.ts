import { Injectable } from '@angular/core';
import { SOCIAL_LINKS } from '../global';

@Injectable({
  providedIn: 'root',
})
export class DetailService {
  public socials: Array<any> = [
    {
      class: 'fa-instagram',
      link: SOCIAL_LINKS.INSTAGRAM,
      text: 'Instagram',
    },
    {
      class: 'fa-facebook',
      link: SOCIAL_LINKS.FACEBOOK,
      text: 'Facebook',
    },
    {
      class: 'fa-linkedin',
      link: SOCIAL_LINKS.LINKEDIN,
      text: 'LinkedIn',
    },
    {
      class: 'fa-twitter',
      link: SOCIAL_LINKS.TWITTER,
      text: 'Twitter',
    },
    {
      class: 'fa-snapchat-ghost',
      link: SOCIAL_LINKS.SNAPCHAT,
      text: 'Snapchat',
    },
    {
      class: 'fa-microphone',
      link: SOCIAL_LINKS.ANCHOR,
      text: 'Podcast',
    },
    {
      class: 'fa-youtube',
      link: SOCIAL_LINKS.YOUTUBE,
      text: 'YouTube',
    },
    {
      class: 'fa-whatsapp',
      link: SOCIAL_LINKS.WHATSAPP,
      text: 'WhatsApp',
    },
    {
      class: 'fa-github',
      link: SOCIAL_LINKS.GITHUB,
      text: 'GitHub',
    },
    {
      class: 'fa-medium',
      link: SOCIAL_LINKS.MEDIUM,
      text: 'Medium',
    },
    {
      class: 'fa-music',
      link: SOCIAL_LINKS.TIKTOK,
      text: 'TikTok',
    },
  ];

  constructor() {}
}
