import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.scss']
})
export class ProjectCardComponent implements OnInit {

  @Input()
  public projectDetails: any;

  public isLinkPresent = false;

  public backgroundImageValue: string;

  constructor() { }

  ngOnInit() {
    if (this.projectDetails.link) {
      this.isLinkPresent = true;
    } else {
      this.isLinkPresent = false;
    }
    this.getBackgroundImageValue();
  }

  getBackgroundImageValue(): void {
    this.backgroundImageValue = `url(../../../${this.projectDetails.image})`;
  }

}
