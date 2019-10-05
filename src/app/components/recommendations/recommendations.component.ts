import { Component, OnInit } from '@angular/core';
import { RecommendationService } from 'src/app/services/recommendation.service';

@Component({
  selector: 'app-recommendations',
  templateUrl: './recommendations.component.html',
  styleUrls: ['./recommendations.component.scss']
})
export class RecommendationsComponent implements OnInit {

  public isSingleRecommendation: boolean;

  constructor(
    public recommendationService: RecommendationService
  ) { }

  ngOnInit() {
    if (this.recommendationService.recommendations.length === 1) {
      this.isSingleRecommendation = true;
    } else {
      this.isSingleRecommendation = false;
    }
  }

}
