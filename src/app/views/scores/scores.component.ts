import { ScoresApiService } from 'src/app/services/scores-api.service';
import { Observable, Subscription } from 'rxjs';
import { MatchScore } from './../../models/match-score';
import { Component, OnInit, Output } from '@angular/core';



@Component({
  selector: 'app-scores',
  template: `{{isOpened}}`,
  templateUrl: './scores.component.html',
  styleUrls: ['./scores.component.scss']
})
export class ScoresComponent implements OnInit {
  scores: Observable<MatchScore[]>;
  isOpened: boolean = false;
  scoreData: Observable<MatchScore>;

  constructor(
    private scoresApiService: ScoresApiService) { }

  ngOnInit(): void {
    this.scores = this.scoresApiService.getScores();
    // this.scoreData = this.scoresApiService.getMoarData();
  }

  // toggleOpened($event) {
  //   this.isOpened = !this.isOpened;
  //   this.scoresApiService.sendData(this.isOpened);
  //   // this.scoreData = $event;
  //   // this.scoresApiService.sendMoarData(this.score)
  // }
}