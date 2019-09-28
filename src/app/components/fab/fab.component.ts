import { Component, OnInit } from '@angular/core';
import { slideInRight } from 'src/app/animations/fab.animation';

@Component({
  selector: 'app-fab',
  templateUrl: './fab.component.html',
  styleUrls: ['./fab.component.scss'],
  animations: [
    slideInRight
  ]
})
export class FabComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
