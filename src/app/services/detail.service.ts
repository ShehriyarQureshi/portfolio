import { Injectable } from '@angular/core';
import { SOCIAL_LINKS } from '../global';
import {
  faInstagram,
  faFacebook,
  faTwitter,
  faLinkedin,
  faSnapchat,
  faYoutube,
  faGithub,
  faMedium,
  faTiktok,
  faWhatsapp,
} from '@fortawesome/free-brands-svg-icons';

import { faMicrophone } from '@fortawesome/free-solid-svg-icons';

@Injectable({
  providedIn: 'root',
})
export class DetailService {
  public socials: Array<any> = [
    {
      icon: faInstagram,
      link: SOCIAL_LINKS.INSTAGRAM,
      text: 'Instagram',
    },
    {
      icon: faFacebook,
      link: SOCIAL_LINKS.FACEBOOK,
      text: 'Facebook',
    },
    {
      icon: faLinkedin,
      link: SOCIAL_LINKS.LINKEDIN,
      text: 'LinkedIn',
    },
    {
      icon: faTwitter,
      link: SOCIAL_LINKS.TWITTER,
      text: 'Twitter',
    },
    {
      icon: faSnapchat,
      link: SOCIAL_LINKS.SNAPCHAT,
      text: 'Snapchat',
    },
    {
      icon: faMicrophone,
      link: SOCIAL_LINKS.ANCHOR,
      text: 'Podcast',
    },
    {
      icon: faYoutube,
      link: SOCIAL_LINKS.YOUTUBE,
      text: 'YouTube',
    },
    {
      icon: faWhatsapp,
      link: SOCIAL_LINKS.WHATSAPP,
      text: 'WhatsApp',
    },
    {
      icon: faGithub,
      link: SOCIAL_LINKS.GITHUB,
      text: 'GitHub',
    },
    {
      icon: faMedium,
      link: SOCIAL_LINKS.MEDIUM,
      text: 'Medium',
    },
    {
      icon: faTiktok,
      link: SOCIAL_LINKS.TIKTOK,
      text: 'TikTok',
    },
  ];

  constructor() {}
}
