import { Component, OnInit } from '@angular/core';
import { fullHeight } from 'contact.animation';
import { SOCIAL_LINKS } from 'src/app/global';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
  animations: [
    fullHeight
  ]
})
export class ContactComponent implements OnInit {

  public socials: Array<any> = [
    {
      class: 'fa-instagram',
      link: SOCIAL_LINKS.INSTAGRAM,
      text: 'wabba labba dub dub'
    },
    {
      class: 'fa-facebook',
      link: SOCIAL_LINKS.FACEBOOK,
      text: 'wabba labba dub dub'
    },
    {
      class: 'fa-linkedin',
      link: SOCIAL_LINKS.LINKEDIN,
      text: 'wabba labba dub dub'
    },
    {
      class: 'fa-twitter',
      link: SOCIAL_LINKS.TWITTER,
      text: 'wabba labba dub dub'
    },
    {
      class: 'fa-snapchat',
      link: SOCIAL_LINKS.SNAPCHAT,
      text: 'wabba labba dub dub'
    },
    {
      class: 'fa-microphone',
      link: SOCIAL_LINKS.ANCHOR,
      text: 'wabba labba dub dub'
    },
    {
      class: 'fa-youtube',
      link: SOCIAL_LINKS.YOUTUBE,
      text: 'wabba labba dub dub'
    },
    {
      class: 'fa-whatsapp',
      link: SOCIAL_LINKS.WHATSAPP,
      text: 'wabba labba dub dub'
    },
  ];

  constructor() {
  }

  ngOnInit() {
  }
}
