import { ScoresApiService } from './../../services/scores-api.service';
import { Observable, Subscription } from 'rxjs';
import { MatchScore } from './../../models/match-score';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-scores',
  templateUrl: './scores.component.html',
  styleUrls: ['./scores.component.scss']
})
export class ScoresComponent implements OnInit {
  scores: Observable<MatchScore[]>;

  arrayData: any;

  constructor(
    private scoresApiService: ScoresApiService,
  ) { }

  ngOnInit(): void {
    this.scores = this.scoresApiService.getScores();
  }
}