import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { slideInDown, slideInLeft, slideInRight, fadeIn } from 'src/app/animations/greeter.animation';
import { DetailService } from 'src/app/services/detail.service';
import { BUTTON_TEXT } from 'src/app/global';

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
