import { Component, OnInit } from '@angular/core';
import { fadeIn, slideInDown, slideInLeft, slideInRight } from 'src/app/animations/greeter.animation';
import { BUTTON_TEXT, SOCIAL_LINKS } from 'src/app/global';
import { DetailService } from 'src/app/services/detail.service';
import { SSL_OP_MICROSOFT_BIG_SSLV3_BUFFER } from 'constants';

@Component({
  selector: 'app-greeter',
  templateUrl: './greeter.component.html',
  styleUrls: ['./greeter.component.scss'],
  animations: [
    slideInLeft,
    slideInRight,
    slideInDown,
    fadeIn
  ]
})
export class GreeterComponent implements OnInit {

  constructor(
    public detailService: DetailService
  ) { }

  ngOnInit() {
  }

  shouldShowLink(link: string) {
    // let's not show tiktok on the forefront XD
    return (
      link !== SOCIAL_LINKS.TIKTOK
      && link !== SOCIAL_LINKS.GITHUB
      && link !== SOCIAL_LINKS.ANCHOR
      && link !== SOCIAL_LINKS.MEDIUM
      && link !== SOCIAL_LINKS.WHATSAPP
    );
  }

  public get websiteText(): string {
    return BUTTON_TEXT.WEBSITE;
  }

  public get webAppText(): string {
    return BUTTON_TEXT.WEB_APP;
  }

  public launchLink(projectType: string) {
    if (projectType === 'website') {
      window.open('https://forms.gle/MLEL5r4RY2HpecE67');
    } else if (projectType === 'webapp') {
      window.open('https://forms.gle/3vktQ5fdFG7vF18q9');
    }
  }

}
