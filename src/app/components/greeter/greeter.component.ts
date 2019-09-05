import { Component, OnInit, HostListener, ElementRef, ViewChild, Renderer2, AfterViewInit, OnDestroy } from '@angular/core';
import { Observable, of, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { slideInLeft, slideInRight } from 'src/app/animations/greeter.animation';

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

  constructor() { }

  ngOnInit() {
  }

}
