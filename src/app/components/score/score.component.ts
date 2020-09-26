import { Subscription } from 'rxjs';
import { MatchScore } from './../../models/match-score';
import { Component, Input, Output, OnInit } from '@angular/core';
import { ScoresApiService } from 'src/app/services/scores-api.service';






@Component({
  selector: 'app-score',
  templateUrl: './score.component.html',
  styleUrls: ['./score.component.scss']
})
export class ScoreComponent {

  @Input()
  score: MatchScore;
  isOpened: boolean;
  subscription: Subscription;
  constructor(private scoresApiService: ScoresApiService) {
    this.subscription = this.scoresApiService.getData().subscribe(isOpened => this.isOpened = isOpened);
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
