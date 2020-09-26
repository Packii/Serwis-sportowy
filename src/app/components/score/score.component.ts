import { MatchScore } from './../../models/match-score';
import { Component, Input, Output } from '@angular/core';

@Component({
  selector: 'app-score',
  templateUrl: './score.component.html',
  styleUrls: ['./score.component.scss']
})
export class ScoreComponent {

  @Input()
  score: MatchScore;

  hover() {

  }

}
