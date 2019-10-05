import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-recommendation-card',
  templateUrl: './recommendation-card.component.html',
  styleUrls: ['./recommendation-card.component.scss']
})
export class RecommendationCardComponent implements OnInit {

  @Input()
  public recommendationDetails: any;
  public backgroundImageValue: string;

  constructor() { }

  ngOnInit() {
    this.getBackgroundImageValue();
  }

  getBackgroundImageValue(): void {
    this.backgroundImageValue = `url(../../../${this.recommendationDetails.avatar})`;
  }

}
