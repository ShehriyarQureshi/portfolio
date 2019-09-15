import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { slideInDown, slideInLeft, slideInRight, fadeIn } from 'src/app/animations/greeter.animation';
import { DetailService } from 'src/app/services/detail.service';

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

  @ViewChild('scroll-div', { static: true })
  public scrollDiv: ElementRef;

  public showScrollDiv = false;

  constructor(
    public detailService: DetailService
  ) { }

  ngOnInit() {
  }

  public startScrollDivAnimation() {
    this.showScrollDiv = true;
  }

  public launchLink(projectType: string) {
    if (projectType === 'website') {
      window.open('https://forms.gle/MLEL5r4RY2HpecE67');
    } else if (projectType === 'webapp') {
      window.open('https://forms.gle/3vktQ5fdFG7vF18q9');
    }
  }

}
