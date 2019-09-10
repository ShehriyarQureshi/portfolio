import { Component, OnInit, HostListener, ElementRef, ViewChild, Renderer2, AfterViewInit, OnDestroy } from '@angular/core';
import { Observable, of, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { slideInLeft, slideInRight } from 'src/app/animations/greeter.animation';
import { DetailService } from 'src/app/services/detail.service';

@Component({
  selector: 'app-greeter',
  templateUrl: './greeter.component.html',
  styleUrls: ['./greeter.component.scss'],
  animations: [
    slideInLeft,
    slideInRight
  ]
})
export class GreeterComponent implements OnInit {

  constructor(
    public detailService: DetailService
  ) { }

  ngOnInit() {
  }

}
