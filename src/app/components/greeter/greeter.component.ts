import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { slideInDown, slideInLeft, slideInRight } from 'src/app/animations/greeter.animation';
import { DetailService } from 'src/app/services/detail.service';

@Component({
  selector: 'app-greeter',
  templateUrl: './greeter.component.html',
  styleUrls: ['./greeter.component.scss'],
  animations: [
    slideInLeft,
    slideInRight,
    slideInDown
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

}
