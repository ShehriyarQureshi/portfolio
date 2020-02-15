import { Component, OnInit } from '@angular/core';
import { fullHeight } from 'contact.animation';
import { SOCIAL_LINKS } from 'src/app/global';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
  animations: [fullHeight]
})
export class ContactComponent implements OnInit {
  public socials: Array<any> = [
    {
      class: 'fa-instagram',
      link: SOCIAL_LINKS.INSTAGRAM,
      text: 'Get insights into my everyday life'
    },
    {
      class: 'fa-facebook',
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

  ngOnInit() { }
}
